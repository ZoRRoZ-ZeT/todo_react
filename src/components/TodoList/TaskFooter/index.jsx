import React from 'react';
import STATUSES from '../../../constants/statuses';

class TaskFooter extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleClick(event) {
    this.props.onChangeFilter(event.target.value);
  }

  handleClearClick(event) {
    this.props.onClear();
  }

  render() {
    const count = this.props.tasks.length;
    if (count > 0) {
      const checkedCount = this.props.tasks.filter(
        (task) => task.isChecked
      ).length;

      const clearClassNames = `footer__clear ${
        checkedCount === 0 ? 'hidden' : ''
      }`;

      return (
        <div className="footer" id="footer">
          <span className="footer__count" id="count">
            {count - checkedCount} items
          </span>
          <div className="filters">
            <button
              className="filters__button"
              value={STATUSES.ALL}
              onClick={this.handleClick}
            >
              All
            </button>
            <button
              className="filters__button"
              value={STATUSES.ACTIVE}
              onClick={this.handleClick}
            >
              Active
            </button>
            <button
              className="filters__button"
              value={STATUSES.COMPLETED}
              onClick={this.handleClick}
            >
              Completed
            </button>
          </div>
          <span className={clearClassNames} onClick={this.handleClearClick}>
            Clear completed
          </span>
        </div>
      );
    }
    return null;
  }
}

export default TaskFooter;
