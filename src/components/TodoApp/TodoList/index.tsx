import React, { useEffect, useMemo, useState } from 'react';
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
import { reorderTaskAction, updateTaskAction } from '@store/actions/tasks';
import './index.scss';
import { ApplicationState } from '@store/index';

interface IProps {
  tasks: Task[];
  updateTask: typeof updateTaskAction.request;
  reorderTask: typeof reorderTaskAction.request;
  filterPredicate: (item: Task) => boolean;
}

const TodoList = React.memo(function TodoList(props: IProps) {
  const [localTasks, setTasks] = useState(props.tasks);

  const filteredTasks = useMemo(
    () =>
      props.filterPredicate
        ? localTasks.filter(props.filterPredicate)
        : localTasks,
    [localTasks, props.filterPredicate]
  );

  useEffect(() => {
    setTasks(props.tasks);
  }, [props.tasks]);

  const onDragEnd = (result: DropResult) => {
    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const distIndex = result.destination.index;
    const sourceIndex = result.source.index;

    const originalSource = props.tasks.indexOf(filteredTasks[sourceIndex]);
    const originalDestination = props.tasks.indexOf(filteredTasks[distIndex]);

    const newList = [...localTasks];
    const [removed] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, removed);
    setTasks(newList);

    props.reorderTask({
      draggedIndex: originalSource,
      droppedIndex: originalDestination,
      onFailure: (oldTask) => {
        setTasks(
          [
            ...localTasks.map((task) =>
              task.id === oldTask.id ? oldTask : task
            ),
          ].sort((a, b) => a.sort - b.sort)
        );
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
});

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.tasks.list.slice().sort((a, b) => a.sort - b.sort),
});

export default connect(mapStateToProps, {
  updateTask: updateTaskAction.request,
  reorderTask: reorderTaskAction.request,
})(TodoList);
