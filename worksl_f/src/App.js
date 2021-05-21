import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


function App() {
  useEffect(() => {
    let intervalId = setInterval(async () => {
        const response = await fetch('http://127.0.0.1:8000/api/timecalculate', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'include',
        });
        const content = await response.json();
        const now = new Date();

        console.log(content + now);
    },60000)

    return () => {
        clearInterval(intervalId);
    };
}, []);
  const dispatch = useDispatch();
  useEffect(()=> {
    (
        async () => {
            const response = await fetch('http://127.0.0.1:8000/api/user', {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
                credentials: 'include',
            });
            const content = await response.json();
            if(response.status === 200){
              dispatch({type: 'LOGIN', payload: content})}
           
        }
    )()
    }
)
  return (
    <div>
      <Header/>
      {/* <Login/> */}
    </div>
  );
}

export default App;

