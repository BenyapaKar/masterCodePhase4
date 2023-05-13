import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from '../component/Spinner'

const CourseLayout = () => {
	const navigation = useNavigation()
	return (
		<>
			<h1> หลักสูตร</h1>
			<div>
				{navigation.state === 'loading' ? <Spinner /> : ''} <Outlet />
			</div>
		</>
	)
}

export default CourseLayout;
