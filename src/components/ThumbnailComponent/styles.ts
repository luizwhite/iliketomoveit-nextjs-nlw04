import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 3rem;
  width: 1200px;
  height: 628px;

  background-color: ${({ theme }) => theme.appColors.secondaryBg};

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    width: 400px;
    margin: 0 auto;

    background: url('http://localhost:3000/icons/levelup.svg') no-repeat
      center/contain;
    font-size: 20rem;
    font-weight: 600;
    color: ${({ theme }) =>
      theme.name === 'dark'
        ? theme.appColors.special
        : theme.appColors.primary};
  }

  strong {
    font-size: 3.25rem;
    color: ${({ theme }) => theme.appColors.textStrong};
    font-weight: 600;
  }

  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.appColors.textSoft};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    justify-items: stretch;
    width: 21.375rem;
    height: 100%;

    > div {
      display: flex;
      flex-direction: column;
      text-align: left;

      > span {
        margin-bottom: 0.625rem;

        color: ${({ theme }) => theme.appColors.textSoft};
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        opacity: 0.5;
      }

      > p {
        font-size: 40px;
        font-weight: 500;

        > span {
          color: ${({ theme }) =>
            theme.name === 'dark'
              ? theme.appColors.special
              : theme.appColors.primary};
        }
      }

      &:not(:last-child) {
        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.appColors.border};
      }
    }
  }

  svg {
    width: 300px;

    path {
      fill: ${({ theme }) =>
        theme.name === 'dark'
          ? theme.appColors.special
          : theme.appColors.primary};

      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(11) {
        fill: #4cd62b;
      }
    }
  }
`;
