import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <logo />
      <nav>
        <ul>
          <li>
            <Link to="/">돌아가기</Link>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
