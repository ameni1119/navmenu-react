import React from 'react';



function Nav(props){
return (
   
      <ul className="navigateur">
        {props.tab.map(el => (
          <li className="dropdown">
            <a href='#'>{el.item}</a>
            {el.subitem ? (
              <ul className="dropdowne">
               {el.subitem.map(el => (
                  <li><a href="#" className="link">{el}</a></li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
   
  );
}
export default Nav