import React from 'react'
import {  Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea, } from 'semantic-ui-react'
    

const Profile = () => {
   return(
    <div>
    <h1>Profile</h1>
    <Form>
    <Form.Group widths='equal'>
      <Form.Field
        control={Input}
        label='First name'
        placeholder='First name'
      />
      <Form.Field
        control={Input}
        label='Last name'
        placeholder='Last name'
      />
    
</Form.Group>
<Form.Group inline>
 
 
</Form.Group>
<Form.Field
  control={TextArea}
  label='About'
  placeholder='Tell us more about you...'
/>
<Form.Field
  control={Checkbox}
  label='I agree to the Terms and Conditions'
/>
<Form.Field control={Button}>Submit</Form.Field>
</Form>
</div>
   )
  };
  
  export default Profile;