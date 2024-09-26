import { createSlice, nanoid } from "@reduxjs/toolkit";

//After refresh Slice value
const initialState={
    notes:[]
}

const noteSlice=createSlice({
    name:'noteSlice',
    initialState,
    reducers:{
        addNote:
            (state,action)=>{
                const note={
                    id:nanoid(),
                    note:action.payload
                }
                state.notes.push(note);
            },
        removeNote:
            (state,action)=>{
                const notes=state.
                        notes.filter((note)=>{
                            return note.id!==action.payload;
                        });
                state.notes=notes;
            },
        editNote:
            (state,action)=>{
                const notes=state.
                        notes.map((note)=>{
                            if(note.id===action.payload.id){
                                note.note=action.payload.note;
                            }
                            return note;
                        });
                state.notes=notes;
            }
    }
});

export const {addNote,removeNote,editNote}= noteSlice.actions;
export default noteSlice.reducer;