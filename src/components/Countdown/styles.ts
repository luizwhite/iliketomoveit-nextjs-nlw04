import styled from 'styled-components';

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

export const CountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  width: 100%;
  height: 5rem;
  border-radius: 5px;

  background-color: var(--blue);
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:hover {
    background-color: var(--blue-dark);
  }
`;
