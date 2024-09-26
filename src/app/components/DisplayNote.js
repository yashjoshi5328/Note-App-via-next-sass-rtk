import { useDispatch, useSelector } from "react-redux"
import { removeNote } from "../redux/slice";
import { useRouter } from "next/navigation";

const DisplayNote = () => {
    const notes=useSelector((data)=>data.notes);
    const dispatch=useDispatch();
    const router = useRouter();

    const handleEdit=(id)=>{
        router.push(`/${id}`);
    }

    const handleDelete=(id)=>{
        dispatch(removeNote(id));
    }
  return (
    <div className="display-note">
      {
        notes.map((note,index)=>{
            return (
                <div key={index}>
                    <p>{note.note}</p>
                    <div className="control">
                        <button
                            className="edit"
                            onClick={()=>handleEdit(note.id)}
                        >
                            Edit
                        </button>
                        <button 
                            className='delete'
                            onClick={()=>handleDelete(note.id)}
                        >
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default DisplayNote
