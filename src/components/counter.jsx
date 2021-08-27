import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const formCount = () => {
        return count === 0 ? 'Ноль' : count;
    };

    const getBageClasses = () => {
        return 'badge m-2 bg-' + (count === 0 ? 'danger' : 'primary');
    };

    const handleIncrement = (productId) => {
        setCount(count + 1);
    };

    const handleDecrement = (productId) => {
        count > 0 && setCount(count-1);
    };

    return (
        <>
            <span className={getBageClasses()}>
                {formCount()}
            </span>
            <button onClick={() => handleIncrement({id: 1})} className='btn btn-secondary btn-sm m-1'>Increment</button>
            <button onClick={() => handleDecrement({id: 1})} className='btn btn-secondary btn-sm'>Decrement</button>
        </>
    );
}
 
export default Counter;
