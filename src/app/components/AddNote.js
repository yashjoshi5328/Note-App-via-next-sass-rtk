import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNote } from "../redux/slice";

function AddNote() {
    const [note,setNote]=useState("");
    const dispatch=useDispatch();
    
    const handleAdd=()=>{
        dispatch(addNote(note));
        setNote("");
    }
    return (
        <div className="add-note">
            <input
                type="text"
                placeholder="Enter Note here..."
                value={note}
                onChange={(e)=>setNote(e.target.value)}
            />
            <button
                onClick={handleAdd}
            >
                ADD
            </button>
        </div>
    )
}

export default AddNote
