import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 3rem;
  width: 100%;
  max-width: 400px;

  border-radius: 5px;
  background-color: var(--white);

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    background: url('/icons/levelup.svg') no-repeat center/contain;

    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: var(--text-default);
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
export const Container2 = styled.div``;
