import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskModal from '../common/AskModal';

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.cyan[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButton = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = useCallback(() => {
    setModal(true);
  }, []);
  const onCancel = useCallback(() => {
    setModal(false);
  }, []);
  const onConfirm = useCallback(() => {
    setModal(false);
    onRemove();
  }, [onRemove]);
  return (
    <PostActionButtonBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      <AskModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        title={'포스트 삭제'}
        description={'포스트를 정말 삭제하시겠습니까'}
        confirmText={'삭제'}
      />
    </PostActionButtonBlock>
  );
};
export default PostActionButton;
