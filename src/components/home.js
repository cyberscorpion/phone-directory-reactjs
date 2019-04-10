import React, { PureComponent } from 'react'
import { Route} from "react-router-dom";
import DirectoryItems from './DirectoryItems';

const AddButton = () => (
    <Route render={({ history}) => (
      <button className="d-add-button"
        type='button'
        onClick={() => { history.push('/add') }}
      >
        +
      </button>
    )} />
)

export default class Home extends PureComponent {
    constructor(props){
        super(props)
        if (localStorage.getItem("data") === null) {
            window.localStorage.setItem('data', JSON.stringify([]));
          }
        this.state = {
          items : JSON.parse(window.localStorage.getItem('data'))
        }
      }


      deleteEntry= (key) =>{
          var filteredItems = this.state.items.filter(function(item){
              return(item.key !== key)
          });
        console.log(filteredItems);
          this.setState({
              items: filteredItems
          })
          this.setState((prevState)=>{
            window.localStorage.setItem('data', JSON.stringify(prevState.items));
            return{}
          });

          console.log(this.items);
      }

  render() {
    return (
      <div>
        <AddButton/>
        <DirectoryItems entries={this.state.items}
                        delete={this.deleteEntry}
        />
      </div>
    )
  }
}
