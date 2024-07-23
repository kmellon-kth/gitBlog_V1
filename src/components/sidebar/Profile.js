import '../../style/componets/SideBar/profile.scss';
import * as env from '../../lib/env';

const Profile = ({ profile }) => {
  const profile_bg_img = `${env.PATH_PORFILE}/${profile.profile_bg_img}`;
  const profile_img = `${env.PATH_PORFILE}/${profile.profile_img}`;
  const name = profile.name;
  const introduce = profile.introduce;
  return (
    <>
      <div className="prfile">
        <img src={profile_bg_img} alt="프로필 배경" />
        <div className="prfile_content">
          <img src={profile_img} alt="프로필 사진" />
          <div className="content">
            <h2>{name}</h2>
            <p>{introduce}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
