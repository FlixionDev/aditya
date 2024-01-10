import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [state, setState] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const nav=useNavigate();
    const handleSubmit = () => {
        if(state.length==10){
            setFlag(true)
        }else{
            alert(`Mobile number should be 10 digit`)
        }
    }
     const handleOtp=()=>{
        if(otp=="123456"){
            alert(`Login successfull`);
            nav("/home")
        }else{
            alert(`Wrong OTP`)
        }
     }
    return (
        <div>
            {
                flag ?
                    <>
                        <h2>OTP VERIFICATION</h2>
                        <p>Enter verification code we just send you on your Mobile Number</p>
                        <input placeholder='Enter OTP' value={otp} type='number' onChange={(e) => { setOtp(e.target.value) }} />
                        <button onClick={handleOtp}>Send Code</button></>
                    :
                    <><h2>Enter Your Mobile Number</h2>
                        <p>We will send you 6 digit verification code</p>
                        <input placeholder='Enter your mobile number' value={state} type='number' onChange={(e) => { setState(e.target.value) }} />
                        <button onClick={handleSubmit}>Send Code</button></>
            }
        </div>
    )
}
