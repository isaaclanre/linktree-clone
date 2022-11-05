import {
  Button,
  CheckBox,
  CheckBoxWrapper,
  Email,
  EmailBox,
  EmailInput,
  Header,
  Input,
  Label,
  MessageInput,
  MessageLabel,
  Name,
  Names,
  Paragraph,
  TickBox,
  TickBoxLabel,
} from "./ContactUsStyle";

const ContactUs = () => {
  return (
    <div>
      <Header> Contact Us</Header>
      <Paragraph>
        Hi there, contact me to ask me about anything you have in mind.
      </Paragraph>
      <div>
        <form>
          <Names>
            <Name>
              <Label for="username">First name</Label>

              <Input
                type="text"
                placeholder="Enter your first name"
                id="username"
              />
            </Name>
            <Name>
              <Label for="username">Last name</Label>

              <Input
                type="text"
                placeholder="Enter your last name"
                id="username"
              />
            </Name>
          </Names>

          <EmailBox>
            <Email for="username">Email</Email>

            <EmailInput
              type="text"
              placeholder="yourname@email.com"
              id="username"
            />
          </EmailBox>

          <div>
            <MessageLabel for="username">Message</MessageLabel>

            <MessageInput
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="username"
            />
          </div>

          <CheckBoxWrapper>
            <TickBox type="checkbox" name="cheese" id="cheese"></TickBox>

            <TickBoxLabel for="cheese">
              You agree to providing your data to Isaac who may contact you.
            </TickBoxLabel>
          </CheckBoxWrapper>
          <Button type="button">Send message</Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
