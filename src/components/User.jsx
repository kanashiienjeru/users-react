import React from 'react'

const User = ({id, avatar, first_name, last_name, email, isInvited, toggleInvitation}) => {

    return ( 
        <li className="usersItem">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="information">
          <p>{first_name} {last_name}</p>
          <p className="mail-block">
            <img style={{width:"16px"}} src="https://cdn.icon-icons.com/icons2/520/PNG/512/Mail_icon-icons.com_52015.png" alt="" />
            {email}
          </p>
        </div>
        <button>
          <img onClick={() => toggleInvitation({ id, first_name, last_name })} src={ isInvited ? 'https://cdn-icons-png.flaticon.com/512/4225/4225683.png' : "https://cdn-icons-png.flaticon.com/512/2549/2549959.png"} alt="" />
        </button>
      </li>
    )
}

export default User

// plus "https://cdn-icons-png.flaticon.com/512/2549/2549959.png"
// galochka 'https://cdn-icons-png.flaticon.com/512/4225/4225683.png'
