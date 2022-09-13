import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (

        <>
            <div className='navbar p-3'>
                <div className='btn-group'>
                <a className="navbar-brand" href="/#"> <strong className='text-warning'>Di</strong>sh Rest<strong className='text-warning'>urant</strong></a>
                    {menuList.map((curElement) => {
                        return (
                            <button type="button" className='btn btn-warning' onClick={() => filterItem(curElement)}>{curElement}</button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Navbar;
