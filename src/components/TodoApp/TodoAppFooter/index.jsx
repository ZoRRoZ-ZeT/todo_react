import React from 'react';
import clsx from 'clsx';
import STATUSES from '../../../constants/statuses';

import FilterButton from './FilterButton.jsx';

class TodoAppFooter extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleFilterChange(value) {
    this.props.onChangeFilter(value);
    window.history.pushState('', '', `/${value.toLowerCase()}`);
  }

  handleClearClick(event) {
    this.props.onClear();
  }

  render() {
    const count = this.props.tasks.length;
    const checkedCount = this.props.tasks.filter(
      (task) => task.isChecked
    ).length;

    return count > 0 ? (
      <div className="footer" id="footer">
        <span className="footer__count" id="count">
          {count - checkedCount} items
        </span>
        <div className="filters">
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={STATUSES.ALL}
            name="All"
            isActive={
              window.location.pathname !== '/active' &&
              window.location.pathname !== '/completed'
            }
          />
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={STATUSES.ACTIVE}
            name="Active"
            isActive={window.location.pathname === '/active'}
          />
          <FilterButton
            onFilterChange={this.handleFilterChange}
            filter={STATUSES.COMPLETED}
            name="Completed"
            isActive={window.location.pathname === '/completed'}
          />
        </div>
        <span
          className={clsx({
            footer__clear: true,
            hidden: checkedCount === 0,
          })}
          onClick={this.handleClearClick}
        >
          Clear completed
        </span>
      </div>
    ) : null;
  }
}

export default TodoAppFooter;
