import '../style/componets/fileCard.scss';
import { useNavigate } from 'react-router-dom';

const FileCard = ({ url, file }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(url);
  };

  if (!file[url]) {
    return <>로딩 중...</>;
  }

  const { title, summary, titleImgSrc, writeData } = file[url];
  return (
    <div className="card_container" onClick={onClick}>
      <img src={url + titleImgSrc} alt="배경화면" />
      <div className="contents">
        <div className="title">{title}</div>
        <p className="summary">요약: {summary}</p>
        <p className="writeDate">{writeData}</p>
      </div>
    </div>
  );
};

export default FileCard;
