import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import PageRouter from "./routes";
import "./App.css";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={PageRouter} />
    </Suspense>
  );
}
