import styled from "styled-components";

export const FooterStyle = styled.div`
  box-sizing: border-box;

  /* Auto layout */
  border: 2px solid red;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 8%;
  gap: 32px;

  width: 100%;
  height: 64px;

  /* Gray/200 */

  border-top: 1px solid #eaecf0;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
