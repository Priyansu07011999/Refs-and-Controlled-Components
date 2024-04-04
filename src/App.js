import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [userLists, setUserLists]= useState([])

  const addingUser = (userName, userAge, userCollege) => {
    setUserLists((prev) => {
      return [...prev, {name:userName, age:userAge, college:userCollege, id:Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUser onAdd = {addingUser}/>
      <UserList users={userLists}/>
    </>
    
  );
}

export default App;
