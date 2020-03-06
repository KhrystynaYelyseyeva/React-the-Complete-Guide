import React, {Component} from 'react';
import './App.css';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
    state = {
        username: "Marta"
    }

    usernameHandler=(e)=>{
      this.setState({username:e.target.value})
    }

    render() {
        return (
            <div className="App">
                <h3>Task1</h3>
                <UserInput method={this.usernameHandler}
                           userName={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username="Kristi"/>
            </div>
        );
    }
}

export default App;
