import Routes from "./components/Routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4 ">
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
