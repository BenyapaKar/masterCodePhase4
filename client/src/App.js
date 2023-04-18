import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom'

// import layout
import MainLayout from './layout/MainLayout'
import PostLayout from './layout/PostLayout'

// import pages
import Home from './page/HomePage'
import Signup from './page/SignupPage'
import PostPage, { action, productsLoader } from './page/PostPage'
import PostDetailPage, {
	loader as detailLoader,
} from './page/PostDetailPage'
import ErrorPage from './component/ErrorPage'
import NotFound from './component/NotFound'
import NewProduct, { newAction } from './page/NewProduct'
import LoginPage from './page/LoginPage'
import UserInfo from './page/UserInfo'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
			<Route index element={<Home />} />
			<Route path="post" element={<PostLayout />}>
				<Route
					index
					element={<PostPage />}
					loader={productsLoader}
					errorElement={<ErrorPage />}
					action={action}
				/>
				<Route
					path=":id"
					element={<PostDetailPage />}
					loader={detailLoader}
				/>
				<Route path=":id/new" element={<NewProduct />} action={newAction} />
			</Route>
			<Route path="signup" element={<Signup />} />
			<Route path="login" element={<LoginPage /> } />
			<Route path="userInfo" element={<UserInfo /> } />
		</Route>
		
		
	)
)
const App = () => <RouterProvider router={router} />
export default App
