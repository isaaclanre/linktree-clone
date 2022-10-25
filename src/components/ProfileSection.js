import avatar from "../assets/isaac_pic.jpeg";
// import shareBtn from "../assets/share-06.svg";
import {
  Avatar,
  NameTitle,
  ProfileSectionStyle,
  //   ShareButton,
} from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <ProfileSectionStyle>
      <Avatar>
        <img src={avatar} id="mainImg" alt="Logo" />
      </Avatar>
      <NameTitle>Isaac Olanrewaju</NameTitle>
    </ProfileSectionStyle>
  );
};

export default ProfileSection;
