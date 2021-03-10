import React from 'react';

import { StyledModal, Container, TwitterAnchor } from './styles';

import TwitterIcon from '../../assets/twitter.svg';

interface IModalProps {
  level: number;
  modalIsOpen: boolean;
  shareToTwitterURL: string;
  closeModal: () => void;
}

const ModalLevelUp: React.FC<IModalProps> = ({
  level,
  modalIsOpen,
  closeModal,
  shareToTwitterURL,
}) => {
  return (
    <StyledModal isOpen={modalIsOpen} closeModal={closeModal}>
      <Container>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
      <TwitterAnchor href={shareToTwitterURL} target="_blank">
        Compartilhar no Twitter
        <TwitterIcon />
      </TwitterAnchor>
    </StyledModal>
  );
};

export default ModalLevelUp;
