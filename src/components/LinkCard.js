import { LinkCardStyle } from "./LinkCardStyles";

const LinkCard = (props) => {
  let links = [
    "Twitter Link",
    "Zuri Team",
    "Zuri Books",
    "Python Books",
    "Background Check for Coders",
    "Design Books",
  ];
  return (
    <>
      {links.map((i) => (
        <LinkCardStyle>{i}</LinkCardStyle>
      ))}
    </>
  );
  //   <LinkCardStyle>Hello</LinkCardStyle>;
};

export default LinkCard;
