// Menu.js
import React from 'react';


function Menu({ visible, toggleMenu }) {
  return (
    <div className="menuDiv" onClick={toggleMenu}>
      <div>
        <div className="menuLine"></div>
        <div className="menuLine"></div>
        <div className="menuLine"></div>
      </div>
      <span>Menu</span>

      {visible && (
        <div className="menuList">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
