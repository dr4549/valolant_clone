import { useRef } from 'react';
import DropDownArrow from '../DropDownArrow';
import LogoRiot from '../LogoRiot';
import LogoValorant from '../LogoValorant';
import './index.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const infoRef = useRef(null);
  const mediaRef = useRef(null);
  const supportRef = useRef(null);
  const eventRef = useRef(null);

  const handleMenuHover = (ref, isVisible) => {
    ref.current.style.visibility = isVisible ? 'visible' : 'hidden';
  };
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
            <li
              onMouseEnter={() => handleMenuHover(infoRef, true)}
              onMouseLeave={() => handleMenuHover(infoRef, false)}
            >
              <div className="menu">
                <a>게임 정보</a>
                <DropDownArrow />
              </div>
              <div ref={infoRef} className="menu_hover">
                <a>요원</a>
                <a>맵</a>
                <a>무기고</a>
                <a>프리미어</a>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="/media">미디어</Link>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMenuHover(mediaRef, true)}
              onMouseLeave={() => handleMenuHover(mediaRef, false)}
            >
              <div className="menu">
                <a>소식</a>
                <DropDownArrow />
              </div>
              <div ref={mediaRef} className="menu_hover">
                <a>전체</a>
                <a>게임 업데이트</a>
                <a>공지</a>
                <a>개발자 블로그</a>
                <a>E스포츠</a>
                <a>커뮤니티</a>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="/leaderboards">순위표</Link>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMenuHover(supportRef, true)}
              onMouseLeave={() => handleMenuHover(supportRef, false)}
            >
              <div className="menu">
                <a>고객지원</a>
                <DropDownArrow />
              </div>
              <div ref={supportRef} className="menu_hover">
                <a>사양</a>
                <a>고객지원</a>
                <a>커뮤니티 행동 수칙</a>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMenuHover(eventRef, true)}
              onMouseLeave={() => handleMenuHover(eventRef, false)}
            >
              <div className="menu">
                <a>이벤트</a>
                <DropDownArrow />
              </div>
              <div ref={eventRef} className="menu_hover">
                <a>이벤트1</a>
                <a>이벤트2</a>
                <a>이벤트3</a>
                <a>이벤트4</a>
              </div>
            </li>
            <li>
              <div className="menu">
                <a onClick={() => goToRoute('')}>E스포츠</a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
