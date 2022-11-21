import React from 'react'
import {MessagePropsType} from "./HW1";
import classes from "./Message.module.css"

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt="avatar" />
            <div className={classes.messageBlock}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
