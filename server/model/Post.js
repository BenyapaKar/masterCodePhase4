let data = [
    {content:'โดยแชตบอตดังกล่าวจะสามารถหาคำตอบให้กับเราได้ทุกเรื่อง ไม่ว่าจะมีข้อสงสัยเรื่องอะไร มันจะใช้ระบบ ‘AI’ ไปรวบรวมข้อมูลจากทุกที่ในโลกมาประมวลผลเป็นคำตอบให้กับเรา หรือแม้กระทั่งการเขียนสคริปต์การเรียนการสอน ที่อาจใช้เวลาเตรียมข้อมูลเป็นชั่วโมง แต่ ‘ChatGPT’ ก็จะไปรวบรวมข้อมูลมาเป็นคำอธิบายแสนง่ายให้คุณได้ภายในเวลาเพียงไม่นาน ‘ChatGPT’ เป็นรูปแบบหนึ่งของ GPT-3.5 Language Generation Software'
    ,author: 'เบญญาภา', date: '3/04/2023', title: 'CHATGPT คืออะไร', id:'1234', imageUrl:'https://images.unsplash.com/photo-1677696795873-ca21e7d76a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'},
    {content:'JSON เป็นข้อมูลรูปแบบ text ที่มีรูปแบบที่จะเก็บข้อมูลแบบ key, value โดยการเขียนข้อมูลชนิด JSON มีรูปแบบคือ ชื่อฟิลด์ครอบด้วยเครื่องหมาย “ (double quote), เครื่องหมาย : (colon), value แล้วครอบทั้งหมดด้วยเครื่องหมายปีกกา ตัวอย่างที่มีข้อมูล 1 อย่าง'
    ,author: 'เบญญาภา', date: '3/04/2023', title: 'JSON คืออะไร', id:'3444' , imageUrl:'https://images.unsplash.com/photo-1610986602538-431d65df4385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=907&q=80'},
    {content:'HTML ย่อมาจาก Hyper Text Markup Language คือภาษาคอมพิวเตอร์ที่ใช้ในการแสดงผลของเอกสารบน website หรือที่เราเรียกกันว่าเว็บเพจ ถูกพัฒนาและกำหนดมาตรฐานโดยองค์กร World Wide Web Consortium (W3C) และจากการพัฒนาทางด้าน Software ของ Microsoft ทำให้ภาษา HTML เป็นอีกภาษาหนึ่งที่ใช้เขียนโปรแกรมได้ หรือที่เรียกว่า HTML Application  HTML เป็นภาษาประเภท Markup   สำหรับการการสร้างเว็บเพจ โดยใช้ภาษา HTML สามารถทำโดยใช้โปรแกรม Text Editor ต่างๆ เช่น Notepad, Editplus หรือจะอาศัยโปรแกรมที่เป็นเครื่องมือช่วยสร้างเว็บเพจ เช่น Microsoft FrontPage, Dream Weaver ซึ่งอํานวยความสะดวกในการสร้างหน้า HTML ส่วนการเรียกใช้งานหรือทดสอบการทำงานของเอกสาร HTML จะใช้โปรแกรม browser'
    ,author: 'เบญญาภา', date: '3/04/2023', title: 'HTML คืออะไร', id:'1344' , imageUrl:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {content:' CSS คือ ภาษาที่ใช้สำหรับตกแต่งเอกสาร HTML/XHTML ให้มีหน้าตา สีสัน ระยะห่าง พื้นหลัง เส้นขอบและอื่นๆ ตามที่ต้องการ CSS ย่อมาจาก Cascading Style Sheets มีลักษณะเป็นภาษาที่มีรูปแบบในการเขียน Syntax แบบเฉพาะและได้ถูกกำหนดมาตรฐานโดย W3C เป็นภาษาหนึ่งในการตกแต่งเว็บไซต์ ได้รับความนิยมอย่างแพร่หลาย'
    ,author: 'เบญญาภา', date: '3/04/2023', title: 'CSS คืออะไร', id:'3422' , imageUrl:'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'},
    {content:'Node.js Dependency ก็คือ Module หรือ Library ที่เราใช้ในโปรเจกต์ โดยเป็นสิ่งที่มีนักพัฒนาคนอื่น ๆ เขียนเอาไว้แล้วเราก็ไปดาวน์โหลดมาติดตั้งนั่นเองการอัปเดต Dependency เป็นเรื่องสำคัญ เพราะจะช่วยให้โปรเจกต์ของเรามีความปลอดภัย แก้ไข Bug ไปจนถึงเพิ่มฟีเจอร์ใหม่ ๆ เข้ามา ข้อดีเยอะขนาดนี้แต่หลาย ๆ คนก็ไม่ได้ให้ความสำคัญ เพราะว่าถึงไม่อัปเดต โค้ดก็ยังทำงานได้เหมือนเดิมหรืออาจจะแค่ขี้เกียจเพราะมันยุ่งยากเสียเวลาถ้าคุณได้เข้ามาอ่านบทความนี้ก็ขอบอกว่ามันอัปเดตได้ง่ายมาก ๆ'
    ,author: 'ณัทธร', date: '3/04/2023', title: 'Update Node.Js Dependency ให้ทันสมัย', id:'2567' , imageUrl:'https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {content:'งานที่กองเต็มไปหมด จนไม่รู้ว่าจะแก้ไขอย่างไรดี ? หรือ บางทีงานอาจจะเยอะไป ? ถ้าสงสัยแบบนี้ให้เรามองรอบ ๆ ดูว่างานคนอื่นใกล้ ๆ ตัวมีใครได้รับงานขนาดพอ ๆ กับเราไหม ถ้ามีแล้วเขาทำมันได้จนเป็นเรื่องปกติ นั่นอาจเป็นเพราะว่าเรายัง “จัดการงาน” ที่เข้ามาได้ไม่ดีพอก็เป็นได้'
    ,author: 'ณัทธร', date: '3/04/2023', title: '7 เทคนิคจัดลำดับความสำคัญของงานสำหรับคนสายไอที', id:'3214' , imageUrl:'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
    {content:'CV หรือ Curriculum Vitae มีรากศัพท์มาจากภาษาลาตินที่แปลประมาณว่า “ประวัติชีวิต” นิยมเขียนเพื่อบอกเล่าประวัติของเราในการใช้สมัครงาน โดยเราจะเขียนแบบ “ละเอียด” มาก ๆ เพราะว่าตัว CV สามารถยาวได้มากกว่า 1 หน้า (จะยาวเป็น 10 หน้าก็ไม่มีใครว่า!!)ซึ่งสาเหตุที่มันยาวเพราะเราจะต้องเขียนไล่ตามไทม์ไลน์การเรียน การทำงาน การรับรางวัล การสอบเพื่อรับใบ Certificate ต่าง ๆ ตั้งแต่เริ่มต้นจนถึงปัจจุบัน อัปเดตข้อมูลให้เป็นปัจจุบันมากที่สุด และที่สำคัญ ! อย่าลืมว่าต้องลงรายละเอียดให้ครบถ้วนมากที่สุด'
    ,author: 'ณัทธร', date: '3/04/2023', title: 'CV Vs Resume ต่างกันยังไง ? แล้ว Dev อย่างเราควรเขียนแบบไหนดี', id:'1414' , imageUrl:'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
];
    
let Products = {
    find: () => new Promise((resolve, reject) => resolve(data) )
    ,
    findOne: (id) => {
        return new Promise((resolve, reject) => {
            let index = data.findIndex(e => e.id === id)
            if (index <0) reject("Not found" +id);            
            resolve(data[index])
        }
    )},
    findAndUpdate: (id, product, newItem=true) => {
        return new Promise((resolve, reject) => {
            let index = data.findIndex(e=> e.id === id);
            if (index < 0)
                if (!newItem) reject("Not found" +id);
                else {
                    data.push(product)
                    resolve(data[data.length-1]);
                }
            else data.splice(index, 1, product)
            resolve(data[index])
        }
    )},
    insert: (product) => {
        return new Promise((resolve, reject) => {
            data.push(product);
            resolve(data[data.length-1]);
        }
    )},
    delete: (id) => {
        return new Promise((resolve, reject) => {
            let index = data.findIndex(e => e.id === id)
            if (index <0) return reject("Not found" + id);
            data.splice(index, 1)
            resolve(1)         
        }
    )}
}
export default Products;
