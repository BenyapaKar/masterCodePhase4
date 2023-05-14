import Lesson from './LessonDB.js'
import mongooseDbConnect from '../config/dbConnect.js'

mongooseDbConnect()

var lessons = [
	{
		content: {
			chapter1: 'พื้นฐานที่ควรรู้ก่อนสร้างเว็บ',
			chapter2: 'มาสร้างเว็บไซต์แรกของเรากันเลย',
			chapter3: 'มาเล่นกับสารพัด Tag',
			chapter4: 'ทำให้เว็บออนไลน์',
			chapter5: 'แบบฝึกหัด',
		},
		id: '01',
		title: 'Introduction to HTML',
		courseId: '01',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/ZyicuJiLxoc',
			video2: 'https://www.youtube.com/embed/ZyicuJiLxoc',
			video3: 'https://www.youtube.com/embed/ZyicuJiLxoc',
			video4: 'https://www.youtube.com/embed/ZyicuJiLxoc',
		},
	},
	{
		content: {
			chapter1: 'แต่งเว็บไซต์ให้เก๋ขึ้น แค่รู้จัก CSS',
			chapter2: 'ทำให้เว็บหลุดกรอบด้วย CSS3',
			chapter3: 'ทำเว็บให้สวยขึ้นเป็นพันเท่าด้วย Bootstrap',
			chapter4: 'แบบฝึกหัด',
		},
		id: '02',
		title: 'Introduction to CSS',
		courseId: '02',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/9H6ubALp8vo',
			video2: 'https://www.youtube.com/embed/9H6ubALp8vo',
			video3: 'https://www.youtube.com/embed/9H6ubALp8vo',
		},
	},
	{
		content: {
			chapter1: 'สิ่งที่ควรรู้ก่อนเริ่มต้นกับ JavaScript',
			chapter2: 'พื้นฐานการใช้งาน JavaScript เบื้องต้น',
			chapter3: 'พื้นฐานการตัดสินใจของโปรแกรม',
			chapter4: 'แบบฝึกหัด',
		},
		id: '03',
		title: 'Introduction to JavaScript',
		courseId: '03',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/PGZ7QiKdumo',
			video2: 'https://www.youtube.com/embed/PGZ7QiKdumo',
			video3: 'https://www.youtube.com/embed/PGZ7QiKdumo',
		},
	},
	{
		content: {
			chapter1: 'เตรียมใช้งาน React',
			chapter2: 'React JSX',
			chapter3: 'React Components',
			chapter4: 'React Props',
			chapter5: 'React State',
			chapter6: 'แบบฝึกหัด',
		},
		id: '04',
		title: 'Introduction to React',
		courseId: '04',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/KvNfS86KEA4',
			video2: 'https://www.youtube.com/embed/KvNfS86KEA4',
			video3: 'https://www.youtube.com/embed/KvNfS86KEA4',
			video4: 'https://www.youtube.com/embed/KvNfS86KEA4',
			video5: 'https://www.youtube.com/embed/KvNfS86KEA4',
		},
	},
	{
		content: {
			chapter1: 'JSON ประกอบด้วยอะไรบ้าง',
			chapter2: 'JSON แตกต่างจาก XML อย่างไร',
			chapter3: 'โค้ดตัวอย่างการใช้งาน',
			chapter4: 'แบบฝึกหัด',
		},
		id: '05',
		title: 'Introduction to JSON',
		courseId: '05',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/zuz-Zmx5e4A',
			video2: 'https://www.youtube.com/embed/zuz-Zmx5e4Aร',
			video3: 'https://www.youtube.com/embed/zuz-Zmx5e4A',
		},
	},
	{
		content: {
			chapter1: 'Docker มันทำงานยังไง',
			chapter2: 'Docker มันคืออะไร',
			chapter3: 'ตัวอย่างการใช้งาน',
			chapter4: 'แบบฝึกหัด',
		},
		id: '06',
		title: 'Introduction to Docker',
		courseId: '06',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/nDIWwvy07uQ',
			video2: 'https://www.youtube.com/embed/nDIWwvy07uQ',
			video3: 'https://www.youtube.com/embed/nDIWwvy07uQ',
		},
	},
	{
		content: {
			chapter1: 'แนะนำการเริ่มต้นกับ Python 3',
			chapter2: 'ทำความรู้จักกับข้อมูล และ การแสดงผลข้อมูล',
			chapter3: 'รู้จักกับตัวแปร และ ตัวดำเนินการ',
			chapter4: 'รู้จักการทำงานแบบวนซ้ำในการพัฒนาโปรแกรม',
			chapter5: 'รู้จักกับฟังก์ชัน',
			chapter6: 'รู้จักให้ลึกขึ้นกับ String',
			chapter7: 'การพัฒนาโปรแกรมเชิงวัตถุเบื้องต้น',
			chapter8: 'แบบฝึกหัด',
		},
		id: '07',
		title: 'Introduction to Python',
		courseId: '07',
		videoUrl: {
			video1: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video2: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video3: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video4: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video5: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video6: 'https://www.youtube.com/embed/N1fnq4MF3AE',
			video7: 'https://www.youtube.com/embed/N1fnq4MF3AE',
		},
	},
	
]

//console.log(JSON.stringify(courses));
Lesson.insertMany(lessons)
	.then(function (docs) {
		console.log('Successfully insert to DB')
		docs.forEach((e) => console.log(JSON.stringify(e, null, '\t')))
		console.log('done!!')
		process.kill(process.pid, 'SIGINT')
	})
	.catch(function (err) {
		console.log(err)
	})
