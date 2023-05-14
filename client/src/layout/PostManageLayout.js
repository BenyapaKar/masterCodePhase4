import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from '../component/Spinner'

const PostManageLayout = () => {
	const navigation = useNavigation()
	return (
		<>
			<h1> แก้ไขบทความ</h1>
			<div>
				{navigation.state === 'loading' ? <Spinner /> : ''} <Outlet />
			</div>
		</>
	)
}

export default PostManageLayout;
