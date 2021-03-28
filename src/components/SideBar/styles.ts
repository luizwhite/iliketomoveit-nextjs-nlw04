import styled, { css } from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  width: 90px;

  background-image: ${({ theme }) =>
    theme.name === 'dark'
      ? `linear-gradient(180deg, ${theme.appColors.bg} 0%, ${theme.appColors.dark} 150%)`
      : `linear-gradient(180deg, ${theme.appColors.bg} 0%, ${theme.appColors.dark} 500%)`};

  box-shadow: 0 0 50px -10px ${({ theme }) => theme.appColors.specialShadow};
  z-index: 10;

  > div:first-child svg,
  > div:last-child svg {
    width: 48px;
    height: auto;

    path {
      fill: ${({ theme }) => theme.appColors.primary};
    }
  }

  > div:last-child {
    opacity: 0;
  }

  overflow: hidden;
`;

export const HoverBar = styled.div`
  position: absolute;
  display: none;

  left: 0;
  top: 50%;
  transform: translate(-85%, -50%);
  width: 30px;
  height: 140%;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.appColors.primary};
  clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%);
`;

export const NavContainer = styled.div<{ $isHome?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;

    background-color: unset;
    position: relative;

    &:hover {
      > div {
        display: initial;
      }
    }

    &:first-child {
      margin-bottom: 1rem;
    }

    svg {
      width: 28px;
      height: auto;
      transition: transform 0.2s;
    }
  }

  ${({ $isHome, theme }) =>
    $isHome
      ? css`
          > button:first-child svg {
            width: 30px;

            g {
              opacity: 1;
              stroke: ${theme.appColors.primary};
            }
          }

          > button:last-child:hover svg {
            transform: scale(1.2);
          }
        `
      : css`
          > button:last-child svg {
            width: 30px;

            g {
              opacity: 1;
              stroke: ${theme.appColors.primary};
            }
          }

          > button:first-child:hover svg {
            transform: scale(1.2);
          }
        `}
`;
