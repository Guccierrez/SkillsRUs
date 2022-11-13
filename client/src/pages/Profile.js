import { React, useState } from "react";

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
  // saving skills and services
  const [serviceInfo, setServiceInfo] = useState({
    service: "",
    serviceDescription: "",
    amount: ""
  })
  const currentService = JSON.parse(localStorage.getItem("serviceInfo"))
  const handleServiceChange = (e) => {
    const { serviceName, value } = e.target
    setServiceInfo({ ...serviceInfo, [serviceName]: value })
  }
  const updateServiceButton = async () => {
    console.log(serviceInfo.service)
    console.log(serviceInfo.serviceDescription)
    console.log(serviceInfo.amount)
    localStorage.setItem("serviceInfo", JSON.stringify(serviceInfo))
    console.log("hello")
  }


  
  // saving user profile information to local storage
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    description: ""
  })
  const currentUser = JSON.parse(localStorage.getItem("userInfo"))
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setuserInfo({ ...userInfo, [name]: value })
  }
  const updateUserButton = async () => {
    console.log(userInfo.firstName)
    console.log(userInfo.lastName)
    console.log(userInfo.description)
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  }

  return (
    <div>
      <h1>Profile</h1>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name='firstName'
            value={userInfo.firstName}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
          />
          <Form.Input
            fluid
            name='lastName'
            value={userInfo.lastName}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
          />
        </Form.Group>
      </Form>
      <Form success>
        <Form.Input
          name='description'
          value={userInfo.description}
          onChange={handleInputChange}
          label="User description"
          placeholder="Brief description of yourself and the service(s) you offer..."
        />

        <Button inverted color='blue' icon onClick={() => {
          updateUserButton()
        }}>

          <Icon name="add circle" />
          Update User
          <Icon name="user" />
        </Button>

        {currentUser ? (
          <div>

            <p>{currentUser.firstName} {currentUser.lastName} </p>
            <p>{currentUser.description}</p>

          </div>
        ) : (

          <div>

            <h1> no user info</h1>
          </div>
        )}





      </Form>
      <h1>Skills/Services</h1>
      <Form>
        <Form.Field inline placeholder="Skill/Service"  
            >
          <label>Skill/Service</label>
          <Input name='service'
            value={serviceInfo.service}
            onChange={handleServiceChange}/>
        </Form.Field>
      </Form>
      <Form>
        <Form.Field>
          <label>Skill/Service Description</label>
          <Input placeholder="Explain in detail what your skill/service is.." 
           name='serviceDescription'
           value={serviceInfo.serviceDescription}
           onChange={handleServiceChange}/>

        </Form.Field>
      </Form>
      <Input labelPosition="right" type="text" 
       name='amount'
       value={serviceInfo.amount}
       onChange={handleServiceChange}>
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>
      <Button inverted color="green" icon onClick={() => {
          updateServiceButton()
        }}>
        <Icon name="dollar" />
        Add it!
        <Icon name="dollar" />
      </Button>
      {currentService ? (
        <div>
      
          <p>{currentService.service} {currentService.serviceDescription} </p>
          <p>{currentService.amount}</p>
      
        </div>
      ) : (
      
        <div>
      
          <h1> no service info</h1>
        </div>
      )}
    </div>


  );
};

export default Profile;
