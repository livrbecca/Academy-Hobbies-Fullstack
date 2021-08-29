import Header from "./components/Header";
import PeopleList from "./components/PeopleList";
import AddToList from "./components/AddToList";
import FilterButton from "./components/FilterButton";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

    const [allScholars, setAllScholars] = useState([]);
      
    const fetchScholars = async () => {
    try {
      const response = await fetch("http://localhost:5000/scholars");
      const jsonData = await response.json();
      setAllScholars(jsonData);
      console.log(allScholars);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchScholars();
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <Header />
      <FilterButton
      fetchScholars={fetchScholars}
        allScholars={allScholars}
        setAllScholars={setAllScholars}
      />
      <div className="flex-container">
        <div className="flex-child allScholars">
          <PeopleList
            allScholars={allScholars}
            setAllScholars={setAllScholars}
          />
        </div>
        <div className="flex-child add">
          <AddToList
            allScholars={allScholars}
            setAllScholars={setAllScholars}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
