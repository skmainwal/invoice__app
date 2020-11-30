import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Home from "./Home";
// import Login from "./login/Login";

function App() {
  // const State = useSelector((state) => state);
  // const user = State.user;
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
