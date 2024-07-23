import '../style/pages/topicPage.scss';
import { useCallback } from 'react';
import Topic from '../components/Topic';
import * as env from '../lib/env';

import { useParams } from 'react-router-dom';

const TopicPage = ({ profile, folder, loading }) => {
  const { category, topic } = useParams();

  const bgPath = useCallback(() => {
    const backgroundImgCount = profile.backgroundItemCount;
    const randomInt = Math.floor(Math.random() * backgroundImgCount) + 1;
    return `${env.PATH_PORFILE}${profile.backgroundPATH}/${randomInt}${profile.backgroundImgFommat}`;
  }, []);

  return (
    <>
      <div className="topicpage_container">
        <div className="header">
          <div className="img_box">
            <img src={bgPath()} alt="배경화면" />
          </div>
        </div>
        {loading.folder && '로딩 중...'}
        {!loading.folder && folder[category] && folder[category][topic] && (
          <Topic
            list={folder[category][topic]}
            url={env.PATH_POST + `/${category}` + `/${topic}`}
          >
            {topic}
          </Topic>
        )}
      </div>
    </>
  );
};

export default TopicPage;
