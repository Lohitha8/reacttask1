import React from 'react';
import './App.css';
import ListItems from "./components/list-items";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      CurrentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      CurrentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(item) {
    console.log(item);
    const items = this.state.items;
    const newItems = items.filter(x => x.key !== item);
    this.setState({
      items: newItems
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.CurrentItem;
    if (newItem.text != "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        CurrentItem: {
          text: '',
          key: ''

        }
      })
    }

  }

  render() {
    return (
      <div> <h2 className="header-todo">TO-DO-LIST</h2>
      <div className="App"> 
            
        <header>         
          <form id="to-do-list" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
              value={this.state.CurrentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
          <ListItems id='list' items={this.state.items} onDelete={this.deleteItem} />
        </header>
      </div>
      </div>

    );
  }
}

export default App;
