import React, { useState } from "react";
import '../App.css';
import axios from 'axios';
import '../App.scss';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const [enterpwd, onenterpwd] = useState('');
    const [enteremail, onenteremail] = useState('');
    
    function onenterEmail(event) {
        onenteremail(event.target.value)
    }
    function onenterPassword(event) {
     onenterpwd(event.target.value)
    }
   

    const submitdata = () => {
       axios.post('http://localhost:5000/api/login',{
        email:enteremail,
        password:enterpwd
       }).then(responce =>{
        console.log(responce.data);
        navigate('/home');
       }).catch(error =>{
        console.log(error);
       })
    
    }

    return (
        <div className="login-container">
            <div className="form-container">
            
            <div className="formstyle">
                
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input className="form-control" id="floatingemail" placeholder="email" type="email" value={enteremail} onChange={onenterEmail} />
                    <label htmlFor="floatingemail" className="form-label">Email</label>
                </div>
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input id="floatingpassword" className='form-control' type='password' placeholder="password" value={enterpwd} onChange={onenterPassword} />
                    <label htmlFor="floatingpassword" className='form-label'>Password</label>
                </div>
               
               
                <div className="buttonreg" style={{ width: "18rem" }}>
                    <button className="regbtn btn btn-sm p-2  m-2" style={{backgroundColor:'#F47458',color:'white'}} onClick={submitdata}>Sign In</button>
                </div>
            </div>

            </div>
            <div className="image-container">
            
            </div>
          
        </div>
    )
}

export default Login;