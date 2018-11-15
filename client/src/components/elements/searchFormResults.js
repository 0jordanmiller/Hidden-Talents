import React from "react";
import { Item, Image, Grid } from "semantic-ui-react";
import * as Images from "../images";

const SearchResults = props => (
  <div className="item-background">
    <Grid>
      <Grid.Row>
        <Grid.Column width="4">
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width="12">
          <div className="itemline">
            <p className="searchname">
              {props.name} - {props.talent}
            </p>
            <p className="itemz">{props.bio}</p>
            <p className="itemz">{props.contact}</p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default SearchResults;
