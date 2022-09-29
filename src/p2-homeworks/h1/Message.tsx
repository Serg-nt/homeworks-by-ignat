import React from 'react'
import classes from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageProps) {
    return (
        <div className={classes.message}>
            <img src={props.avatar}/>
            <div className={classes.block}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
