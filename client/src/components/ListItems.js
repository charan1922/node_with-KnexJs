import React, { Children } from "react";

const ListItems = ({children}) => {
    return(
        <ul className="list-group">
        {children}
        </ul>
    );

};

export default ListItems;