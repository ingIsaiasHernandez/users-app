import axios from 'axios';
import { useState, useEffect } from 'react'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import './style.css'

function App() {

  const [userslist, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  },[]);

  const getUsers = () =>{
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const [isVisible,setIsVisible] = useState(false)

  const changeVisible = () => {
      setIsVisible(!isVisible)
  }

  return (
    <div className="App">
      <UsersForm isVisible={isVisible} changeVisible={changeVisible}/>
      <div className='header'>
        <h1>Usuarios</h1>
        <button className='new-user-button' onClick={changeVisible}> + Crear nuevo usuario</button>
      </div>
        <UsersList userslist={userslist} />     
    </div>
  )
}

export default App
