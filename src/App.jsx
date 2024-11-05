import { useState } from 'react'
import './App.css'
import EventHandler from './Components/EventHandler.JSX'
import Greetings from './Components/Greetings'
import ShowName from './Components/ShowName'

function App() {
  const employees = [
    {
      id: 1,
      employeeName: 'Md Abdullah al Sadid',
      profitShare: 400,
      bestRegards: 'ARUP'
    },
    {
      id: 2,
      employeeName: 'Ayo Shikder',
      profitShare: 350,
      bestRegards: 'ARUP'
    },
    {
      id: 3,
      employeeName: 'Josef Karim',
      profitShare: 600,
      bestRegards: 'ARUP'
    },
    {
      id: 4,
      employeeName: 'Hasnat Abdullah',
      profitShare: 900,
      bestRegards: 'ARUP'
    }, {
      id: 5,
      employeeName: 'Asif Mahmud',
      profitShare: 1400,
      bestRegards: 'ARUP'
    },
    {
      id: 5,
      employeeName: 'Nahid Islam',
      profitShare: 1000,
      bestRegards: 'ARUP'
    },
  ]
  const [name, setName] = useState('')
  function handleClick(e){
    e.preventDefault();
    ;
    console.log(e.target.elements.getName.value);
    setName(e.target.elements.getName.value);
    e.target.elements.getName.value = '';
  }
  return (
    <>
      <div className='grid grid-cols-2'>
        {
          employees.map(employee => <Greetings key={employee.id} employee={employee} ></Greetings>)
        }
        <EventHandler handleClick={handleClick}></EventHandler>
        <ShowName name={name}></ShowName>
      </div>

    </>
  )
}

export default App
