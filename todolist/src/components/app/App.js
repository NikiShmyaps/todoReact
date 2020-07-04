import React, {Component} from 'react';
import AppHeader from '../appHeader/app-header';
import './app.sass';
import SearchPanel from '../searchPanel/search-panel';
import PostList from '../postList/post-list';
import PostAddForm from '../postAddForm/post-add-form';
import nextId from 'react-id-generator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Запись 1", id: 1, show: false}
      ],
      term: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),
        newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      show: false,
      id: nextId()
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  repeatToggle(arg, id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id),
        old = data[index],
        newItem = {...old, [arg]: !old[arg]},
        newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
        return {
          data: newArr
        }
    });
  }

  onShow(id) {
    this.repeatToggle('show', id)
  }

  onUpdateSearch(term) {
    this.setState({term})
  }
  render () {
    const {data, term} = this.state;
    const allPosts = data.length;
    const visiblePosts = this.searchPost(data, term);
    return (
      <>
        <AppHeader
          allPosts={allPosts}/>
        <div className="container">
          <PostAddForm
            onAdd={this.addItem}/>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostList 
            posts={visiblePosts}
            onDelete={this.deleteItem}
            onShow={this.onShow}/>
        </div>
      </>
    );
  }

  
}
