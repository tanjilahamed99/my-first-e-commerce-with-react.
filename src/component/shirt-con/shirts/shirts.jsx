// import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Shirt from "../shrit/shirt";

const Shirts = () => {
    const [shirts, setShirts] = useState([]);
    useEffect(() => {
        fetch('shirt.json')
            .then(res => res.json())
            .then(data => setShirts(data))
    }, [])
    return (
        <div className="w-[75%]">
            <h2 className='text-center font-bold text-4xl mt-10 mb-3'>our best shirts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    shirts.map((shirt, idx) => <Shirt key={idx} shirt={shirt}></Shirt>)
                }
            </div>
        </div>
    );
};

Shirts.propTypes = {

};

export default Shirts;