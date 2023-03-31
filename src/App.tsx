import{useState} from 'react'
import './assets/css/style.css'

const App = () => {
   const [n, setN] = useState(0)
   const handleMinus = () =>{
    setN(n -1);
   }
   const handleMore = () =>{
    setN(n +1);
   }

  return (
    <div>
      <div className = "div-pai">
        <button onClick={handleMinus} className="btn">-</button>
        <div>{n}</div>
        <button onClick={handleMore} className="btn">+</button>
      </div>
    </div>
  )
}

export default App