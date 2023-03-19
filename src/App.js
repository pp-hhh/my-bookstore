//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./View/HomeView";
import BookView from "./View/BookView";
import CartView from "./View/CartView";
import UserView from "./View/UserView";
import OrderView from "./View/OrderView";

function App() {
  const user_id = 1;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/Cart" element={<CartView />} />
        <Route path="/Order" element={<OrderView />} />
        <Route path="/Profile" element={<UserView id={user_id} />} />
        <Route path="/Book/:id" element={<BookView />} />
      </Routes>
    </Router>
  );
}

export default App;
