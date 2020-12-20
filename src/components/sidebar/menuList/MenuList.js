import routes from "../../../router/routes";
import MenuListItem from "./menuListItem/MenuListItem";
import "./MenuList.scss";

function MenuList({ isOpen }) {
    return (
        <ul className={`menu ${isOpen ? 'd-block' : ''}`}>
            {routes.map((route, index) => (
                <MenuListItem 
                    iconName={route.icon} 
                    path={route.path} 
                    name={route.name}
                    key={index} 
                />
            ))}
        </ul>
    );
}

export default MenuList;