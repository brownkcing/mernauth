import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import * as Mixins from '../styles/Mixins';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import AuthService from '../services/auth.service';

const LoginWrap = styled.div`
    display:block;
`;

const LoginForm = styled(Form)`
    height: 100%;
    width: 75%;
    padding: 1em 3.3em;
`;

const LoginInput = styled.div`
    padding-bottom: 2em;
`;


const LoginTitle = styled.h1`
    align-self:center;
`;


const Forgot = styled.div`
    margin-bottom: 0.5em;
    a {
        text-decoration: none;
        color: #3F98FF;
        :hover {
            color: #90C4FF;
        };
    };
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

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };

      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

      const handleLogin = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          AuthService.login(username, password).then(
            () => {
              props.history.push("/profile");
              window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        } else {
          setLoading(false);
        }
      };
     


    return (
        <LoginWrap>
            <LoginTitle>Login</LoginTitle>
            <LoginForm onSubmit={handleLogin} ref={form}>
                <LoginInput>
                    <label>Username</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]} 
                    />
                </LoginInput>
                <LoginInput>
                    <label>Password</label>
                    <Input 
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                    />
                </LoginInput>       
                <Button ref={checkBtn} disabled={loading} style={{color:'black'}}>{loading}Submit</Button>
                <div style={{color:'red'}}>{message}</div>
                <Forgot>Forgot <a>Password?</a></Forgot>
            </LoginForm>
        </LoginWrap>
    );
};

export default Login;