// import import React from 'react'
import {
	withRouter
} from 'react-router-dom';
import React, { PureComponent } from 'react'
import { Route} from "react-router-dom";
import DirectoryItems from './DirectoryItems';
const SubmitButton = () => (
  <Route render={({ history}) => (
    <button
      className="d-form-submit"
      type='submit'
      onClick={() => { history.push('/') }}
    >
      &#8678;
    </button>
  )} />
)

const BackButton = () => (
    <Route render={({ history}) => (
      <button
        className="d-back-button"
        type='button'
        onClick={() => { history.push('/') }}
      >
        &#8678;
      </button>
    )} />
)
export default class Add extends PureComponent {
  constructor(props){
    super(props)
    if (localStorage.getItem("data") === null) {
      window.localStorage.setItem('data', JSON.stringify([]));
      console.log("setting emplty");
    }
    else{
      console.log("already there");
      console.log(JSON.parse(window.localStorage.getItem('data')));
      
    }
    this.state = {
      name: "",
      number: "",
      items : JSON.parse(window.localStorage.getItem('data'))
    }
    // console.log("$$>>>");
    // console.log(this.state.items);
    // console.log(window.localStorage.key(0));
    // console.log(JSON.parse(window.localStorage.getItem('data')));
    // console.log("$$<<<");
  }

  addContact = (e) => {
    e.preventDefault();
    var newItem = {
      name: this.state.name,
      number: this.state.number,
      key: Date.now()
    };

    
    this.setState((prevState)=>{
      return{
        items: prevState.items.concat(newItem)
      }
    });

    this.setState((prevState)=>{
      window.localStorage.setItem('data', JSON.stringify(prevState.items));
      this.props.history.push('/');
    });
  }
  
  
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleNumberChange = (event) =>{
    this.setState({
      number: event.target.value
    })
  }
  render() {
    return (
      <div className="d-add-main">
        <BackButton/>
        <br/>
        <form className="d-add-form" onSubmit={this.addContact}>
        <label htmlFor="name">Name:</label>
        <br/>
        <input type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br/>

        <label htmlFor="number">Number:</label>
        <br/>
        <input type="text"
        value={this.state.number}
        onChange={this.handleNumberChange}
        />
        <br/>
        <h5>Subscriber to be added:</h5>
        <div>Name: {this.state.name}</div>
        <div>Number: {this.state.number}</div>
        <button className="d-form-submit" type="submit">Add</button>
        </form>
        {/* <DirectoryItems entries={this.state.items}/> */}
      </div>
    )
  }
}

//  withRouter(Add);
