import { useNavigate,Link } from 'react-router-dom';

const UserInfo = () => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/auth", {
                method: "GET",
                headers: { "Content-Type": "application/json", },
            });
            if (response.ok) {
                console.log("log out"); 
                localStorage.setItem("firstName", "");
                navigate('/');
                window.location.reload();
                
            } else {
                console.log("logout error"); throw new Error("Logout Error");
            }
        } catch (error) {
            throw new Error("Error. Try again later!");
        }
    };


    return (
        <div class="Info1">
        <div class="InfoText">
          <h1 class="InfoHeading">สวัสดี, {firstName}  {lastName}</h1>
          <div class="managebutton">
          <Link to="/managePost">
            <button>จัดการบทความ</button>
          </Link>
          </div>
          <div class="Infobutton">
            <button type="submit" onClick={handleSubmit}>ออกจากระบบ</button>&nbsp;
          </div>
        </div>
        </div>
        
    )
};
export default UserInfo; 
