import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  position: relative;

  background: ${({ theme }) => theme.appColors.primary}
    url('icons/bg_image.svg') left no-repeat;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24% 0 56%;

  position: relative;
  top: 24%;
  max-height: 76%;
  color: ${({ theme }) => theme.appColors.specialText};

  overflow: hidden;

  > svg {
    margin-bottom: 6rem;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: 36px;
    font-weight: 600;
  }
`;

export const LoginWithGithubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  button {
    margin-right: 1.5rem;
    background-color: unset;

    svg path {
      fill: #b16d46;
    }
  }

  span {
    width: 220px;
    line-height: 1.6;
    margin-right: auto;
  }
`;
