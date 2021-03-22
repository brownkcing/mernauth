import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../services/auth.service';
import  { isEmail } from 'validator';

const Signup = styled.div`
    transition: all 0.3s linear;
    display:block;
`;

const SignupForm = styled(Form)`
    height: 100%;
    width: 75%;
    padding: 1em 3.3em;
`;

const InputReg = styled.div`
    padding-bottom: 2em;
`;

const SignUpTitle = styled.h1`
    align-self:center;
`;

const Button = styled(CheckButton)`
    ${Mixins.button};
`;

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };  

const SignUp = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
    
      const handleRegister = (e) => {
        e.preventDefault();
    
        setMessage("");
        setSuccessful(false);
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          AuthService.register(username, email, password).then(
            (response) => {
              setMessage(response.data.message);
              setSuccessful(true);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setMessage(resMessage);
              setSuccessful(false);
            }
          );
        }
      };
    
    return (
        <Signup>
            <SignUpTitle>Sign-Up</SignUpTitle>
            <SignupForm onSubmit={handleRegister} ref={form}>
                <InputReg>
                    <label>Username</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, vusername]}
                    />
                </InputReg>
                <InputReg>
                    <label>Email Address</label>
                    <Input 
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                    />
                </InputReg>
                <InputReg>
                    <label>Password</label>
                    <Input 
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, vpassword]}
                    />
                </InputReg>
                <Button ref={checkBtn} style={{color:'black'}}>Submit</Button>
                {message && (
            <div className="form-group">
              <div
                style={{
                  color: successful ? "#5cb85c" : "#d9534f"
                }}
                role="alert"
              >
                {message}
              </div>
            </div>
          )}   
            </SignupForm>
        </Signup>
    )
}
export default SignUp;