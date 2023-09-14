// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";

const Shirts = () => {
    const [shirts, setShirts] = useState([]);
    useEffect(() => {
        fetch('shirt.json')
            .then(res => res.json())
            .then(data => setShirts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl mt-10'>our best shirts</h2>
            {
                shirts.map((shirt) =>console.log(shirt))
            }
        </div>
    );
};

Shirts.propTypes = {

};

export default Shirts;