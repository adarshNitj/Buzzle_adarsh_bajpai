import React, { Component } from "react";

export class Item extends Component {
  render() {
      let {title,description} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "15rem"}}>
          <img src="https://media.glassdoor.com/sqll/334491/buzzle-com-squarelogo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">TOPIC</li>
            <li className="list-group-item">HOST</li>
            <li className="list-group-item">DURATION</li>
          </ul>
          <div className="card-body">
            <a href="/" className="card-link">
              Card link
            </a>
<div className="btn-group dropstart">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    :::
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/">Separated link</a></li>
  </ul>
</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
