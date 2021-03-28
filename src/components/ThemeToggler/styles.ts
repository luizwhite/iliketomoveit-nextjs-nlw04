import styled, { css } from 'styled-components';

export const Container = styled.button<{ ['theme-name']: string | null }>`
  height: 20px;
  width: 40px;

  border-radius: 10px;
  background-color: #f8f8f8;

  opacity: 0.6;
  box-shadow: 0 0.7px 0.9px rgba(0, 0, 0, 0.209),
    0 1.9px 2.5px rgba(0, 0, 0, 0.3), 0 4.5px 6px rgba(0, 0, 0, 0.391),
    0 15px 20px rgba(0, 0, 0, 0.6);
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 1;

    > div > div:first-child {
      box-shadow: inset 0 0 0 8px rgb(224, 138, 89, 0.8);
    }
  }

  ${({ 'theme-name': themeName, theme }) =>
    themeName === 'dark' &&
    css`
      background-color: ${theme.appColors.special};

      &:hover {
        > div > div:first-child {
          box-shadow: none;
        }
      }

      > div > div:first-child {
        box-shadow: none;
        background-color: ${theme.appColors.text};
        left: calc(calc(40px - 15px) - 4px);
      }
    `};
`;

export const TogglerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  left: 4px;

  height: 15px;
  width: 15px;

  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 0 1px #e08a59;

  transition: box-shadow 0.2s, background-color 0.2s, left 0.3s;
  z-index: 10;
`;

export const Stroke = styled.div`
  position: absolute;
  left: calc(4px + 3px);

  height: 1px;
  width: ${40 - (4 + 3) * 2}px;

  background-color: ${({ theme }) => theme.appColors.special};
  opacity: 0.6;
`;
