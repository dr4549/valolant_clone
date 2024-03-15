import { Link } from 'react-router-dom';

const Header = () => {
  const goToRoute = () => {
    open('https://valorantesports.com/');
  };

  return (
    <header>
      <logo />
      <nav>
        <ul>
          <li>
            <div>burger bar</div>
          </li>
          <li>
            <Link to="/">로고</Link>
          </li>
          <li>
            <Link to="/info">게임 정보</Link>
          </li>
          <li>
            <Link to="/">미디어</Link>
          </li>
          <li>
            <Link to="/">소식</Link>
          </li>
          <li>
            <Link to="/">순위표</Link>
          </li>
          <li>
            <Link to="/">고객지원</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
          <li>
            <Link to="/">소셜 미디어</Link>
          </li>
          <li>
            <a onClick={() => goToRoute('')}>E스포츠</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
