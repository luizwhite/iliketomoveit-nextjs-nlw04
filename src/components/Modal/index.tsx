import React, { useState, useEffect, ReactNode } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, closeModal }) => {
  const [modalIsOpen, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={closeModal}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={{
        content: {
          padding: 0,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          // marginRight: '-50%',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          border: 'none',
        },
        // overlay: { backgroundColor: '#121214e6' },
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(242, 243, 245, 0.8',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
