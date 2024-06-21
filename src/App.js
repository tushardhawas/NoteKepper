import NotesList from "./components/NotesList";
import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = ()=>{

  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:"this is my first note",
      date:"15/05/2023",
    },
    {
      id:nanoid(),
      text:"this is my second note",
      date:"11/05/2023",
    },
    {
      id:nanoid(),
      text:"this is my third note",
      date:"11/05/2023",
    },
    
    
]);


const [searchtext, setSearchtext] = useState('');
const [darkMode, setDarkMode] = useState(false);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
  console.log('Loading data from local storage:', savedNotes);
  
  if (savedNotes) {
    setNotes(savedNotes);
    setLoading(false);
  }
  else{setLoading(false);}
}, []);

useEffect(() => {
  console.log('Saving data to local storage:', notes);
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
}, [notes]);
  


const addNote = (text)=>{
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
}
const newNotes = [...notes, newNote];
setNotes(newNotes);

};

const deleteNote =(id)=>{

  const newNotes=  notes.filter((note) => note.id !=id);
    setNotes(newNotes);
}


return (
<div className={`${darkMode &&'dark-mode '}`}>
<div className="container">
 <Header handleToogleDarkMode={setDarkMode}/>
  <Search handleSearchNote={setSearchtext}/>
  
  {loading ? (
        <div className="load">Please wait....</div>
      ) : (
  <NotesList 
  notes={notes.filter((note)=>
    note.text.toLowerCase().includes(searchtext.toLowerCase()) 
    )}
   handleAddNote={addNote} 
   handleDeleteNote={deleteNote}/>)}
</div> </div>);
};

export default App;