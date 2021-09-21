import React from 'react';

class TaskFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer" id="footer">
        <span className="footer__count" id="count">
          0 items
        </span>
        <div className="filters">
          <button className="filters__button" id="allButton">
            All
          </button>
          <button className="filters__button" id="activeButton">
            Active
          </button>
          <button className="filters__button" id="completeButton">
            Completed
          </button>
        </div>
        <span className="footer__clear" id="clear">
          Clear completed
        </span>
      </div>
    );
  }
}

export default TaskFooter;
