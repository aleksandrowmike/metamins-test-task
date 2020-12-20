import Logo from './logo/Logo';
import MenuList from './menuList/MenuList';
import React, {useState} from 'react';

import './SideBar.scss';
function SideBar() {

    const [isOpenToggle, setOpenToggle] = useState(false);

    const clickOpenModal = () => {
        setOpenToggle(!isOpenToggle)
    }
    return (
        <div className="sidebar">
             <div className="logo-container d-flex justify-content-between justify-content-center">
                <Logo />
                <div onClick={clickOpenModal} className={`icon-burger-menu ${isOpenToggle ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
             </div>
             <MenuList isOpen={isOpenToggle} />
        </div>
    );
}

export default SideBar;