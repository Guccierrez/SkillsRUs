import React from "react";
import {
  Button,
  Icon,
  Message,
  Label,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
      </Form>
      <Form success>
        <Form.Input
          label="User description"
          placeholder="Brief description of yourself and the service(s) you offer..."
        />

        <Button inverted color='blue' icon >
          
          <Icon name="add circle" />
          Update User
          <Icon name="user" />
        </Button>
      </Form>
      <h1>Skills/Services</h1>
      <Form>
        <Form.Field inline>
          <label>Skill/Service</label>
          <Input placeholder="Skill/Service" />
        </Form.Field>
      </Form>
      <Form>
        <Form.Field>
          <label>Skill/Service Description</label>
          <Input placeholder="Explain in detail what your skill/service is.." />
          
        </Form.Field>
      </Form>
      <Input labelPosition="right" type="text" placeholder="Amount">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>
      <Button inverted color="green" icon>
        <Icon name="dollar"/>
        Add it!
        <Icon name="dollar"/>
      </Button>
    </div>
  );
};

export default Profile;
