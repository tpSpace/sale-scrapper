import Structure from '../../components/structure/structure'
import axios from 'axios'
import './index.css';
import { useState } from 'react';

function Login() {

    const [user,setUser] = useState({
        email: "",
        password: "",
    });

    const onInputChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://api.captechvn.com/login").then((res)=>{
            console.log(res.data)
            if (res.data.status === "success") {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                window.location.href = "/";
                window.location.reload();
            }
        }).catch((err)=>{
            console.log(err)
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
                                type="email" 
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