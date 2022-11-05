import { MainWrapper } from "./HomePageStyle";
import LinkCard from "./LinkCard";
import ProfileSection from "./ProfileSection";
import SocialSection from "./SocialSection";
import shareIcon from "../assets/share-06.svg";
import dotIcon from "../assets/dots-horizontal.svg";
import { ShareButton } from "./ProfileSectionStyle";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <MainWrapper>
        <ShareButton>
          {isMobile ? (
            <img src={shareIcon} data-tip="Share Link" alt="icon" />
          ) : (
            <img src={dotIcon} data-tip="Share Link" alt="icon" />
          )}
        </ShareButton>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
        <ReactTooltip />
      </MainWrapper>
    </>
  );
}

export default Home;
