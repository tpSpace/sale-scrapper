import Structure from '../../components/structure/structure'
import axios from 'axios'
import './index.css';
import { useState } from 'react';

function Login() {

    const [user,setUser] = useState({
        username: "",
        password: "",
    });

    const onInputChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.post("http://api.captechvn.com/login",user).then((res)=>{
            console.log(res )
            
            if (res.status === 200) {
                console.log(e);
                localStorage.setItem("token", res.data.token);
                alert("You login successfully");
                // window.location.href = "/";
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    return (
        <div >
            <Structure>
                <div className="login">
                    <div className="login-container">
                        <form
                            onSubmit={handleSubmit}
                        >
                            <h1>Login</h1>
                            <br />
                            <input 
                                type="text" 
                                placeholder="Username" 
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e) => onInputChange(e)}
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

export default Login