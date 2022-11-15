import React from 'react';
import imgUser from '../assets/userImg.png'
const UsersList = ({usersList, deleteUser, selectUser}) => {

    return (
        <ul>
            {usersList.map(user => (
                <li key={user.id}>
                    <div className='text_li'>
                        <p className='name'><i class="fa-solid fa-user"></i>{user.first_name} {user.last_name}</p>
                        <p className='email'><i class="fa-solid fa-at"></i>{user.email}</p>
                        <p className='birthday'><i className="fa-solid fa-cake-candles"></i>{user.birthday}</p>
                    </div>
                    <div className='btn_container'>
                        <img className='user_img' src={imgUser} alt="user Img" />
                        <button onClick={()=>deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                        <button onClick={()=>selectUser(user)}><i className="fa-solid fa-pen"></i></button>
                    </div>
                        
                </li>
            ))}
        </ul>
    );
};

export default UsersList;