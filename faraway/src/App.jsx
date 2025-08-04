import { useState } from 'react'
import './index.css'
function App() {
 
  const items = [
    {id: 1, description: "Passport", quantity: 2, packed: false},
    {id: 2, description: "Passport", quantity: 2, packed: false},
    {id: 3, description: "Passport", quantity: 2, packed: false},
    {id: 4, description: "Passport", quantity: 2, packed: false},
    {id: 5, description: "Passport", quantity: 2, packed: true},

  ]
  return (
    <div className="container">
      <div className="header">
        <img src="faraway.png" alt="faraway picture" />
      </div>
      <div className="add">
        <div className="control">
          <p>what do you need for your trip?</p>
          <input className="num" type="number" placeholder="1" min={1} />
          <input type="text" />
          <button>Add</button>
        </div>
      </div>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              <span style={item.packed === true ? {textDecoration: "line-through"} : {textDecoration: "none"}}>
                {item.quantity} {item.description}{" "}
              </span>
              <button>❌</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <button>Sort by input Order</button>
        <button>Clear List</button>
      </div>

      <div className="footer">
        <p>You x amount of items on your list</p>
      </div>
    </div>
  );
} 
export default App

