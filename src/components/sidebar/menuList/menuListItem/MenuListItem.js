import Icon from "../../../icon/Icon";
import { NavLink } from "react-router-dom";

function MenuListItem({name, iconName, path }) {
    return (
        <li className="menu-item">
            <NavLink exact className="menu-link" to={path}>
                <Icon name={iconName} />
                <span>{name}</span>
            </NavLink>
        </li>
    );
}

export default MenuListItem;