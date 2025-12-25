import { Button } from "../button";
import PlusIcon from "../../assets/icons/plus.svg?react";
import { TaskItem } from "./task-item";
import useTasks from "../../hooks/use-tasks";
import { useTask } from "../../hooks/use-task";
import { TaskState } from "../../models/task";

export function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={prepareTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
          Nova Tarefa
        </Button>
      </section>

      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
