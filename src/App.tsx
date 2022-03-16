import { BrowserRouter, Route, Routes } from "react-router-dom";

import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">USERS</NavLink>
        <NavLink to="/todos">TODOS</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
