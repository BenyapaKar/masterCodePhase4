import { NavLink, Outlet } from "react-router-dom";
import logo from "./style/logo.png"
const MainLayout = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    
    <div className="container">
      <nav class="container">
        <div class="logo">
        <NavLink to="/"><img className="logo" src={logo} width="200"></img></NavLink>&nbsp;
        </div>
        <div class="links">
        <NavLink to="/post">บทความ</NavLink>&nbsp;
    
        {firstName ? (
          
          <div className="dropdown" >
            <NavLink  to="/userInfo">สวัสดี, {firstName}</NavLink>&nbsp;
          </div>
          ) : (
            <>
              <NavLink to="/login">เข้าสู่ระบบ</NavLink>&nbsp;
              <div class="sign">
                <NavLink to="/signup">ลงทะเบียน</NavLink>&nbsp;
              </div>
            </>
          )}

        </div>
      </nav>
      
      <div className="container">
        <Outlet /> {/* your content will be shown in the Outlet */}
      </div>
    </div>
       
  );
};



export default MainLayout;
