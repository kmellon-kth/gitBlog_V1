import '../../style/componets/SideBar/menu.scss';
import React, { useState } from 'react';
import * as env from '../../lib/env';
import { useNavigate } from 'react-router-dom';

const File = ({ name, url }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(url);
  };
  return (
    <li className="file" onClick={onClick}>
      <span className="icon">ㄴ</span> {name} <span className="arrow">►</span>
    </li>
  );
};

const Folder = ({ name, files, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li className="folder">
        <div className="folder-name" onClick={() => setIsOpen(!isOpen)}>
          <span className="icon">|</span>
          {name}
          <span className="arrow">{isOpen ? '▼' : '▶️'}</span>
        </div>
        {isOpen && (
          <ul className="file-list">
            {files.map((file) => (
              <File key={file} name={file} url={url + `/${file}`} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

const Category = ({ name, folder, url }) => {
  return (
    <div className="category">
      <h2 className="category-name">{name}</h2>
      <ul className="folder-list">
        {Object.keys(folder).map((topic) => (
          <Folder
            key={folder}
            name={topic}
            files={folder[topic]}
            url={url + `/${topic}`}
          />
        ))}
      </ul>
    </div>
  );
};

const SideBarMenu = ({ folder }) => {
  const url = `${env.PATH_POST}`;
  return (
    <div className="folder-structure">
      {Object.keys(folder).map((category) => (
        <Category
          key={category}
          name={category}
          folder={folder[category]}
          url={url + `/${category}`}
        />
      ))}
    </div>
  );
};

export default SideBarMenu;
