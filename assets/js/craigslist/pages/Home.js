import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Johnny",
      categoriesData
    };
  }

  componentWillMount() {
    const self = this;
    axios.get('/api/categories')
    .then(function (response) {
      self.setState( {
        categoriesData: response.data
      }, () => {
        console.log(self.state);
      })

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  clickedBtn = () => {
    console.log("");
  };

  loopCategories = () => {
    let testArray = [1, 2, 3, 4, 5, 6, 7];
    return testArray.map((item, i) => {
      return (
        <div className="categories" key={i}>
          <div className="title">Community</div>
          <div className="group-links">
            <a href="#" className="link">
              Community
            </a>
            <a href="#" className="link">
              General
            </a>
            <a href="#" className="link">
              Activities
            </a>
            <a href="#" className="link">
              Groups
            </a>
            <a href="#" className="link">
              Local News
            </a>
            <a href="#" className="link">
              Childcare
            </a>
            <a href="#" className="link">
              Lost & Found
            </a>
            <a href="#" className="link">
              Classes
            </a>
            <a href="#" className="link">
              Musicians
            </a>
            <a href="#" className="link">
              Events
            </a>
            <a href="#" className="link">
              Pets
            </a>
          </div>
        </div>
      );
    });
  };

  loopTags = () => {
    let testTags = ["a", "b", "c", "d", "e", "f", "g"];
    return testTags.map((item, i) => {
      return (
        <div key={i} className="tag">
          Apple Macbook
        </div>
      );
    });
  };
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere :)
          </h1>
          <section className={"links"}>{this.loopCategories()}</section>
          <section className={"trending"}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" /> TRENDING NOW
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
