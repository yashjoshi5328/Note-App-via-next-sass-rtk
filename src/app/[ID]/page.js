"use client"

import Link from "next/link";
import './styles/editPage.scss';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editNote } from "../redux/slice";
import { useRouter } from "next/navigation";

const EditPage = ({params}) => {
    const id=params.ID;
    const dispatch=useDispatch();
    const router=useRouter();

    //extract all notes
    const notes=useSelector((data)=>data.notes);

    let text=""; 

    //search specific note
    notes.forEach((note)=>{
        if(note.id===id){
            text=note.note;
        }
    });

    const [note,setNote]= useState(text);

    const handleUpdate=(id)=>{
        dispatch(editNote({id,note}));
        router.push('/');
    }
    return (
        <>
            <Link href="/">
            <span className="material-symbols-outlined">
                arrow_back
            </span>
            </Link>
            <div className="edit">
                <input
                    type="text"
                    value={note}
                    onChange={(e)=>setNote(e.target.value)}
                />
                <button
                    onClick={()=>handleUpdate(id)}
                >
                    Update
                </button>
            </div>
        </>
    )
}

export default EditPage;
