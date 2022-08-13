import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import peopleList from './Data.jsx'



function App() {
  const [people, setPeople] = useState(peopleList);
  const [index, setIndex] = useState(0);
  

  const renderList = peopleList.map((person) => 
  <li key={person.id}>
  {person.firstName} - {person.age} years old
</li>
                             );

    // Generate JSX code for Display each item
    // const renderList = peopleList.map(("id", "firstName") => 
    // <div key={"id"}>{"firstName"}</div>
  // );

  return (
      <section >
         <div>The List contains:</div>
        {renderList}
      </section>


  )
}

export default App
