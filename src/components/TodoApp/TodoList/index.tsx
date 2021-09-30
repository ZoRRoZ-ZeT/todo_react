import React from 'react';
import { connect } from 'react-redux';
import { Task } from '@type/todo.types';
import TodoItem from './TodoItem/index';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DropResult,
} from 'react-beautiful-dnd';
import { ApplicationState } from '@store/index';
import { Method } from '@type/index.types';
import { callApi } from '@apis/todos';
import { updateTask } from '@store/actions/tasks';

interface IProps {
  tasks: Task[];
  updateTask: (task: Task) => void;
  filtering: (item: Task) => boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IState {}

class TodoList extends React.Component<IProps, IState> {
  onDragEnd = async (result: DropResult) => {
    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const distIndex = result.destination.index;
    const sourceIndex = result.source.index;

    const filteredTasks = this.props.filtering
      ? this.props.tasks.filter(this.props.filtering)
      : this.props.tasks;
    const originalSource = this.props.tasks.indexOf(filteredTasks[sourceIndex]);
    const originalDestination = this.props.tasks.indexOf(
      filteredTasks[distIndex]
    );

    const leftNeighbor =
      distIndex > sourceIndex
        ? filteredTasks[result.destination.index].sort
        : originalDestination && this.props.tasks[originalDestination - 1].sort;

    const rightNeighbor =
      distIndex > sourceIndex
        ? (originalDestination - this.props.tasks.length + 1 !== 0 &&
            this.props.tasks[originalDestination + 1].sort) ||
          this.props.tasks[originalDestination].sort + 1
        : filteredTasks[result.destination.index].sort;

    const newAverageSort = (leftNeighbor + rightNeighbor) / 2;

    const oldValue = this.props.tasks[originalSource];
    try {
      this.props.updateTask({
        ...this.props.tasks[originalSource],
        sort: newAverageSort,
      });
      await callApi<Task>('', {
        method: Method.PUT,
        body: {
          ...this.props.tasks[originalSource],
          sort: newAverageSort,
        },
      });
    } catch (error) {
      this.props.updateTask(oldValue);
      console.log('Hmmm, something went wrong...');
    }
  };

  render() {
    const filteredTasks = this.props.filtering
      ? this.props.tasks.filter(this.props.filtering)
      : this.props.tasks;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId={'taskList'}>
          {(dropProvided: DroppableProvided) => (
            <ul
              className="task-list"
              ref={dropProvided.innerRef}
              {...dropProvided.droppableProps}
            >
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <li
                      className="task-list__item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem task={task} />
                    </li>
                  )}
                </Draggable>
              ))}
              {dropProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.list.sort((a, b) => a.sort - b.sort),
});

export default connect(mapStateToProps, { updateTask })(TodoList);
