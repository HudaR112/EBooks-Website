import React,{useState} from "react";
import {useHistory} from "react-router-dom";

import '../Styles/login.css';

const Login = () => {

  const [email,setEmail]=useState("");
  const [emailError,setEmailError]=useState("");

  const [password,setPassword]=useState("");
  const [passwordError,setPasswordError]=useState("");

  const [successMsg,setsuccessMsg] = useState("");
  const history = useHistory();

  const handleEmailChange=(e)=>{
    setsuccessMsg('');
    setEmailError('');
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    setsuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    if(email !== '')
    {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(emailRegex.test(email))   
      {
        setEmailError('');
        if(email==='admin@demo.com')
        {
          setEmailError('');
          if(password ==='demo')
          {
            setsuccessMsg('Successfully logged in');
            history.push("/Home");
          }
          else{
            setPasswordError('Password doesnot match with the email');
          }
        }
        else{
          setEmailError('email doesnot match with our database');
        }
      }
      else{
        setEmailError('Invalid Email');
      }
   }
    else{
      setEmailError('Email Required');
    }
    if(password !== '')
    {

    }
    else{
      setPasswordError( 'Password Required');
    }
    }

  return(
    <div className='container'>
        <h3>Admin Login</h3><br></br>

        <form className='form-group form' autoComplete="off" onSubmit={handleFormSubmit}>
          
          {successMsg&&<><div className='success-msg'>{successMsg} </div>
          <br></br>
          </>}

            <label>Email</label>
            <input type="text" className='form-control' placeholder='Enter your email' onChange={handleEmailChange} value={email} /><br></br>
            {emailError&&<div className='error-msg'>{emailError}</div>}
            <label>Password</label>
            <input type="password" className='form-control custom-Input' placeholder='Enter your password' onChange={handlePasswordChange} value={password} /><br></br>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}<br></br>
            <button type="submit" className='btn btn-success btn-lg' style={{width: 100 +'%'}}>LOGIN</button>
            </form>
    </div>
  );
};
export default Login;