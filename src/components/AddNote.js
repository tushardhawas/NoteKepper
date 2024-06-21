import { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';

const AddNote = ({handleAddNote})=> {
    const [noteText, setNotesText] =useState('');
    const characterLimit =200;
    
    const handleChange =(event) =>{
        if(characterLimit-event.target.value.length>=0){
    setNotesText(event.target.value);}
    };
    const handleSaveClick = () =>{
        if(noteText.trim().length>0){
        handleAddNote(noteText);
        setNotesText('');
        }
    };
return(<div className ='note new' >
    <textarea 
    rows='18'
    cols='5'
    placeholder="Add a note....."
    value={noteText}
    onChange={handleChange}>

    </textarea>
    <div className="note-footer">
        <small>{characterLimit-noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Add</button>
    </div>
</div>);
};
export default AddNote;