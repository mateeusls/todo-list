import { ButtonIcon } from "../button-icon";
import { Card } from "../card";
import { InputCheckbox } from "../input-checkbox";
import { Text } from "../text";
import TrashIcon from "../../assets/icons/trash.svg?react";
import PencilIcon from "../../assets/icons/pencil.svg?react";
import XIcon from "../../assets/icons/x.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";
import React from "react";
import { InputText } from "../input-text";
import { TaskState, type Task } from "../../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task.state === TaskState.Creating
  );
  const [taskTitle, setTaskTitle] = React.useState(task.title || "");
  const { updateTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox value={task?.concluded?.toString()} />
          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            onChange={handleChangeTaskTitle}
            value={taskTitle}
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleCancelEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
