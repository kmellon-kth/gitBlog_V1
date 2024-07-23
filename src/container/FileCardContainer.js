import FileCard from '../components/FileCard';
import { useEffect } from 'react';
import { fetchFile } from '../module/file';
import { connect } from 'react-redux';

const FileCardContainer = ({ url, fetchFile, file }) => {
  useEffect(() => {
    const f = async () => {
      await fetchFile(url);
    };
    f();
  }, [fetchFile, url]);
  return <FileCard url={url} file={file} />;
};

const mapStateToProps = (state) => {
  const { file } = state;
  return {
    file,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFile: (url) => dispatch(fetchFile(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileCardContainer);
