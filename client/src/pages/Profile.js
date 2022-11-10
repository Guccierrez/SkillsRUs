import React from "react";
import {
  Button,
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
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
        placeholder='First name'
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
        placeholder='Last name'
      />
    </Form.Group>
  </Form>
  <Form success>
    <Form.Input label='User description' placeholder='My name is.. and I offer...' />
    <Message
      success
      header='Form Completed'
      content="User Profile updated! Proceed to adding Skills/Services!"
    />
    <Button>Update Profile</Button>
  </Form>

  <Form>
    <Form.Field inline>
      <label>Skill/Service</label>
      <Input placeholder='Skill/Service' />
    </Form.Field>
  </Form>
  <Form>
    <Form.Field>
      <label>Skill/Service Description</label>
      <input />
    </Form.Field>
  </Form>
  <Input labelPosition='right' type='text' placeholder='Amount'>
    <Label basic>$</Label>
    <input />
    <Label>.00</Label>
  </Input>
  <Button inverted color='olive'>
        Add it!
      </Button>
  
    </div>
  );
};

export default Profile;
