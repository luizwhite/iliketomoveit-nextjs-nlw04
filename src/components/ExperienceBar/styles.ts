import styled from 'styled-components';

interface ProgressBarProps {
  xpPercentual: number;
}

interface CurrentExperienceProps {
  xpPercentual: number;
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
    background-color: ${({ theme }) => theme.appColors.lightBg};

    position: relative;
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ xpPercentual }) => xpPercentual}%;
  height: 4px;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  span {
    left: ${({ xpPercentual }) => xpPercentual}%;
    position: absolute;
    transform: translateX(-50%);
  }
`;
