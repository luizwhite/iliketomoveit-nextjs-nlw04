import React from 'react';

import { StyledModal, Container, TwitterButton } from './styles';

import TwitterIcon from '../../assets/twitter.svg';

interface IModalProps {
  level: number;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ModalLevelUp: React.FC<IModalProps> = ({
  level,
  modalIsOpen,
  closeModal,
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
      <TwitterButton>
        Compartilhar no Twitter
        <TwitterIcon />
      </TwitterButton>
    </StyledModal>
  );
};

export default ModalLevelUp;
