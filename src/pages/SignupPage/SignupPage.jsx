import React, { useState, useRef } from "react";
import "./SignupPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Ref,
} from "semantic-ui-react";

export default function SignUpPage(props) {
  const [invalidForm, setValidForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    password: "",
    passwordConf: "",
    location: "",
  });

  const formRef = useRef();
  const navigate = useNavigate(); // v.6 update, used to programmitically navigate to other routes

  function handleFileInput(e) {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Photos have to be sent over using FormData,
    // they are sent over to the server in multiple requests
    const formData = new FormData();
    formData.append("photo", selectedFile);

    for (let fieldName in state) {
      console.log(fieldName, state[fieldName]);
      // append the rest of the data to the form obejct
      formData.append(fieldName, state[fieldName]);
    }

    try {
      console.log(formData.forEach((item) => console.log(item)));

      // use the userService to make the fetch request
      await userService.signup(formData);

      // Route to wherever you want!
      // after you get a response from the server from
      // the signup request, you need to grab the token from
      // local storage and set the user!
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      console.log(err.message);
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src="https://i.imgur.com/pDgokZG.png" /> Sign Up
          </Header>

          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <select
                className="ui fluid dropdown"
                name="location"
                value={state.location}
                onChange={handleChange}
              >
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <Form.Field>
                <Ref innerRef={formRef}>
                  <Form.Input
                    type="file"
                    name="photo"
                    placeholder="upload image"
                    onChange={handleFileInput}
                  />
                </Ref>
              </Form.Field>
              <Button type="submit" className="btn" disabled={invalidForm}>
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
