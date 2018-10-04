import React from "react";
import { Item } from "semantic-ui-react";

const SearchResults = (props) => (
  <div>
    <Item>
      <Item.Header>{props.name}</Item.Header>
      <Item.Meta>{props.talent}</Item.Meta>
      <Item.Description>{props.bio}</Item.Description>
      <Item.Extra>{props.contact}</Item.Extra>
    </Item>
  </div>
);

export default SearchResults;
