import React from 'react';
import './check-list-item.sass';

const CheckListItem = () => {
  return (
    <div className="checkItem">
      <label>
        <input type="checkbox"/>
        Действие 1
      </label>
    </div>
  );
};

export default CheckListItem;