import { useState } from "react";

const AddToList = ({
allScholars,
setAllScholars,
}) => {

const [name, setName] = useState("");
const [image_url, setImage_url] = useState("");
const [pod, setPod] = useState("");
const [notes, setNotes] = useState("");

const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
        const body = { name, image_url, pod, notes };
        const response = await fetch("http://localhost:5000/scholars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    window.location.href = "/";
    }catch(err){
        console.log(err)
    }

}

    return (
<div className="AddToList">
<h5>Add your own:</h5>
<form onSubmit={(e) => onSubmitForm(e)}> 
<input
    autocomplete="off"
    type="text"
    placeholder="name"
    className="AddToList-input"
    value={name}
    onChange={(e) => setName(e.target.value)}
    name="name"
    />
    <input
    autocomplete="off"
    type="text"
    placeholder="image URL"
    className="AddToList-input"
    value={image_url}
    onChange={(e) => setImage_url(e.target.value)}
    name="image_url"
    />
    <input
    autocomplete="off"
    type="text"
    placeholder="pod"
    className="AddToList-input"
    value={pod}
    onChange={(e) => setPod(e.target.value)}
    name="pod"
    />
    <textarea
    placeholder="notes (optional)"
    className="AddToList-input"
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    name="notes"
    />
    <button className="AddToList-btn">
    Add To List
    </button>
    </form>
    </div>
    )
}

export default AddToList
