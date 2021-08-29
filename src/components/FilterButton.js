import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const FilterButton = ({fetchScholars, allScholars,setAllScholars,}) => {

    const sortNameA_Z = () => {
    const AZnames = [...allScholars].sort((a, b) => a.name.localeCompare(b.name)
    )
    setAllScholars(AZnames)
    }

    const fetchPodColor = async (podcolor) => {
        try{
            const response = await fetch(`http://localhost:5000/scholars/${podcolor}`)
            const jsonData = await response.json()
            setAllScholars(jsonData)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <>
      <DropdownButton
        className="mainButton"
        as={ButtonGroup}
        key={"down"}
        id={`dropdown-button-drop-${"down"}`}
        drop={"down"}
        title="Filter Scholars"
      >
        <Dropdown.Item onClick={() => fetchScholars()} className="filter">
          All
        </Dropdown.Item>
         <Dropdown.Item onClick={() => fetchPodColor("Green")} className="filter">
          Green Pod
        </Dropdown.Item>
        <Dropdown.Item onClick={() => fetchPodColor("Blue")} className="filter">
          Blue Pod
        </Dropdown.Item>
        <Dropdown.Item onClick={() => sortNameA_Z()} className="filter">
          Name A-Z
        </Dropdown.Item> 
      </DropdownButton>
    </>
    )
}

export default FilterButton
