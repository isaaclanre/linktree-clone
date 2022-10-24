import slack from "../assets/slack.svg";
import gitbub from "../assets/github.svg";
import { SocialSectionStyle, SocialSectionWrapper } from "./SocialSectionStyle";

const SocialSection = () => {
  return (
    //<SocialSectionWrapper>
    <SocialSectionStyle>
      <img src={slack} id="slack" alt="slack" />
      <img src={gitbub} id="github" alt="github" />
    </SocialSectionStyle>
    // </SocialSectionWrapper>
  );
};

export default SocialSection;
