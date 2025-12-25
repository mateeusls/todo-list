import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="my-5 md:my-10 text-center grid gap-2">
      <nav className="flex items-center justify-center gap-4">
        <NavLink to="/">Tarefas</NavLink>
        <NavLink to="/componentes">Componentes</NavLink>
      </nav>
    </footer>
  );
}
