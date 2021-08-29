import { useState } from "react";
import SearchBar from "./SearchBar";



const PeopleList = ({allScholars, setAllScholars}) => {
     const [searchTerm, setSearchTerm] = useState("");
    
     // try turn into a backend route
      const searchBar = allScholars.filter(
    (person) =>
      person.name.toLocaleLowerCase().includes(searchTerm) ||
      person.notes?.toLocaleLowerCase().includes(searchTerm)
  );
     const renderHTMLMap = () => {
    return searchBar.map((person,index) => {
       
      return (
          
        <div key={person.scholar_id}>
          <li
            className="List"
            style={{ listStyle: "none" }}
            
          >
            <div className="List-header">
              <img
                className="List-img"
                src={person.image_url}
                alt={person.name}
              />
              <h2>{person.name}</h2>
            </div>
            <p>{person.pod} Pod</p>
            <p className="List-note">{person.notes}</p>
          </li>
        </div>
      );
    });
  };
     return (
          <>
      <SearchBar
        allScholars={allScholars}
        setAllScholars={setAllScholars}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ul className="mainUL">{renderHTMLMap()}</ul>
    </>
    )
}

export default PeopleList
