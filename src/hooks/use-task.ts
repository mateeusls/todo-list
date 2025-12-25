import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";


export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([...tasks, { 
      id: crypto.randomUUID(), // Or use Math.random().toString(36).substring(2, 9) for environments without crypto
      title: "", 
      state: TaskState.Creating 
    }]);
  }

  function updateTask(id: string, payload: {title: Task["title"]}) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...payload, state: TaskState.Created };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return {
    prepareTask,
    updateTask,
  };
}
