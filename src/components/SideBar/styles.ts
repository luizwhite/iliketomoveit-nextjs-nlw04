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

  background-image: linear-gradient(180deg, #f2f2f2 0%, #ccc 120%);
  filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.3));
  z-index: 10;

  > div:first-child svg,
  > div:last-child svg {
    width: 48px;
    height: auto;

    path {
      fill: var(--blue);
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
  background-color: var(--blue);
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

  ${({ $isHome }) =>
    $isHome
      ? css`
          > button:first-child svg {
            width: 30px;

            g {
              opacity: 1;
              stroke: var(--blue);
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
              stroke: var(--blue);
            }
          }

          > button:first-child:hover svg {
            transform: scale(1.2);
          }
        `}
`;
