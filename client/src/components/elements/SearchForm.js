import React from "react";
import { Button, Icon } from 'semantic-ui-react'

const SearchForm = props => (
 
    <div className="form-group">
      <div className='zip'>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="zipcode"
        type="text"
        placeholder="Zipcode"
        id="search"
      />
      </div>
      <br></br>
      <div className='btn'>
      <Button icon labelPosition='right'
        onClick={props.handleFormSubmit}
      >
      <Icon name='angle double right' />
        Search
      </Button>
      </div>
    </div>
 
);

export default SearchForm;