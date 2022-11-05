import {
  Button,
  CheckBoxWrapper,
  Email,
  EmailBox,
  EmailInput,
  Header,
  Input,
  Label,
  MainWrapper,
  MessageInput,
  MessageLabel,
  Name,
  Names,
  Paragraph,
  TickBox,
  TickBoxLabel,
  Wrapper2,
  HeaderWrappper,
  FormWrapper,
} from "./ContactUsStyle";
import Footer from "./Footer";
const ContactUs = () => {
  return (
    <>
      <MainWrapper>
        <Wrapper2>
          <HeaderWrappper>
            <Header> Contact Us</Header>
            <Paragraph>
              Hi there, contact me to ask me about anything you have in mind.
            </Paragraph>
          </HeaderWrappper>
          <FormWrapper>
            <Names>
              <Name>
                <Label for="first_name’">First name</Label>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  id="first_name’"
                />
              </Name>
              <Name>
                <Label for="last_name">Last name</Label>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  id="last_name"
                />
              </Name>
            </Names>
            <EmailBox>
              <Email for="email">Email</Email>
              <EmailInput
                type="text"
                placeholder="yourname@email.com"
                id="email"
              />
            </EmailBox>
            <div>
              <MessageLabel for="message">Message</MessageLabel>
              <MessageInput
                type="text"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                id="message"
              />
            </div>
            <CheckBoxWrapper>
              <TickBox type="checkbox" name="cheese" id="cheese"></TickBox>
              <TickBoxLabel for="cheese">
                You agree to providing your data to Isaac who may contact you.
              </TickBoxLabel>
            </CheckBoxWrapper>
            <Button type="submit" id="btn__submit">
              Send message
            </Button>
          </FormWrapper>
        </Wrapper2>
      </MainWrapper>
      <Footer />
    </>
  );
};
export default ContactUs;
