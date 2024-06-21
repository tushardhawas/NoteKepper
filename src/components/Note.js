import{ MdDeleteSweep } from 'react-icons/md'
const Note = ({id, text,date,handleDeleteNote})=>{
return(<div className="note">

<span className='text'>{text} </span> 
<div className="note-footer">
    <small>{date} </small>
    <MdDeleteSweep onClick={()=> handleDeleteNote(id)}
     className='delete-icon'
      size='1.3em'/>
</div>
</div>)};


export default Note;