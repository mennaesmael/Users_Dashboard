import {Routes, Route} from 'react-router-dom';;
import Login from './viewes/Login';
import Signup from './viewes/signup';
import Users from './viewes/users';
import NotFound from './viewes/notfound';
import MyForm from './components/MyForm';
import UsersList from './components/UsersList';
import './index.css'

function App() {
return (
    <div>
{/* <Routes>
<Route index element={<Login/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/users" element={<Users/>} />
<Route path="*" element={<NotFound/>} />
</Routes> */}

<div className='container'>
<MyForm>
</MyForm>

<UsersList>
</UsersList>
</div>

    </div>
  )
}

export default App
