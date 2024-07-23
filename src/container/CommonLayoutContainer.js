import { connect } from 'react-redux';
import CommonLayout from '../Layouts/CommonLayout';
import { fetchTopic, fetchCategory, fetchList } from '../module/folder';
import { useEffect } from 'react';
import { fetchProfile } from '../module/profile';

const CommonLayoutContainer = ({
  folder,
  loading,
  profile,
  fetchTopic,
  fetchCategory,
  fetchList,
  fetchProfile,
}) => {
  useEffect(() => {
    const f = async () => {
      try {
        await fetchProfile();
        await fetchCategory();
        await fetchTopic();
        await fetchList();
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [fetchProfile, fetchTopic]);

  if (loading.profile || loading.categoty || loading.topic || loading.list)
    return <>로딩중...</>;

  return (
    <>
      {!loading.profile &&
        !loading.categoty &&
        !loading.topic &&
        !loading.list && (
          <CommonLayout folder={folder} loading={loading} profile={profile} />
        )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { profile, folder, loading } = state;
  return {
    profile,
    folder,
    loading,
    state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopic: () => dispatch(fetchTopic()),
  fetchCategory: () => dispatch(fetchCategory()),
  fetchList: () => dispatch(fetchList()),
  fetchProfile: () => dispatch(fetchProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonLayoutContainer);
