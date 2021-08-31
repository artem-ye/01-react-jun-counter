import React, { useState } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';

function App() {  
    const initialState = [
        {value: 0, id:1, name: 'Вилка'},
        {value: 0, id:2, name: 'Ложка'},
        {value: 0, id:3, name: 'Тарелка'},
        {value: 0, id:4, name: 'Нож'},
        {value: 0, id:5, name: 'Шляпа'},
    ];
    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (id) => {        
        const newState = counters.map(e => {            
            return (e.id === id) ? {...e, value: e.value+1} : e;        
        });        
        setCounters(newState);
    };

    const handleDecrement = (id) => {        
        const index = counters.findIndex(item => (item.id === id) && item.value > 0);

        if (index >= 0) {
            const newState = [...counters];
            newState[index].value--;
            setCounters(newState);
        }        
    };

    const handelDelete = (id) => {
      setCounters(counters.filter(el => el.id !== id));
    };

    const handleReset = () => setCounters(initialState);

    return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
            <Navbar 
                totalItems={
                    counters.reduce( (acc,itm)=>acc+itm.value, 0)
                }
            />           
            <Counters
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handelDelete}
                onReset={handleReset}
                counters={counters}
            />
        </main>
      </div>
    );
}

export default App;
