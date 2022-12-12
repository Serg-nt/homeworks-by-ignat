import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name ? '' : s.error // need to fix with (?:)

    return (
        <div>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                onEnter={addUser}
                className={inputClass}
                error={error}
            />
            <span className={name ? '' : s.spanError}>{error}</span>
            <SuperButton disabled={!name} onClick={addUser}>add</SuperButton>
            <span className={s.spanTotal}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
