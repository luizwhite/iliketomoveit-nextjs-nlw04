import React, { useState, useEffect, ReactNode } from 'react';

import ReactModal from 'react-modal';

interface OverlayStyleProps {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
}
interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  borderRadius: number;
  overlayStyle: OverlayStyleProps;
  closeModal: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  borderRadius,
  overlayStyle,
  closeModal,
}) => {
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
          borderRadius: `${borderRadius}px`,
          border: 'none',
        },
        overlay: overlayStyle,
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
