import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css"

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = 2001;
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ firstName, lastName , email, password, role }),   // type match "Content-Type" header     
            });
            if (response.ok) {
                const data = await response.json();
                setfirstName("");
                setlastName("");
                setEmail("");
                setPassword("");
                console.log(data); 
                navigate('/');
            } else {
                console.log("signup error"); throw new Error("signup Error");
            }
        } catch (error) {
            throw new Error("Error. Try again later!");
        }
    };
    return (
        <>
            <div className="center">
                <form onSubmit={handleSubmit} className="signup-form">
                    <h1>ลงทะเบียน</h1>
                    <div className="form-input">
                        <label htmlFor="firstName">ชื่อจริง</label>
                        <input type="text" name="firstName" id="firstName" value={firstName} placeholder="ชื่อจริง" autoComplete="off" onChange={(e) => setfirstName(e.target.value)} required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="lastName">นามสกุล</label>
                        <input type="text" name="lastName" id="lastName" value={lastName} placeholder="นามสกุล" autoComplete="off" onChange={(e) => setlastName(e.target.value)} required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">อีเมล</label>
                        <input type="text" name="email" id="email" value={email} placeholder="youremail@site.com" autoComplete="off" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input type="password" name="password" id="password" value={password} placeholder="รหัสผ่าน" autoComplete="off" onChange={(e) => setPassword(e.target.value)} required /> 
                    </div>
                    <button type="submit">ลงทะเบียน</button>
                </form>
            </div>
        </> 
    );
};

export default Signup;  
