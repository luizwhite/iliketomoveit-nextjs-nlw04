import styled from 'styled-components';

interface InputContainerProps {
  $isFocused: boolean;
  $isFilled: boolean;
}

interface ArrowButtonProps {
  $isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    border: none;
    background-color: unset;

    color: var(--white);
    line-height: 24px;

    &::placeholder {
      color: var(--blue-light);
    }
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  padding: 18px;

  background-image: linear-gradient(to right, #ba734a, var(--blue));
  background-clip: padding-box;

  border-radius: 6px 0 0 6px;
  box-shadow: ${({ $isFocused, $isFilled }) =>
    $isFocused && !$isFilled
      ? 'inset 0px 0px 0px 2px var(--blue-dark)'
      : 'none'};

  cursor: text;
`;

export const ArrowButton = styled.button<ArrowButtonProps>`
  padding: 18px;

  font-size: 0;
  border-radius: 0 6px 6px 0;
  background-color: ${({ $isFilled }) => ($isFilled ? '#48cb29' : '#cd7e51')};
`;
