import {NavLink} from "react-router-dom";
import img from "./style/programmer.png";
const Home = () => (
    <>
    <section id="hero1" class="hero1">
    <br></br>
        <div class="heroPic">
          <img className="img" src={img} width="200"></img>
        </div>
        <div class="heroText">
          <h1 class="heroHeading">เพิ่มพูนทักษะโปรแกรมมิ่งของคุณวันนี้</h1>
          <p class="heroDescription">สร้างสรรค์แอปพลิเคชัน และ ผลงานด้านดิจิทัล ด้วยหลักสูตรที่ลงลึกจัดเต็ม ทั้งศาสตร์ และ ศิลป์จากผู้มีประสบการณ์เชี่ยวชาญด้านเทคโนโลยีตัวจริง</p>
          <div class="herobutton">
            <br></br>
          <NavLink to="/post">อ่านบทความล่าสุด!</NavLink>&nbsp;
          </div>
        </div>
        
    </section>
    </>
);
export default Home; 
