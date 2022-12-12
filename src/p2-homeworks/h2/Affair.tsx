import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any ++
    deleteAffairCallback: (_id: number) => void // need to fix any ++
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix ++

    return (
        <div>
            <span className={classes.spanMargin}>{props.affair.name}</span>
            <span>{props.affair.priority}</span>
            <SuperButton onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
