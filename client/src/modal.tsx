import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

import {
  CloseButton,
  Content,
  Header,
  HeaderText,
  StyledModal,
  Wrapper,
} from "./mode.style";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
}) => {
  const modal = (
    <React.Fragment>
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>GCB Analysis</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
