import React, { Component } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";

export default class ItemsBody extends Component {
  render() {
    return (
      <div>
        <ListItems>
         <ListItem text="Hello!"/>
        </ListItems>
      </div>
    );
  }
}
