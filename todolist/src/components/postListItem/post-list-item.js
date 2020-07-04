import React, {Component} from 'react';
import CheckList from '../checkList/check-list';
import './post-list-item.sass';

export default class PostListItem extends Component {
   render() {
    const {label, onDelete, onShow, show} = this.props;
    let className = 'list-check';
    if (show) {
      className += ' show';
    }

    return (
      <div className="list">
        <li className="list-item">
          <span onClick={onShow}>{label}</span>
          <div>
            <button 
              className="list-item__button"
              type="button"
            >
              Изменить
            </button>
            <button 
              onClick={onDelete}
              className="list-item__button"
              type="button"
            >
              Удалить
            </button>
          </div>
        </li>
        <div className={className}>
          <CheckList/>
        </div>
      </div>
    )
  }
};