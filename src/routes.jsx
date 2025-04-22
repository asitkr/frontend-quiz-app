import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const QuizPage = lazy(() => import("./pages/QuizPage"));

const configRoutes = [
  { path: "/", element: <QuizPage /> }
];

const PageRouter = createBrowserRouter(configRoutes);

export default PageRouter;
