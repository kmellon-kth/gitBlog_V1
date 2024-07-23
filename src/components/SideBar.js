import '../style/componets/sideBar.scss';
import Profile from './sidebar/Profile';
import SideBarMenu from './sidebar/SideBarMenu';

const SideBar = ({ profile, folder }) => {
  return (
    <>
      <div className="sideBar_container">
        <div className="profile_container">
          <Profile profile={profile} />
        </div>
        <nav className="menu_container">
          <SideBarMenu folder={folder} />
        </nav>
      </div>
    </>
  );
};

export default SideBar;
