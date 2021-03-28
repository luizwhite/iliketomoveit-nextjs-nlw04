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
  color: ${({ theme }) => theme.appColors.textStrong};

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${({ theme }) => theme.appColors.secondaryBg};
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(${({ theme }) => theme.appColors.shadowRgb}, 0.4);

    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;

      &:first-child {
        border-right: 1px solid ${({ theme }) => theme.appColors.border};
      }

      &:last-child {
        border-left: 1px solid ${({ theme }) => theme.appColors.border};
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

  color: ${({ theme }) => theme.appColors.specialText};
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
    border-bottom: 5px solid ${({ theme }) => theme.colors.green};

    background-color: ${({ theme }) => theme.appColors.secondaryBg};
    color: ${({ theme }) => theme.appColors.textSoft};
    cursor: not-allowed;
  }

  ${({ countdownStyle: styledCountdown }) =>
    styledCountdown &&
    css`
      &:hover {
        color: ${({ theme }) => theme.appColors.specialText};
      }

      ${({ countdownStyle, timeLeftPercent }: CountdownButtonProps) =>
        countdownStyle === 'start'
          ? css`
              background-color: ${({ theme }) => theme.appColors.specialBg};
              color: ${({ theme }) => theme.appColors.specialText};

              &:hover {
                background-color: ${({ theme }) => theme.appColors.dark};
              }
            `
          : css`
              padding: 5px 0;

              box-shadow: 0 0 30px
                rgba(${({ theme }) => theme.appColors.shadowRgb}, 0.4);
              background-color: ${({ theme }) => theme.appColors.light};
              color: ${({ theme }) => theme.appColors.dark};

              svg path {
                fill: ${({ theme }) => theme.appColors.dark};
              }

              &:hover {
                box-shadow: none;
                background-color: ${({ theme }) => theme.colors['red-100']};

                svg path {
                  fill: ${({ theme }) => theme.appColors.specialText};
                }
              }

              > div {
                position: absolute;

                width: 100%;
                background-color: ${({ theme }) => theme.appColors.dark};
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
                background-color: ${({ theme }) => theme.colors.green};

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
