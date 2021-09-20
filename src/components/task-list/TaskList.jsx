import React from 'react';
import ListItem from './list-item/ListItem.jsx';

class TaskList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const listItems = this.props.tasks.map((task) => (
      <ListItem key={task.id} taskData={task} />
    ));
    return <ul className="task-list">{listItems}</ul>;
  }
}

export default TaskList;
