import PropTypes from 'prop-types';

const Cart = ({ cart, total }) => {
    return (
        <div className="md:w-[25%]">
            <h2 className="text-center font-bold text-4xl mt-12 mb-5">Cart list</h2>
            <div className='bg-[#d5f7f9] w-[80%] mx-auto p-5 rounded-lg'>
                {
                    cart.map((item, idx) => <h3 className="font-semibold text-2xl" key={idx}>{idx + 1}: {item.Brand}</h3>)
                }
                <hr className='w-[80%] mx-auto my-4' />
                <h3 className='text-2xl font-semibold'>Total: {total}$</h3>
                <button className='btn text-center btn-primary mx-auto mt-2'>Purchase</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    total:PropTypes.number
}

export default Cart;