import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css"

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // // can use formData also    
        // const formData = e.formData();    
        // let loginData = Object.fromEntries(formData);

        try {
            const response = await fetch("/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ email, password }),   // type match "Content-Type" header     
            });
            if (response.ok) {
                const data = await response.json();
                setEmail("");
                setPassword("");
                console.log(data); 
                localStorage.setItem("firstName", data.firstName);
                localStorage.setItem("lastName", data.lastName);
                console.log("name",data.firstName); 
                navigate('/');
                window.location.reload();
                
            } else {
                console.log("login error"); throw new Error("Login Error");
            }
        } catch (error) {
            throw new Error("Error. Try again later!");
        }
    };
    return (
        <>
            <div className="center">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>เข้าสู่ระบบ</h1>
                    <div className="form-input">
                        <label htmlFor="email">อีเมล</label>
                        <input type="text" name="email" id="email" value={email} placeholder="youremail@site.com" autoComplete="off" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input type="password" name="password" id="password" value={password} placeholder="รหัสผ่าน" autoComplete="off" onChange={(e) => setPassword(e.target.value)} required /> 
                    </div>
                    <button type="submit">เข้าสู่ระบบ</button>
                </form>
            </div>
        </> 
    );
};
export default LoginPage;