import '../style/pages/homePage.scss';
import { useCallback } from 'react';
import Topic from '../components/Topic';
import * as env from '../lib/env';

const HomePage = ({ profile, folder }) => {
  const bgPath = useCallback(() => {
    const backgroundImgCount = profile.backgroundItemCount;
    const randomInt = Math.floor(Math.random() * backgroundImgCount) + 1;
    return `${env.PATH_PORFILE}${profile.backgroundPATH}/${randomInt}${profile.backgroundImgFommat}`;
  }, []);
  return (
    <>
      <div className="hompage_container">
        <div className="header">
          <div className="img_box">
            <img src={bgPath()} alt="배경화면" />
          </div>
        </div>
        {Object.keys(folder).map((categories) => {
          const url = env.PATH_POST + `/${categories}`;
          return Object.keys(folder[categories]).map((topic) => (
            <Topic
              key={`${categories}-${topic}`}
              list={folder[categories][topic]}
              url={url + `/${topic}`}
            >
              {topic}
            </Topic>
          ));
        })}
      </div>
    </>
  );
};

export default HomePage;
