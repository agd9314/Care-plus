import React from "react";
import ReactDOM from "react-dom/client";
import App, { MainChildren } from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import PatientBook, { Home, ScheduledSession, Settings, AllDoctors, MyBookings} from "./components/PatientBook.jsx";
import Register from "./components/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <App />,
            children: [
              {
                index: true,
                element: <MainChildren />,
              },
              {
                path: "/patien-book",
                element: <PatientBook />,
                children: [
                  {
                    index: true,
                    element: <Home />,
                  },
                  {
                    path: "/patien-book/scheduledSession",
                    element: <ScheduledSession />,
                  },
                  {
                    path: "/patien-book/settings",
                    element: <Settings/>
                  },
                  {
                    path: "/patien-book/AllDoctors",
                    element: <AllDoctors/>
                  },
                  {
                    path: "/patien-book/MyBookings",
                    element: <MyBookings/>
                  },
                ],
              },
            ],
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          }
        ])}
      />
    </main>
  </React.StrictMode>
);
