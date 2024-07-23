import ContentsPage from '../pages/ContentsPage';
import { useEffect, useState } from 'react';
import { fetchFile } from '../module/file';
import { connect } from 'react-redux';
import * as env from '../lib/env';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ContentsPageContainer = ({ file: fileIndex, fetchFile }) => {
  const { category, topic, file } = useParams();
  const url = `${env.PATH_POST}/${category}/${topic}/${file}`;
  const [mkd, setMkd] = useState('');
  useEffect(
    () => {
      const f = async () => {
        await fetchFile(url);
        const response = await axios(url + `/${file}.md`);
        setMkd(response.data);
      };
      f();
    },
    [fetchFile, url],
    file,
  );
  return (
    <>
      {!mkd && <div>로딩중...</div>}
      {mkd && <ContentsPage mkd={mkd} fileIndex={fileIndex[url]} />}
    </>
  );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentsPageContainer);
