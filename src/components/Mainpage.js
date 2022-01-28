import React, { Component } from 'react';
import Item from './Item';

export class Mainpage extends Component {
  render() {
    return (
        <div className="container my-3">
            <h2>TOP EVENTS FROM ..... WORLD</h2>
            <div className="row">
                <div className="col-md-3">
                <Item/>
                </div>
                <div className="col-md-3">
                <Item/>
                </div>
                <div className="col-md-3">
                <Item/>
                </div>
                <div className="col-md-3">
                <Item/>
                </div>
                <div className="col-md-3">
                <Item/>
                </div>
            </div>
            <a className="btn btn-primary" href="/" role="button">SEE MORE</a>
        </div>
    )
  }
}

export default Mainpage;
