import axios from 'axios'
import { useDebugValue, useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const getUsers = ()=> {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsersList(res.data))
  }

  useEffect(()=>{
    getUsers();
  }, [])

  const [usersList, setUsersList] = useState([])
  const [selectedUser, setSelectedUser] = useState(null) 

  const addUser = (newUser)=>{
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
      .then(()=> getUsers())
      .catch(error => console.log(error.response?.data))
  }

  const deleteUser = (userId) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userId}`)
      .then(()=> getUsers())
  }

  const selectUser = (user) =>{
    setSelectedUser(user)
  }

  const updateUser = (forUpdateUser)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser.id}/`, forUpdateUser)
      .then(()=> getUsers())
      .catch(error => console.log(error.response?.data))
      console.log("hola");
      console.log(selectedUser.id);
      console.log(forUpdateUser);
  }

  return (
    <>
      <div className="App">
        <UsersForm
          addUser={addUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          updateUser={updateUser}
        />
        <UsersList
          usersList={usersList}
          deleteUser={deleteUser}
          selectUser={selectUser}
        />
      </div>
    </>
  )
}

export default App
