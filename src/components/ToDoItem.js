import React from 'react'
import "./ToDoItem.css"

import Checkbox from '@material-ui/core/Checkbox'

import { useDispatch } from "react-redux";
import {setCheck} from "../features/todoSlice";


function ToDoItem({name,id,done}) {

    const dispatch = useDispatch()

    const handleCheck = () => {

        dispatch(setCheck(id))

    }

    return (
        <div className={"todoitem" }>

        <Checkbox 
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox"}}
            
        />

        <p className={done && 'todoitem--done'}>{name}</p>
            
        </div>
    )
}

export default ToDoItem
