import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import client from '../../lib/api/client';

const EditorBlock = styled(Responsive)`
  width: 1000px;
  padding-top: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor .ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ title, body, onChangeField }) => {
  const quills = useRef(null);
  const imageRef = useRef(null);

  const onClickImageBtn = useCallback(() => {
    imageRef.current.click();
  }, [imageRef]);

  const onChangeImageInput = async (e) => {
    e.preventDefault();
    if (!imageRef.current.files[0]) return;
    let imageFormData = new FormData();
    const fileToUpload = imageRef.current.files[0];
    imageFormData.append('file', fileToUpload);
    const imageFileInfo = await client.post('/api/upload', imageFormData);
    const editor = quills.current.getEditor();
    const range = editor.getSelection();
    editor.insertEmbed(
      range,
      'image',
      `http://localhost:4000/uploads/${imageFileInfo.data}`,
    );
  };
  const modules = {
    toolbar: {
      container: [
        [{ header: '1' }, { header: '2' }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block', 'link', 'image'],
      ],
      handlers: {
        image: onClickImageBtn,
      },
    },
  };

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };
  const onChangeBody = (e) => {
    onChangeField({ key: 'body', value: e });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <input
          hidden
          type="file"
          onChange={onChangeImageInput}
          ref={imageRef}
          name="file"
        />
        <ReactQuill
          ref={quills}
          theme="snow"
          placeholder="플레이스 홀더"
          value={body}
          modules={modules}
          onChange={onChangeBody}
        />
      </QuillWrapper>
    </EditorBlock>
  );
};
export default Editor;
