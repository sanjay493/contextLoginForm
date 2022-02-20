import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import { userContext } from "./context/userContext";
function App() {
  return (
    <>
      <div className="ui container">
        <userContext.Provider>
          <Navbar />
          <Auth />
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
