import type { RouteRecord } from "vite-react-ssg";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RouteErrorBoundary from "./components/RouteErrorBoundary";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: App,
    entry: "src/App.tsx",
    ErrorBoundary: RouteErrorBoundary,
    children: [
      { index: true, Component: Home, entry: "src/pages/Home.tsx" },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];

export default routes;
