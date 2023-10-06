import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./components/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
