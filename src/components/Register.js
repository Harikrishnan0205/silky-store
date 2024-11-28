import React, { useState } from "react";
import '../App.css';
import axios from 'axios';
import '../App.scss';


const Register = () => {

    const [entername, onentername] = useState('');
    const [enterpwd, onenterpwd] = useState('');
    const [enteremail, onenteremail] = useState('');
    const [enterphone, onenterphone] = useState('');
    const [enterCountry,onentercountry] = useState('');


    function onenterName(event) {
        onentername(event.target.value);
    }
    function onenterEmail(event) {
        onenteremail(event.target.value)
    }
    function onenterPassword(event) {
     onenterpwd(event.target.value)
    }
    function onenterNumber(event) {
        onenterphone(event.target.value)
    }

    function onenterCountry(event){
        onentercountry(event.target.value)
    }

    const submitdata = () => {
    //    axios.post('http://localhost:5000/api/adduser',{
    //     userName:entername,
    //     phoneNumber:enterphone,
    //     email:enteremail,
    //     password:enterpwd
    //    }).then(responce =>{
    //     console.log(responce.data);
    //    }).catch(error =>{
    //     console.log(error);
    //    })
    alert('you have submit the form');
    }

    return (
        <div className="login-container">
            <div className="form-container">
            
            <div className="formstyle">
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input className='form-control' type='text' id="floating-input" placeholder='username' aria-label='username' value={entername} onChange={onenterName} />
                    <label htmlFor="floating-input" className='form-label'>UserName</label>
                </div>
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input className="form-control" id="floatingemail" placeholder="email" type="email" value={enteremail} onChange={onenterEmail} />
                    <label htmlFor="floatingemail" className="form-label">Email</label>
                </div>
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input id="floatingpassword" className='form-control' type='password' placeholder="password" value={enterpwd} onChange={onenterPassword} />
                    <label htmlFor="floatingpassword" className='form-label'>Password</label>
                </div>
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input id="floatingnumber" className='form-control' type='number' placeholder="phonenumber" value={enterphone} onChange={onenterNumber} />
                    <label htmlFor="floatingnumber" className='form-label'>Phone Number</label>
                </div>
                <div className="form-floating" style={{ width: "18rem", marginBottom: '10px' }}>
                    <input id="floatingnumber" className='form-control' type='text' placeholder="Country" value={enterCountry} onChange={onenterCountry} required/>
                    <label htmlFor="floatingnumber" className='form-label'>Country</label>
                </div>
                <div className="buttonreg" style={{ width: "18rem" }}>
                    <button className="regbtn btn btn-sm p-2  m-2" style={{backgroundColor:'#F47458',color:'white'}} onClick={submitdata}>Sign Up</button>
                </div>
            </div>

            </div>
            <div className="image-container">

            </div>
          
        </div>
    )
}

export default Register;