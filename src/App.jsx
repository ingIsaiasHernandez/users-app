import axios from 'axios';
import { useState, useEffect } from 'react'
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import './style.css'
import Confirmation from './components/Confirmation';

function App() {

  const [userslist, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [action, setAction] = useState("");
  const [isVisible,setIsVisible] = useState(false)
  const [isVisibleConfirmation, setIsVisibleConfirmation] = useState(false)

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  },[]);

  console.log(userslist)

  const getUsers = () =>{
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user)
    setAction("updated")
    changeVisible()
  }

  const deleteUser = (user) => {
    axios
        .delete(`https://users-crud.academlo.tech/users/${user.id}`)
        .then(() => {
                    getUsers();
                    setAction("deleted");
                    changeVisibleConfirmation();
                  })
  }

  const changeVisibleConfirmation = () => {
    setIsVisibleConfirmation(!isVisibleConfirmation)
  }

  const changeVisible = () => {
      setIsVisible(!isVisible)
  }

  const createUser = () => {
    changeVisible();
    setAction("created");
  }

  return (
    <div className="App">
      <Confirmation isVisibleConfirmation={isVisibleConfirmation} changeVisibleConfirmation={changeVisibleConfirmation} action={action}/>
      <UsersForm
      userSelected={userSelected}
      isVisible={isVisible}
      getUsers={getUsers} 
      changeVisible={changeVisible}
      changeVisibleConfirmation={changeVisibleConfirmation}
      action={action}
      />
      <div className='header'>
        <h1>Users app <b className='header-version'>- v1.0</b> </h1>
        <button className='new-user-button' onClick={createUser} action={action}> + Create new user</button>
      </div>
        <UsersList 
        userslist={userslist}
        selectUser={selectUser}
        changeVisible={changeVisible}
        deleteUser={deleteUser}
        action={action}
        />     
    </div>
  )
}

export default App
