import React, {useEffect} from 'react';

function Home(){
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
    useEffect(()=> {
        (
            async () => {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
                    credentials: 'include',
                });
                const content = await response.json();
                console.log(content);
            }
        )()
        }
    )

    return(
        <div className="App">
            Home
        </div>
    )
}

export default Home;