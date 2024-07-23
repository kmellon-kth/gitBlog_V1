import '../style/componets/topic.scss';
import FileCardContainer from '../container/FileCardContainer';

const Topic = ({ list, url, children: topic }) => {
  return (
    <>
      <div className="topic_container">
        <div className="topic">{topic}</div>
        <div className="list">
          {list.length ? (
            list.map((file) => (
              <FileCardContainer key={file} url={url + `/${file}`} />
            ))
          ) : (
            <div>작성된 파일이 없습니다.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Topic;
