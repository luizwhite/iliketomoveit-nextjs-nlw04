import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;

  height: 100%;

  background-color: var(--white);
  border-radius: 5px;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
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
    border-bottom: 1px solid var(--gray-line);

    color: var(--blue);
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
      color: var(--title);
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

      color: var(--white);
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
  background-color: var(--red);
`;

export const SucceededButton = styled.button`
  background-color: var(--green);
`;
