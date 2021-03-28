import styled from 'styled-components';

import Modal from '../Modal';

export const StyledModal = styled(Modal).attrs({
  borderRadius: 14,
  overlayStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 243, 245, 0.8',
  },
})``;

export const Container = styled.div`
  padding: 2rem 3rem;
  width: 100%;
  max-width: 400px;

  background-color: ${({ theme }) => theme.appColors.secondaryBg};

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    background: url('/icons/levelup.svg') no-repeat center/contain;

    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) =>
      theme.name === 'dark'
        ? theme.appColors.special
        : theme.appColors.primary};
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.appColors.textStrong};
    font-weight: 600;
  }

  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.appColors.textSoft};
  }

  button {
    border: 0;
    font-size: 0;

    background-color: transparent;
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
`;

export const TwitterAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.appColors.border};
  background-color: #f5fcff;

  color: ${({ theme }) => theme.colors['blue-twitter']};
  font-weight: 600;
  font-size: 18px;

  &:hover {
    filter: saturate(1.8);
  }

  svg {
    margin-left: 1rem;
  }
`;
