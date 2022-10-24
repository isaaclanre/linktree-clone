import { FooterStyle } from "./FooterStyle";
import I4G from "../assets/I4G.svg";
import zuri from "../assets/zuri.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <img src={zuri} id="zuri" alt="zuri" />
      HNG Internship 9 Frontend Task
      <img src={I4G} id="I4G" alt="I4G" />
    </FooterStyle>
  );
};

export default Footer;
