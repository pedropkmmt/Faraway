import { useState } from 'react'
import './index.css'
function App() {


  return (
    <div className='container'>
    <div className='header'>
      <img src="faraway.png" alt="faraway picture" />
    </div>
    <div className='add'>
      <div className='control'>
      <p>what do you need for your trip?</p>
       <input className='num' type="number" placeholder='1' min={1}/>
      <input type="text" />
      <button>Add</button>
      </div>
    </div>
    <div className='list'>
     <input type="checkbox" />
    </div>
    <div className='bottom'>
      <button>Sort by input Order</button>
      <button>Clear List</button>
    </div>
    
    <div className='footer'>
      <p>You x amount of items on your list</p>
    </div>
    </div>
    
  )
}

export default App
