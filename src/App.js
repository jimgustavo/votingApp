import React, { Component } from "react";
import "./App.css";

const list = [
  {
    id: 1,
    name: "John Lennon",
    votes: 0
  },
  {
    id: 2,
    name: "Paul McCartney",
    votes: 0
  },
  {
    id: 3,
    name: "George Harrison",
    votes: 0
  },
  {
    id: 4,
    name: "Ringo Starr",
    votes: 0
  }
];

class App extends Component {
  state = {
    members: []
  };
  componentDidMount() {
    this.setState({ members: list });
  }
  //handleEvent = e => console.log("button clicked for " + e);
  handleEvent = memberId => {
    const updatedList = this.state.members.map(member => {
      if (member.id === memberId) {
        return Object.assign({}, member, {
          votes: member.votes + 1
        });
      } else {
        return member;
      }
    });
    this.setState({
      members: updatedList
    });
  };
  render() {
    //return <Beatle name="John Lennon" />;
    //const member = list[0];
    //return <Beatle name={member.name} />;
    return this.state.members.map(member => (
      <Beatle
        key={member.id}
        id={member.id}
        name={member.name}
        votes={member.votes}
        onVote={this.handleEvent}
      />
    ));
  }
}

class Beatle extends Component {
  //handleClick = e => console.log("button clicked for" + e.target);
  handleClick = () => this.props.onVote(this.props.id);
  render() {
    return (
      <div className="App">
        {this.props.name}
        <button onClick={this.handleClick}>+</button>
        {this.props.votes}
      </div>
    );
  }
}

export default App;
