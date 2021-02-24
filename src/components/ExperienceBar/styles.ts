import styled from 'styled-components';

interface ProgressBarProps {
  xp: number;
}

interface CurrentExperienceProps {
  xp: number;
}

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    margin: 0 1.5rem;

    border-radius: 4px;
    background-color: var(--gray-line);

    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background-color: var(--green);
    }
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ xp }) => xp}%;
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  span {
    left: ${({ xp }) => xp}%;
    position: absolute;
    transform: translateX(-50%);
  }
`;
