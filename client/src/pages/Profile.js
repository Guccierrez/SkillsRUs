import { React, useState } from "react";
import { useMutation } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_SKILLS } from '../utils/actions';

import SkillList from "../components/SkillList";
import { ADD_SKILL } from "../utils/mutations";




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
   
  })

  const [serviceInfo, setServiceInfo] = useState({
    name: "",
    price: parseInt(0),
    description: "",
 
  })
  const [addSkill, { error }] = useMutation(ADD_SKILL);
  
  const currentUser = JSON.parse(localStorage.getItem("userInfo"))



  const handleInputChange = (e) => {
    const { name, value } = e.target
    setuserInfo({ ...userInfo, [name]: value })
    setServiceInfo({ ...serviceInfo, [name]: value })
  }

  const updateUserButton = async () => {
    setProfile({ ...profile, ...userInfo })
    const { name, price, serviceDescription } = userInfo
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  }




  const addSkillButton = async (e) => {
    //fire off mutation hook here
    try {
      serviceInfo.price = parseInt(serviceInfo.price)
      const { data } = await addSkill({
        variables: { ...serviceInfo },
      });
    } catch (err) {
      console.error(err);
    }


  }

  

  return (
<div>
   <div style={{ display: 'flex',justifyContent: "center"}}>
   <div style={{width:"500px"}}>

      <h1>Profile</h1>
      <Form>
        <Form.Group widths="equal" style={{width:"350px"}}>
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
          name='userDescription'
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
          style={{width:"335px"}}
            fluid
            name='name'
            value={serviceInfo.name}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="Skill/Service Name"
            placeholder="Skill/Service Name"
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
          style={{width:"335px"}}
            fluid
            name='description'
            value={serviceInfo.description}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="Skill/Service Description"
            placeholder="Explain in detail what your skill/service is.."
          />
        </Form.Group>
      </Form>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
          style={{width:"335px"}}
            fluid
            name='price'
            value={serviceInfo.price}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="Service Cost"
            type = "number"
            placeholder="how much willl your service cost"
          />
        </Form.Group>
      </Form>

      <Form>
        <Form.Group widths="equal">
          <Form.Input
          style={{width:"335px"}}
            fluid
            name='image'
            value={serviceInfo.image}
            onChange={handleInputChange}
            id="form-subcomponent-shorthand-input-first-name"
            label="Image of your Skill/Service"
            placeholder="Add image"
          />
        </Form.Group>
      </Form>
      

      <Button inverted color="green" icon onClick={() => {
        addSkillButton()
      }}>
        <Icon name="dollar" />
        Add it!
        <Icon name="dollar" />

      </Button>
      


</div>

      {currentUser ? (


        <div>
          <h2>{currentUser.firstName} {currentUser.lastName} </h2>
          <h2>{currentUser.userDescription} </h2>
          <h2>{currentUser.service} {currentUser.serviceDescription}</h2>
          <h2>{currentUser.servicePrice}</h2>


        </div>
      ) : (

        <div>

          <h1> no user info</h1>
        </div>
      )}
  
    </div>
    
    <SkillList />
    
</div>




  );
};

export default Profile;


