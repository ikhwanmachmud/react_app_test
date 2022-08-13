import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Review from './Review'


function App() {



  // Generate JSX code for Display each item
  // const renderList = peopleList.map(("id", "firstName") => 
  // <div key={"id"}>{"firstName"}</div>
  // );

  return (
    <main className='bg-gradient-to-t'>
      <section className="container">
        <div className='underline'>
          <h1>Meet Our Staff</h1>
          <Review />
        </div>
      </section>
    </main>


  )
}

export default App
