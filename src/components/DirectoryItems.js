import React, { PureComponent } from 'react'

export default class DirectoryItems extends PureComponent {
  constructor(props){
    super(props)

    this.createRow = this.createRow.bind(this);
  }
  createRow(item){
      return(
          <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td><button className="d-button-delete" onClick={() => this.delete(item.key)}>Delete</button></td>
          </tr>
      )
  }

  delete(key){
    this.props.delete(key);
  }
    render() {
        var directoryEntries = this.props.entries;
        // console.log(directoryEntries);
        var directoryItems = directoryEntries.map(this.createRow);
    
    if(directoryEntries.length === 0){
        return (<div></div>)
    }

    return (
      <div>
          {/* {(directoryEntries.length === 0) ? 'yes' :'no'} */}
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th></th>

            </tr>
            </thead>
            <tbody>
            {directoryItems}
            </tbody>
        </table>
      </div>
    )
  }
}
