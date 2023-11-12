import { React, useState } from "react";

const EventPractice = () => {

    const [form, setForm] = useState({
        username: '',
        message: ''
    })

    const {username, message} = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    const onClick = (e) => {
        alert(`${username} : ${message}`);
        setForm({
            username: '',
            message: ''
        })
    }

    const onKeyDown = (e) => {
        console.log(e.key)
        if(e.key === 'Enter') {
            onClick();
        }
    }
    
    return (
        <>
            <div>
                사용자명 : <input type='text' name="username" value={username} onChange={onChange} />
            </div>
            <div>
                <input type="text" name="message" value={message} onChange={onChange} onKeyDown={onKeyDown}/>
            </div>
            <button onClick={onClick}>확인</button>
        </>
    )
}

export default EventPractice;