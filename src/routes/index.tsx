import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <Link to="/a">a</Link>
      <br />
      <Link to="/b">b</Link>
    </div>
  ),
});
