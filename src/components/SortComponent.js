import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

const SortBar = {
    display: "flex",
    justifyContent: "space-evenly",
    fontWeight: "bold",
    width: "50%",
    maxHeight: "80px",
}

function SortBarComponent() {
    return (
      <div style={SortBar}>
        <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown">
      <Button variant="light">SORT: MOST POPULAR ▼</Button>{' '}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">A → Z </Dropdown.Item>
        <Dropdown.Item href="#/action-2">SCORE: HIGHEST ▲</Dropdown.Item>
        <Dropdown.Item href="#/action-3">SCORE: LOWEST ▼</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown">
      <Button variant="light">GENRE ▼</Button>{' '}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Animation</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Crime</Dropdown.Item>
        <Dropdown.Item href="#/tvshowDrama">Drama</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown">
      <Button variant="light">RATING ▼</Button>{' '}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Bellow 8.5 ▼</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Over 8.5 ▲</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Over 9.5 ▲</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
    )
}

export default SortBarComponent