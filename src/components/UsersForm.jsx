import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, selectedUser, updateUser, setSelectedUser}) => {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")
    const [isShowPassword, setIsShowPassword] = useState(true)
    
    const viewPassword = ()=>{
        setIsShowPassword(!isShowPassword)
    }

    const submit = (e) => {
        e.preventDefault();
        const User = {
            email,
            password,
            first_name,
            last_name,
            birthday
        }
        if(selectedUser){
            updateUser(User)
        } else {
            addUser(User)
        }
        reset()
    }

    const reset = ()=>{
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
        setSelectedUser(null)
        setIsShowPassword(true)
    }

    useEffect(()=>{
        if(selectedUser){
            setFirstName(selectedUser.first_name)
            setLastName(selectedUser.last_name)
            setEmail(selectedUser.email)
            setPassword(selectedUser.password)
            setBirthday(selectedUser.birthday)
        }
    }, [selectedUser])

    return (
        <div className='backgroundForm'>
            <form className='userForm' onSubmit={submit}>
                <span className='form_title'>New user</span>
                <div className='name_input'>
                    <label htmlFor="first_name"><i className="fa-solid fa-user"></i></label>
                    <input 
                        type="text"
                        id="first_name"
                        placeholder='first name'
                        onChange={e => setFirstName(e.target.value)}
                        value={first_name}
                    />
                    <input
                        type="text"
                        id="last_name"
                        placeholder='last name'
                        onChange={e => setLastName(e.target.value)}
                        value={last_name}
                    />
                </div>
                <div className='email_input'>
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                    <input
                        type="email"
                        id='email'
                        placeholder='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='password_input'>
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i></label>
                    <input
                        type={`${isShowPassword ? "password" : "text"}`}
                        id='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <button onClick={viewPassword} className='showPassword_btn' type='button'>
                        <i className={`fa-solid fa-${isShowPassword ? "eye" : "eye-slash"}`}></i>
                    </button>
                </div>
                <div className='date_input'>
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i></label>
                    <input
                        type="date"
                        id='birthday'
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday}    
                    />
                        
                </div>
                <div className='btn_container'>
                    <button className='upload_btn'>upload</button>
                    {
                        selectedUser && (
                            <button onClick={reset}
                            type='button'
                            className='cancel_btn'>
                            cancel
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default UsersForm;