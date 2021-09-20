/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from 'react';

class ListItem extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="task-list__item">
        <div className="item">
          <input type="checkbox" className="item__toggle" />
          <label className="item__label">{this.props.taskData.value}</label>
          <button className="btn btn-empty destroy item__button">×</button>
        </div>
      </li>
    );
  }
}

export default ListItem;
