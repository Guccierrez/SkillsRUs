import React from "react";
import {
  Button,
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
  <Button inverted color='olive'>
        Add it!
      </Button>
  
    </div>
  );
};

export default Profile;
