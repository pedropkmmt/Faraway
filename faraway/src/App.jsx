import { useState } from 'react'
import './index.css'
import { use } from 'react'
function App() {
 const [description, setDescription ] = useState("") 
 const [quantity, setQuantity] = useState(5)
  const items = [
    {id: 1, description: "Passport", quantity: 2, packed: false},
    {id: 2, description: "Passport", quantity: 2, packed: false},
    {id: 3, description: "Passport", quantity: 2, packed: false},
    {id: 4, description: "Passport", quantity: 2, packed: false},
    {id: 5, description: "Passport", quantity: 2, packed: true},

  ]
  function handleSumbit(e){
    e.preventDefault()
    if (!description) return;
    const newItem = {description, quantity, packed:false, id: Date.now()}
    setDescription('')
    setQuantity(1)
  }
  return (
    <div className="container">
      <div className="header">
        <img src="faraway.png" alt="faraway picture" />
      </div>
      <div className="add">
        <div className="control">
          <p>what do you need for your trip?</p>
          <form className="form" onSubmit={handleSumbit}>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Item..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
          </form>
        </div>
      </div>
      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              <span
                style={
                  item.packed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
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

