import avatar from "../assets/isaac_pic.jpeg";
import image from "../assets/Icon.svg";

// import shareBtn from "../assets/share-06.svg";
import {
  Avatar,
  HiddenSlack,
  NameTitle,
  ProfileSectionStyle,
  //   ShareButton,
} from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <>
      <ProfileSectionStyle>
        <Avatar>
          <img src={image} id="icon" alt="Icon" />
          <img src={avatar} id="profile__img" alt="Profile" />
        </Avatar>
        <NameTitle id="twitter">@isaacolanre</NameTitle>
      </ProfileSectionStyle>
      <HiddenSlack id="slack">@isaacolanre</HiddenSlack>
    </>
  );
};

export default ProfileSection;
