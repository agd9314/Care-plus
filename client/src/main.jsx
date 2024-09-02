import React from "react";
import ReactDOM from "react-dom/client";
import App, { MainChildren } from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import PatientBook, { Home } from "./components/PatientBook.jsx";
import { MyBookings } from "./components/Mybooking.jsx";
import { AllDoctors } from "./components/AllDoctor.jsx";
import Register from './components/Register.jsx'
import RegisterDoctor from './components/RegisterDoctor.jsx'
import LoginDoctor from "./components/LoginDoctor.jsx";
import DoctorBook, { Mypatients } from "./components/DoctorBook.jsx";
import { ScheduledSession } from "./components/ScheduleSession.jsx";
import { PatientBookForm } from "./components/PatientBookForm.jsx";

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
                    path: "/patien-book/AllDoctors",
                    element: <AllDoctors/>
                  },
                  {
                    path: "/patien-book/MyBookings",
                    element: <MyBookings/>
                  },
                  {
                    path: "/patien-book/patientbookform/:doctorId",
                    element: <PatientBookForm />,
                  }
                ],
              },
              {
                path: "/doctor-book",
                element: <DoctorBook />,
                children: [
                  {
                    index: true,
                    element: <Home />,
                  },
                  {
                    path: "/doctor-book/Mypatients",
                    element: <Mypatients/>
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
          },
          {
            path: "/register-doctor",
            element: <RegisterDoctor />,
          },
          {
            path: "/login-doctor",
            element: <LoginDoctor />,
          }
        ])}
      />
    </main>
  </React.StrictMode>
);


