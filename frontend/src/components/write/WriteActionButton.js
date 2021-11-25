import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const WriteActionButtonBlock = styled(Responsive)`
  width: 1000px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-top: 2px solid ${palette.gray[2]};
  button + button {
    margin-left: 0.5rem;
    margin-top: 3rem;
  }
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButton = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};
export default WriteActionButton;
