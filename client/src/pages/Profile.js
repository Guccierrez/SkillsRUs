import { React, useState } from "react";
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_SKILLS } from '../utils/actions';



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



const Profile = ({ profile, setProfile }) => {
  const [state, dispatch] = useStoreContext();
console.log(state.skills)

  // saving user profile information to local storage
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    description: "",
    name:"",
    serviceDescription:"",
    price:""

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
    setProfile({...profile,...userInfo})
    const {name, price, serviceDescription} = userInfo
    dispatch({
      type: UPDATE_SKILLS,
      skills: [...state.skills, {name, serviceDescription, price}]
    });
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

      </Form>

      <h1>Skills/Services</h1>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name='name'
            value={userInfo.name}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="Service"
            placeholder="Service"
          />
</Form.Group>
</Form>
<Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          name='serviceDescription'
          value={userInfo.serviceDescription}
          onChange={handleInputChange}
          id="form-subcomponent-shorthand-input-first-name"
          label="Service"
          placeholder="Explain in detail what your skill/service is.."
        />
</Form.Group>
</Form>
<Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          name='price'
          value={userInfo.price}
          onChange={handleInputChange}
          id="form-subcomponent-shorthand-input-first-name"
          label="ServiceCost"
          placeholder="how much willl your service cost"
        />
</Form.Group>
</Form>





      {/* <Input labelPosition="right" type="text" 
       name='amount'
       value={serviceInfo.amount}
       onChange={handleServiceChange}>
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input> */}
      <Button inverted color="green" icon onClick={() => {
      
        }}>
        <Icon name="dollar" />
        Add it!
        <Icon name="dollar" />
      </Button>

      {currentUser ? (
          <div>

            <h2>{currentUser.firstName} {currentUser.lastName} </h2>
            <h2>{currentUser.description} </h2>
            <h2>{currentUser.service} {currentUser.serviceDescription}</h2>
            <h2>{currentUser.serviceCost}</h2>

          </div>
        ) : (

          <div>

            <h1> no user info</h1>
          </div>
        )}
    </div>


  );
};

export default Profile;
