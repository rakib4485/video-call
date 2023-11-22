import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleJoin = () =>{
        navigate(`/room/${value}`)
    }
    console.log(value)
    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter join code'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleJoin}>Submit</button>
        </div>
    );
};

export default HomePage;