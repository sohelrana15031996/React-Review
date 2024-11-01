import './App.css'
import Greetings from './Components/Greetings'

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


  return (
    <>
      <div className='grid grid-cols-2'>
        {
          employees.map(employee => <Greetings key={employee.id} employee={employee} ></Greetings>)
        }
      </div>

    </>
  )
}

export default App
