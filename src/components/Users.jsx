import React from 'react'
import User from './User'

const Users = ({ items, toggleInvitation, invites, setSuccess}) => {
  const [searchValue, setSearchValue] = React.useState('')

  const onChangeInput = (event) => {
    setSearchValue(event.target.value)
  }
  return (
    <div>
      <div className="searchInput">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input type="text" placeholder='Поиск' value={searchValue} onChange={onChangeInput} />
      </div>
      <ul className="users">
        {
          items
          .filter(item => {
            const fullName = (item.first_name + ' ' +item.last_name)
            return (
            item.email.toLowerCase().includes(searchValue.toLowerCase()) || 
            fullName.toLowerCase().includes(searchValue.trim().toLowerCase())
            )
          })
          .map((item, index) => 
          <User
            isInvited={invites.find(obj => obj.id === item.id)}
            toggleInvitation={toggleInvitation}
            key={index} 
            {...item}
          />
          )
        }  
      </ul>
      {
        invites.length > 0 && (
          <button onClick={() => setSuccess(true)} className="send-invite-btn">Отправить приглашения</button>
        )
      }
    </div>
  )
}

export default Users