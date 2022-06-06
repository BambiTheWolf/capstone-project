import "./App.css";
import "react-notifications-component/dist/theme.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";

import { configureStore, persistor } from "./store";

import Home from "./components/Home";
import GameList from "./components/GamesList";
import GameInfo from "./components/GameInfo/GameInfo";
import Navbar from "./components/Navbar";
import Deals from "./components/BestDeals/Deals";
import FavList from "./components/Favourite/FavList";
import Login from "./components/Profile/Login";
import Signup from "./components/Profile/SignUp";

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ReactNotifications />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<GameList />} />
            <Route path="/game/:gameID" element={<GameInfo />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/favorite" element={<FavList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
