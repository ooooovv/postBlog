import React from 'react';
import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const Istr = styled.div`
  background: white;
  padding: 1rem;
  margin-top: 5rem;
`;

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Istr>
          <EditorContainer />
          <TagBoxContainer />
          <WriteActionButtonsContainer />
        </Istr>
      </Responsive>
    </>
  );
};
export default WritePage;
