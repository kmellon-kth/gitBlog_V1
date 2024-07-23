import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import styled from 'styled-components';
import TopicPage from '../pages/TopicPage';
import ContentsPageContainer from '../container/ContentsPageContainer';

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  main {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;

    header {
      /* 탑바*/
      position: absolute;
      top: 1%;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 40px;
      width: 80%;
      z-index: 100;
      border-radius: 20px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    section {
      /* 컨텐츠*/
    }
  }

  aside {
    /* 사이드바*/
    width: 250px;
    position: sticky;
    top: 0px;
  }
`;

const CommonLayout = ({ folder, profile, loading }) => {
  return (
    <>
      <Layout>
        <aside>
          <SideBar profile={profile} folder={folder} loading={loading} />
        </aside>
        <main>
          <header>
            <TopBar folder={folder} loading={loading} />
          </header>
          <section>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    profile={profile}
                    folder={folder}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/post/:category/:topic"
                element={
                  <TopicPage
                    profile={profile}
                    folder={folder}
                    loading={loading}
                  />
                }
              />
              <Route
                path="/post/:category/:topic/:file"
                element={<ContentsPageContainer />}
              />
            </Routes>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CommonLayout;
