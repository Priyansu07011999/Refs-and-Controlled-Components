import React,{useState, useRef} from 'react'
import './AddUser.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
// import UserList from './UserList'
import ErrorModel from '../UI/ErrorModel'
import Wrappers from '../Helpers/Wrappers'


function AddUser(props) {

  const nameInputRef = useRef()
  const ageInputRef = useRef()
  const collegeInputRef = useRef()

  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegeName.length === 0 ){
      if(enteredName.trim().length === 0 && enteredAge.trim().length !== 0 && enteredCollegeName.length !== 0){
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid name (non-empty values).',
        });
        return;
      }
      else if(enteredName.trim().length !== 0 && enteredAge.trim().length === 0 && enteredCollegeName.length !== 0){
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid Age (non-empty values).',
        });
        return;
      }
      else if(enteredName.trim().length !== 0 && enteredAge.trim().length !== 0 && enteredCollegeName.length === 0){
        setError({
          title: 'Invalid input',
          message: 'Your college Name can not be empty. (non-empty values).',
        });
        return;
      }
      else{
        setError({
          title: 'Invalid input',
          message: 'Please enter all valid values(Your Name, Your Age and your College Name)',
        });
        return;
      }
    }
    if (+enteredAge < 1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
        return
    }
    props.onAdd(enteredName, enteredAge, enteredCollegeName)
    nameInputRef.current.value = ''
    ageInputRef.current.value=''
    collegeInputRef.current.value=''
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrappers>
    {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className='input'>
    <form onSubmit={addUserHandler}>
        <label htmlFor='userName'>User Name</label>
        <input type="text" id="username" ref={nameInputRef}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number"  id='age' ref={ageInputRef}/>
        <label htmlFor="college">College Name</label>
        <input type="text" id='clg' ref={collegeInputRef} />
        <Button type= 'submit'>Add User</Button>
    </form>

    </Card>
    </Wrappers>
  )
}

export default AddUser

