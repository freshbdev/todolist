import { ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
import './Todo.css';

const Todo = ({arr}) => {

    return (
        <ListItem>
            <ListItemText primary={arr.item.todo} secondary="Click the Trash icon to remove the text" />
            <DeleteIcon fontSize="large" style={{opacity:0.7, cursor: 'pointer'}} onClick={() => {deleteDoc(doc(db,'todos',arr.id))}} />
        </ListItem>
    )
};

export default Todo;