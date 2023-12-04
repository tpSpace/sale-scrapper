import Structure from '../../components/structure/structure'
import axios from 'axios'
// import './index.css';
import { useState } from 'react';

export default function Register() {
  const [user,setUser] = useState({
    username: "",
    password: "",
});

const handleUsernameChange = (e) => {
  setUser({ ...user, username: e.target.value });
};

// Function to update the password in the user object
const handlePasswordChange = (e) => {
  setUser({ ...user, password: e.target.value });
};
const [retypePassword, setRetypePassword] = useState('');

const onRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
}

const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(user);
    console.log(retypePassword)
    if (user.password == retypePassword) {
      await axios.post("http://api.captechvn.com/signup",user).then((res)=>{
          console.log(res.status )
          if (res.status === 200) {
              // localStorage.setItem("token", res.data.token);
              alert("You register successfully");
              // window.location.href = "/";
          }
      }).catch((err)=>{
          console.error(err)
          alert("Account already exists")
      })
    } else {
      alert("Password and retype password not match");
    }
}

return (
    <div >
        <Structure>
            <div className="login">
                <div className="login-container">
                    <form
                        onSubmit={handleSubmit}
                    >
                        <h1>Register</h1>
                        <br />
                        <input 
                            id='username'
                            type="text" 
                            placeholder="Username" 
                            onChange={(e) => handleUsernameChange(e)}
                            required
                        />
                        <input 
                            id='password'
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => handlePasswordChange(e)}
                            required
                        />
                        <input 
                            id='retypePassword'
                            type="password" 
                            placeholder="Re-type password" 
                            onChange={(e) => onRetypePasswordChange(e)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </Structure>
    </div>
)
}
