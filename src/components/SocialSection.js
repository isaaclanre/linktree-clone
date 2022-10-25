import slack from "../assets/slack.svg";
import gitbub from "../assets/github.svg";
import { SocialSectionStyle } from "./SocialSectionStyle";

const SocialSection = () => {
  return (
    <SocialSectionStyle>
      <img src={slack} id="slack" alt="slack" />
      <img src={gitbub} id="github" alt="github" />
    </SocialSectionStyle>
  );
};

export default SocialSection;
