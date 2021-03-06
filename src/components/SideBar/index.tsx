import { Container, NavContainer, HoverBar } from './styles';

import Logo from '../../assets/logo_white.svg';
import HomeIcon from '../../assets/home_icon.svg';
import MedalIcon from '../../assets/medal_icon.svg';

interface SideBarProps {
  $isHome?: boolean;
  handleHomeClick: () => void;
  handleLeaderboardClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({
  $isHome,
  handleHomeClick,
  handleLeaderboardClick,
}) => {
  return (
    <Container>
      <div>
        <Logo viewBox="0 0 80 71" />
      </div>

      <NavContainer {...($isHome && { $isHome })}>
        <button type="button" onClick={handleHomeClick}>
          <HoverBar />
          <HomeIcon viewBox="0 0 32 32" />
        </button>
        <button type="button" onClick={handleLeaderboardClick}>
          <HoverBar />
          <MedalIcon viewBox="0 0 32 32" />
        </button>
      </NavContainer>

      <div>
        <Logo viewBox="0 0 80 71" />
      </div>
    </Container>
  );
};

export default SideBar;
