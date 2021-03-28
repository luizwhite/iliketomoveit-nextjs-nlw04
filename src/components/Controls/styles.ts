import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button:last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;
    margin-left: 10px;
    height: 40px;
    background-color: transparent;

    font-size: 0;
  }

  > button svg {
    width: 20px;
    height: auto;
    stroke: ${({ theme }) => theme.appColors.primary};
  }

  > button:hover svg {
    stroke-width: 3;
  }
`;
