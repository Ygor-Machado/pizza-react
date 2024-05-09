import { MenuList } from "../database/MenuList";
import MenuItem from "./MenuItem"
import "../styles/Menu.css";

function Menu() {
    return (
      <div className="menu">
        <h1 className="menuTitle">Menu</h1>
        <div className="menuList">
                {MenuList.map((menu, key) => (
                    <MenuItem
                        key={key}
                        image={menu.image}
                        name={menu.name}
                        price={menu.price}
                    />
                ))}
        </div>
      </div>
    );
  }
  

export default Menu;
