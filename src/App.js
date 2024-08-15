import logo from './logo.svg';
import './App.css';
import Quote from './components/quote';

/* const btn = document.getElementById("new-quote");
const box = document.getElementById("quote-box");

const colores = ["#9F86C0", "#3F2E3E", "#A78295", "5E548E", "#231942", "#E0B1CB", "#9F86C0"];
let color = Math.floor(Math.random * colores.length);

btn.addEventListener("click", () => {
  document.getElementById("quote-box").style.background = colores[color];
}) */

function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
