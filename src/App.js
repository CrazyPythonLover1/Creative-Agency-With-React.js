import { useEffect, useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';

function App() {
  const [cursor, setCursor] = useState({})
  const dynamicCursor = e => (
    setCursor({x:e.clientX, y:e.clientY})
);

console.log(cursor.y)

useEffect( () => {
  window.addEventListener('mousemove', dynamicCursor );
  return () => window.removeEventListener('mousemove', dynamicCursor);
} )
// `translateX( calc(${cursor.x}px-50%) ) translateY( calc(${cursor.y})px - 50% )`
  return (
    <div style={{ }}>
      <div className="dynamicCursor" style={{position:"fixed", transform: `translateX(calc(${cursor.x}px - 50%)) translateY(calc(${cursor.y}px - 50%))` }} ></div>
      <Home/>
    </div>
    
  );
}

export default App;