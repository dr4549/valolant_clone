import DropDownArrow from '../DropDownArrow';
import LogoRiot from '../LogoRiot';
import LogoValorant from '../LogoValorant';
import './index.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const goToRoute = () => {
    open('https://valorantesports.com/');
  };

  return (
    <header className="main_header">
      <div className="header_wrapper">
        <div className="logo_wrapper">
          <LogoRiot />
          <DropDownArrow />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <LogoValorant />
              </Link>
            </li>
            <li>
              <Link to="/info">게임 정보</Link>
              <DropDownArrow />
            </li>
            <li>
              <Link to="/media">미디어</Link>
            </li>
            <li>
              <Link to="/news">소식</Link>
              <DropDownArrow />
            </li>
            <li>
              <Link to="/leaderboards">순위표</Link>
            </li>
            <li>
              <Link to="/support">고객지원</Link>
              <DropDownArrow />
            </li>
            <li>
              <a onClick={() => goToRoute('')}>이벤트</a>
              <DropDownArrow />
            </li>
            <li>
              <a onClick={() => goToRoute('')}>소셜 미디어</a>
              <DropDownArrow />
            </li>
            <li>
              <a onClick={() => goToRoute('')}>E스포츠</a>
              <DropDownArrow />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
