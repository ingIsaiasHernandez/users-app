import axios from 'axios';
import { useState, useEffect } from 'react'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import './style.css'

function App() {

  const [userslist, setUsersList] = useState([]);

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  },[]);

  console.log(userslist);

  return (
    <div className="App">

      <UsersList userslist={userslist}></UsersList> 
      <UsersForm></UsersForm>
      
    </div>
  )
}

export default App
