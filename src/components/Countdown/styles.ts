import styled, { css } from 'styled-components';

interface CountdownButtonProps {
  countdownStyle?: string;
  timeLeftPercent?: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Rajdhani';
  font-weight: 600;
  color: var(--title);

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid #f0f1f3;
      }

      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
`;

export const CountdownButton = styled.button<CountdownButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  width: 100%;
  height: 5rem;
  border-radius: 5px;

  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
  position: relative;
  overflow: hidden;

  svg {
    margin-left: 1rem;
  }

  &[disabled] {
    border-top: 5px solid transparent;
    border-bottom: 5px solid var(--green);

    background-color: var(--white);
    color: var(--text-default);
    cursor: not-allowed;
  }

  ${({ countdownStyle: styledCountdown }) =>
    styledCountdown &&
    css`
      &:hover {
        color: var(--white);
      }

      ${({ countdownStyle, timeLeftPercent }: CountdownButtonProps) =>
        countdownStyle === 'start'
          ? css`
              background-color: var(--blue);
              color: var(--white);

              &:hover {
                background-color: var(--blue-dark);
              }
            `
          : css`
              padding: 5px 0;

              background-color: var(--white);
              color: var(--text-default);

              &:hover {
                background-color: var(--red);

                svg path {
                  fill: var(--white);
                }
              }

              > div {
                position: absolute;

                width: 100%;
                background-color: var(--gray-line);
                height: 5px;
                bottom: 0;
                right: 0;
                left: 0;
              }

              &::after {
                content: '';
                position: absolute;

                height: 5px;
                bottom: 0;
                right: 0;
                left: 0;

                width: ${timeLeftPercent}%;
                background-color: var(--green);

                transition: width 1s linear;

                /* background: linear-gradient(
                  to right,
                  var(--green) 0%,
                  var(--green) ${timeLeftPercent}%,
                  var(--gray-line) ${timeLeftPercent}%,
                  var(--gray-line) 100%
                ); */
              }
            `}
    `}
`;
