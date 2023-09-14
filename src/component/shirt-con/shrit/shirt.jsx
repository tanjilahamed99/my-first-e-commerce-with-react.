import PropTypes from 'prop-types';

const Shirt = ({ shirt }) => {
    const { image, Brand, Size, Price, Stock } = shirt
    return (
        <div className='border-2 shadow-md shadow-gray-500 text-center p-5'>
            <img className='w-[250px] h-[250px] mx-auto shadow-md shadow-gray-300 bg-slate-200 p-2' src={image} alt="" />
            <div className='space-y-2 mt-3'>
                <h2 className='text-xl font-semibold'>{Brand}</h2>
                <h2 className='text-xl font-bold'>Price: {Price}</h2>
                <h2 className='text-lg font-medium'>Size: {Size}</h2>
                <h2 className='text-lg font-medium'>Stock: {Stock} pisses</h2>
                <button className='btn btn-primary bg-purple-700 text-white'>Add To Cart</button>
            </div>
        </div>
    );
};

Shirt.propTypes = {
    shirt: PropTypes.array
};

export default Shirt;