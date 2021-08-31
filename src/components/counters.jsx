import React from 'react';
import Counter from './counter';

const Counters = ({counters, onIncrement, onDecrement, onDelete, onReset}) => {        
    return ( 
        <div>
            <button className="btn btn-danger btn-sm m-2" onClick={onReset}>RESET</button>
            {counters.map(counter => {
                return (
                    <Counter 
                        key={counter.id} 
                        id={counter.id} 
                        value={counter.value} 
                        name={counter.name}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    >                        
                    </Counter>
                )
            })}
        </div>       
    );
}
 
export default Counters;