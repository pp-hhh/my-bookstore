import "./App.css";
import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import BasicRoute from "./Router";

function App() {
  // const user_id = 1;

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/Login" element={<LogView />}/>
  //       <Route path="/Register" element={<RegisterView />}/>
  //       <Route path="/Home" element={<HomeView />} />
  //       <Route path="/Cart" element={<CartView />} />
  //       <Route path="/Order" element={<OrderView />} />
  //       <Route path="/Profile" element={<UserView id={user_id} />} />
  //       <Route path="/Book/:id" element={<BookView />} />
  //     </Routes>
  //     <ToastContainer position='top-center'/>
  //   </Router>
  // );

    return <BasicRoute />
}

export default App;
