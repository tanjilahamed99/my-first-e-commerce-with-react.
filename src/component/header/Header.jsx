// import PropTypes from 'prop-types';

const Header =()=> {
    return (
        <div className='h-[95vh] bg-[#88dadf]'>
            {/* navbar */}
            <div>
                <div className="navbar bg-[#d5f7f9]">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl font-semibold">Clothe World</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/ncKyP4v/girl1.jpg" />
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner */}
            <div className="flex md:flex-row flex-col-reverse items-center mx-auto justify-around mt-10">
                <div>
                    <h2 className="text-center text-6xl font-bold leading-[65px]">Our Website Give <br /> You World Best <br /><span className="text-purple-700">Clothes</span></h2>
                </div>
                <div>
                    <img className="w-[400px]" src="https://i.ibb.co/Q6bSW88/pngwing-com-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;