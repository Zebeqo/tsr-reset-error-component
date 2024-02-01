import { createFileRoute, Link } from "@tanstack/react-router";
import { router } from "../main.tsx";

let test = 0;

export const Route = createFileRoute("/a")({
  loader: () => {
    if (test === 1) {
      test++;
      throw new Error();
    }
  },
  component: () => (
    <>
      <div>Hello /a!</div>
      <button
        onClick={() => {
          test++;
          void router.load();
        }}
      >
        trigger error component
      </button>
    </>
  ),
  errorComponent: () => (
    <>
      <button
        onClick={() => {
          console.log(test);
          void router.load();
        }}
      >
        router.load()
      </button>
      <br />
      <Link to="/a">a</Link>
      <br />
      <Link to="/b">b</Link>
    </>
  ),
});
