import React, {Component} from 'react';
import './post-add-form.sass';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    if(this.state.text.length > 0) {
      this.props.onAdd(this.state.text);
      this.setState({
        text: ''
      })
    } else {
      
    }
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.onSubmit}>
        <input
          className="form__input"
          type="text"
          placeholder="Добавить запись"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button
          className="form__button"
          type="submit"
        >Добавить запись</button>
      </form>
    );  
  }
};