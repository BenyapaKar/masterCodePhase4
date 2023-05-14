import {
	Route,
	createBrowserRouter,
	createRoutesFromChildren,
	RouterProvider,
	useNavigate
  } from 'react-router-dom'
  
  import MainLayout from './layout/MainLayout'
  import PostLayout from './layout/PostLayout'
  import PostManageLayout from './layout/PostManageLayout'
  import CourseLayout from './layout/CourseLayout'
  
  import Home from './page/HomePage'
  import Signup from './page/SignupPage'
  import CoursePage, { action1, productsLoader1 } from './page/CoursePage'
  import CourseDetailPage, { loader1 as detailLoader1 } from './page/CourseDetailPage'
  import PostPage, { action, productsLoader } from './page/PostPage'
  import PostDetailPage, { loader as detailLoader } from './page/PostDetailPage'
  import ErrorPage from './component/ErrorPage'
  import NotFound from './component/NotFound'
  import NewProduct, { newAction } from './page/NewPost'
  import LoginPage from './page/LoginPage'
  import UserInfo from './page/UserInfo'
  import ManagePost, { addPost, postLoader} from './page/ManagePostPage'
  import EditProduct, { editAction } from './page/EditPostPage'
  import LessonPage, {loaderLesson} from './page/LessonPage'
  
  const App = () => {
	const router = createBrowserRouter(
	  createRoutesFromChildren(
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
			<Route path=":id" element={<PostDetailPage />} loader={detailLoader} />
      	</Route>
      
      	<Route path="course" element={<CourseLayout />}>
			<Route
			  index
			  element={<CoursePage />}
			  loader={productsLoader1}
			  errorElement={<ErrorPage />}
			  action={action1}
			/>
			<Route path=":id" element={<CourseDetailPage />} loader={detailLoader1} />
      	</Route>

		<Route path=":id/lesson" element={<LessonPage/>} loader={loaderLesson} />

				  
		  <Route path="signup" element={<Signup />} />
		  <Route path="login" element={<LoginPage />} />
		  <Route path="userInfo" element={<UserInfo />} />
		  <Route path="managePost" element={<PostManageLayout />}>
			<Route path=":id/new" element={<NewProduct />} action={newAction} />
			<Route path=":id/edit" element={<EditProduct />} action={editAction} />
			<Route
			  index
			  element={<ManagePost />}
			  loader={postLoader}
			  errorElement={<ErrorPage />}
			  action={addPost}
			/>
		  </Route>
		  
		</Route>
	  )
	)
  
	return <RouterProvider router={router} />
  }
  
  export default App
  