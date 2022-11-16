import React from 'react'
import {MessagePropsType} from "./HW1";
import classes from "./Message.module.css"

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <img src={props.avatar} alt="avatar" />
            <div className={classes.messageBlock}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.text}>{props.message}</p>
                <p className={classes.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
