import React from 'react';
import {Route, Routes} from "react-router";

import {MainPage} from "./pages/MainPage";
import {EventsPage} from "./pages/EventsPage";
import {OrganizationsPage} from "./pages/OrganizationsPage";
import {Layout} from "./components/Layout";
import {Employees} from "./pages/Employees";
import {Notes} from "./pages/Notes";
import {Statistics} from "./pages/Statistics";
import {Fertilizer} from "./pages/Fertilizer";
import {Weather} from "./pages/Weather";
import {UserPage} from "./pages/UserPage";

import styles from "./App.module.css";

function App() {

  return (
      <div className={styles.container}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path={"user"} element={<UserPage />} />
              <Route path={"events"} element={<EventsPage />} />
              <Route path={"employees"} element={<Employees />} />
              <Route path={"notes"} element={<Notes />} />
              <Route path={"statistics"} element={<Statistics />} />
              <Route path={"fertilizer"} element={<Fertilizer />} />
              <Route path={"weather"} element={<Weather />} />
              <Route path={"organizations"} element={<OrganizationsPage />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
