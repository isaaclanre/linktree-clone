import { MainWrapper } from "./AppStyle";
import Footer from "./components/Footer";
import LinkCard from "./components/LinkCard";
import ProfileSection from "./components/ProfileSection";
import SocialSection from "./components/SocialSection";

function App() {
  return (
    <>
      <MainWrapper>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
