import { NavLink } from "react-router-dom";
import { useLoaderData } from 'react-router-dom'
const LessonPage = () => {
	const lesson1 = useLoaderData()
	return (
		<>
			<div className="itemLesson">
				{lesson1 ? (
					<>
						<div className="video-detail">
						<iframe style={{margin: "0 5rem",padding: "15px"}} width="560" height="315" src={lesson1.videoUrl.video1} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</div>
						<div className="titleDetail">
						<h1 style={{margin: "0 7rem"}}>{lesson1.id} : {lesson1.title}</h1>
						<h2 style={{margin: "0 7rem"}}>Chapter 1 : {lesson1.content.chapter1}</h2><br></br>
						</div>
						<div className="containerLesson">
							{lesson1.content.chapter1 ? (<h4>Chapter 1 : {lesson1.content.chapter1}</h4>) : (<></>)}
							{lesson1.content.chapter2 ? (<h4>Chapter 2 : {lesson1.content.chapter2}</h4>) : (<></>)}
							{lesson1.content.chapter3 ? (<h4>Chapter 3 : {lesson1.content.chapter3}</h4>) : (<></>)}
							{lesson1.content.chapter4 ? (<h4>Chapter 4 : {lesson1.content.chapter4}</h4>) : (<></>)}
							{lesson1.content.chapter5 ? (<h4>Chapter 5 : {lesson1.content.chapter5}</h4>) : (<></>)}
							{lesson1.content.chapter6 ? (<h4>Chapter 6 : {lesson1.content.chapter6}</h4>) : (<></>)}
							{lesson1.content.chapter7 ? (<h4>Chapter 7 : {lesson1.content.chapter7}</h4>) : (<></>)}
							{lesson1.content.chapter8 ? (<h4>Chapter 8 : {lesson1.content.chapter8}</h4>) : (<></>)}
						</div>

					</>
				) : (
					<div>No such lesson!</div>
				)}
			</div>
		</>
	)
}
export default LessonPage


export const loaderLesson = async ({ params }) => {
	const { id } = params
	const res = await fetch('/lesson/' + id)
	let product = await res.json()
	if (!res.ok) {
		throw Error(product.error)
	}
	return product //res.json()
}
