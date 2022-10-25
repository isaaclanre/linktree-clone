import { MainWrapper } from "./AppStyle";
import Footer from "./components/Footer";
import LinkCard from "./components/LinkCard";
import ProfileSection from "./components/ProfileSection";
import SocialSection from "./components/SocialSection";
import shareIcon from "./assets/share-06.svg";
import dotIcon from "./assets/dots-horizontal.svg";
import { ShareButton } from "./components/ProfileSectionStyle";
import { useEffect, useState } from "react";
function App() {
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
            <img src={shareIcon} alt="icon" />
          ) : (
            <img src={dotIcon} alt="icon" />
          )}
        </ShareButton>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
