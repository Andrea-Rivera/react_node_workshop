/*----------- Prerequisite Code -----------*/
/*  Day 3 & 4, Import statement for React, component */
import React, { Component } from "react";
/*  Day 3 & 4, End of Import statement for React, component */

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  /*  Day 3 & 4 
    1.	Configure Get method in React app
    2.	Configure Post method in the React App. 

  /*  Day 3 & 4, 3 Make a "Get Api" call to display hardcoded text, defined in the node app.*/
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/worldpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Day 2 Add a text box and submit button. */}

        <div>
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <label className="label">
              <strong>Post to Server:</strong>
            </label>
            <input
              type="text"
              /*Day 3 & 4, Modified code to make a Post Api call to post the text from Textfield.*/
              value={this.state.post}
              onChange={(e) => this.setState({ post: e.target.value })}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
          <p>{this.state.responseToPost}</p>
        </div>
      </div>
    );
  }
}

export default App;
/*------- End of Prerequisite Code -------*/
