import Product1 from './CourseDB.js'
import mongooseDbConnect from '../config/dbConnect.js'

mongooseDbConnect()

var courses = [
	{
		content: {
			title1: 'พื้นฐานที่ควรรู้ก่อนสร้างเว็บ',
			title2: 'มาสร้างเว็บไซต์แรกของเรากันเลย',
			title3: 'มาเล่นกับสารพัด Tag',
			title4: 'ทำให้เว็บออนไลน์',
			title5: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		authorRef: '3',
		date: '12/05/2023',
		title: 'Introduction to HTML',
		id: '01',
		imageUrl: 'https://www.mindphp.com/forums/download/file.php?id=93495',
		fullImg: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
	},
	{
		content: {
			title1: 'แต่งเว็บไซต์ให้เก๋ขึ้น แค่รู้จัก CSS',
			title2: 'ทำให้เว็บหลุดกรอบด้วย CSS3',
			title3: 'ทำเว็บให้สวยขึ้นเป็นพันเท่าด้วย Bootstrap',
			title4: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to CSS',
		id: '02',
		imageUrl: 'https://play-lh.googleusercontent.com/ajbmMCoaThQcD4_z-1-6H79M0ItJ1Vz2jW_5yRB_eb1d_Fdzmdci0SPHFfujQj23n-Q',
		fullImg: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		content: {
			title1: 'สิ่งที่ควรรู้ก่อนเริ่มต้นกับ JavaScript',
			title2: 'พื้นฐานการใช้งาน JavaScript เบื้องต้น',
			title3: 'พื้นฐานการตัดสินใจของโปรแกรม',
			title4: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to JavaScript',
		id: '03',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
		fullImg: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		content: {
			title1: 'เตรียมใช้งาน React',
			title2: 'React JSX',
			title3: 'React Components',
			title4: 'React Props',
			title5: 'React State',
			title6: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to React',
		id: '04',
		imageUrl: 'https://iamnet.me/wp-content/uploads/2016/12/addthis-react-flux-javascript-scaling.png',
		fullImg: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		content: {
			title1: 'JSON ประกอบด้วยอะไรบ้าง',
			title2: 'JSON แตกต่างจาก XML อย่างไร',
			title3: 'โค้ดตัวอย่างการใช้งาน',
			title4: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to JSON',
		id: '05',
		imageUrl: 'https://img.freepik.com/premium-vector/modern-flat-design-json-file-icon-web-simple-style_599062-468.jpg?w=2000',
		fullImg: 'https://images.unsplash.com/photo-1516637090014-cb1ab78511f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
	},
	{
		content: {
			title1: 'Docker มันทำงานยังไง',
			title2: 'Docker มันคืออะไร',
			title3: 'ตัวอย่างการใช้งาน',
			title4: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to Docker',
		id: '06',
		imageUrl: 'https://www.zadara.com/wp-content/uploads/docker.png',
		fullImg: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
	},
	{
		content: {
			title1: 'แนะนำการเริ่มต้นกับ Python 3',
			title2: 'ทำความรู้จักกับข้อมูล และ การแสดงผลข้อมูล',
			title3: 'รู้จักกับตัวแปร และ ตัวดำเนินการ',
			title4: 'รู้จักการทำงานแบบวนซ้ำในการพัฒนาโปรแกรม',
			title5: 'รู้จักกับฟังก์ชัน',
			title6: 'รู้จักให้ลึกขึ้นกับ String',
			title7: 'การพัฒนาโปรแกรมเชิงวัตถุเบื้องต้น',
			title8: 'แบบฝึกหัด',
		},
		author: 'เอกพิชา',
		date: '12/05/2023',
		title: 'Introduction to Python',
		id: '07',
		imageUrl: 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/Python-language.png',
		fullImg: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
	},
	
]

//console.log(JSON.stringify(courses));
Product1.insertMany(courses)
	.then(function (docs) {
		console.log('Successfully insert to DB')
		docs.forEach((e) => console.log(JSON.stringify(e, null, '\t')))
		console.log('done!!')
		process.kill(process.pid, 'SIGINT')
	})
	.catch(function (err) {
		console.log(err)
	})
