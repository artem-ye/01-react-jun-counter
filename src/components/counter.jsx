import React from 'react';

const Counter = ({id, value, name, onIncrement, onDecrement, onDelete}) => {          
    const formValue = () => {
        return value === 0 ? 'Ноль' : value;
    };

    const getBadgeClasses = () => {
        return 'badge m-2 bg-' + (value === 0 ? 'danger' : 'primary');
    };    

    return (
        <div>
            <h1>{name}</h1>
            <span className={getBadgeClasses()}>
                {formValue()}
            </span>
            <button 
                onClick={
                    () => onIncrement(id)
                } 
                className='btn btn-secondary btn-sm m-1'>Increment</button>
            <button 
                onClick={
                    () => onDecrement(id)
                } 
                className='btn btn-secondary btn-sm'>Decrement</button>
            <button
                onClick={
                    () => onDelete(id)
                } 
                className='btn btn-sm btn-danger m-2'
            >delete</button>
        </div>
    );
}
 
export default Counter;
