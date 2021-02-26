import React from 'react';

import { Container } from './styles';
import Modal from '../Modal';
// eslint-disable-next-line import/no-cycle
// import { useChallenges } from '../../hooks/challenges';

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
    <Modal isOpen={modalIsOpen} closeModal={closeModal}>
      <Container>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo level</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Modal>
  );
};

export default ModalLevelUp;
