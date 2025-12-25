import { TasksList } from "../components/commons/tasks-list";
import { TasksSummary } from "../components/commons/tasks-summary";
import { Container } from "../components/container";

export function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <TasksList />
    </Container>
  );
}
