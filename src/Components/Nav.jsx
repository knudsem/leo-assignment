import React, {useState} from 'react'
import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap'
import mainLogo from'../leo-favicon.png';

const NavComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=> setIsOpen(!isOpen)
    return (
        <Navbar style={{backgroundColor: '#2EB1E7'}} dark expand='md'>
            <div className="container">
                <NavbarBrand className='mr-auto' href='/'>
                    <h3>
                        <img src={mainLogo} style={{width: '80px'}} ></img>'s search bar
                    </h3>
                </NavbarBrand>
            </div>
        </Navbar>
    )
}

export default NavComponent
