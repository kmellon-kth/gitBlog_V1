import '../style/pages/contentsPage.scss';
import MDEditor from '@uiw/react-md-editor';

const ContentsPage = ({ mkd, fileIndex }) => {
  return (
    <div className="contantsPage_container">
      <div className="title">{fileIndex.title}</div>
      <div className="markdownDiv">
        <MDEditor.Markdown
          style={{ background: 'inherit', color: 'black' }}
          source={mkd}
        />
      </div>
    </div>
  );
};

export default ContentsPage;
