import '../style/componets/topBar.scss';
import * as env from '../lib/env';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ folder }) => {
  const navigate = useNavigate();
  const onClick = (url) => () => {
    navigate(url);
  };
  return (
    <>
      <ul className="menu">
        {Object.keys(folder).map((category) => (
          <li key={category}>
            {category}
            {Object.keys(folder[category]).length &&
              Object.keys(folder[category]).map((topic) => (
                <ul className="subMenu" key={topic}>
                  <li
                    onClick={onClick(`${env.PATH_POST}/${category}/${topic}`)}
                  >
                    {topic}
                  </li>
                </ul>
              ))}
          </li>
        ))}
      </ul>
      <div className="logo">KMELLON 👨‍💻🍈</div>
    </>
  );
};

export default TopBar;
