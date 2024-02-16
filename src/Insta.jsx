import './Insta.css';
import{useState} from 'react';

function Insta(){
  const [login, setlogin]=useState(true)

  const loginSwitch = () => {
    setlogin(!login)
  }
    return(
        <>
          <div id="container">
           <div id='user'>
           <img className="img1" src="https://th.bing.com/th?id=OIP.gl5Ne0D6qPnFHaDHPWJU2AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="insta-logo" />
          <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id=""/>
          <input hidden={login} type="text" name="" placeholder='Full Name'/>
          <input type='email' name="" id="" placeholder='phone number, username, or email'/>
          <input type='text' name="" id="" placeholder='Password'/>
          <button>{login?"Sign in":"Sign up"}</button>
          <div id="footer">
            {login?"Don't have account?":"have an account"}<span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>


          </div>
        </div>
        </>
    )
}

export default Insta;