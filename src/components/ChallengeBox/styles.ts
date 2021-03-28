import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;

  height: 100%;

  background-color: ${({ theme }) => theme.appColors.secondaryBg};
  border-radius: 5px;

  box-shadow: 0 0 30px rgba(${({ theme }) => theme.appColors.shadowRgb}, 0.4);
  text-align: center;
`;

export const ChallengeNotActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    align-items: center;
    max-width: 90%;
    margin-top: 3rem;

    line-height: 1.4;

    img {
      height: 50px;
      margin-right: 1.2rem;
    }

    span {
      flex: 1;
    }
  }
`;

export const ChallengeActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.appColors.border};

    color: ${({ theme }) =>
      theme.name === 'dark'
        ? theme.appColors.specialText
        : theme.appColors.primary};
    font-weight: 600;
    font-size: 1.25rem;
  }

  main {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      margin: 1.5rem 0 1rem;

      font-size: 2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.appColors.textStrong};
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 3rem;
      border-radius: 5px;

      color: ${({ theme }) => theme.appColors.specialText};
      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: saturate(0.5);
      }
    }
  }
`;

export const FailedButton = styled.button`
  background-color: ${({ theme }) => theme.colors['red-100']};
`;

export const SucceededButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
`;
