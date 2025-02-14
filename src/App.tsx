import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Browse from "./components/Browse/Browse";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
