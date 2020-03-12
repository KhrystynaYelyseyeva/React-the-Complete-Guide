import React, {Component} from 'react';
import './App.css';
import Radium from "radium";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";


class App extends Component {
    state = {
        username: "Marta",
        message: ''
    }

    usernameHandler = (e) => {
        this.setState({username: e.target.value})
    }

    changeHandler = (e) => {
        this.setState({message: e.target.value});
    }

    removeChar = (elementsIndex) => {
        const m = this.state.message.split('');
        m.splice(elementsIndex, 1);
        const mToS=m.join('');
        this.setState({message: mToS});
    }

    render() {
        const charList = this.state.message.split('').map((ch, index) =>
            <CharComponent
                click={()=>this.removeChar(index)}
                character={ch}
                key={index}/>)
        return (
            <div className="App">
                <h3>Task 1</h3>
                <UserInput method={this.usernameHandler}
                           userName={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username="Kristi"/>
                <h3>Task 2</h3>
                <input type="text" onChange={this.changeHandler} value={this.state.message}/>
                <p>{this.state.message}</p>
                <ValidationComponent length={this.state.message.length}/>
                {charList}
            </div>
        );
    }
}

export default Radium(App);
