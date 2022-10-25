import { LinkCardStyle } from "./LinkCardStyles";

const LinkCard = () => {
  let links = [
    { name: "Twitter Link", link: "www.google.com" },
    { name: "Zuri Team", link: "yahoo.com" },
    // "Zuri Books",
    // "Python Books",
    // "Background Check for Coders",
    // "Design Books",
  ];
  return (
    <>
      {links.map((i) => (
        <a href={i.link}>
          {" "}
          <LinkCardStyle>{i.name}</LinkCardStyle>{" "}
        </a>
      ))}
    </>
  );
  //   <LinkCardStyle>Hello</LinkCardStyle>;
};

export default LinkCard;
