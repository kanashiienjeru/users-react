import React from 'react'
import './img/search.png'
import './style.css'
import Users from './components/Users'
import axios from 'axios'
import Success from './components/Success'

function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [success, setSuccess] = React.useState(false)

  const toggleInvitation = (obj) => { 
    console.log(obj)
    if(invites.find(item => item.id === obj.id)) {
      setInvites(prev => prev.filter(item => item.id !== obj.id))
    } else {
      setInvites(prev => [...prev, obj])
    }
  }


  React.useEffect(() => {
    async function fetchData() {
      const qwe = await axios.get('https://reqres.in/api/users')

      setUsers(qwe.data.data)
    }

    fetchData()
  },[])

  return (
    <div className="App">
      {
        success
        ? (
          <Success invites={invites} count={invites.length}/>
        )
        : (
          <>
          <Users items={users} invites={invites} setSuccess={setSuccess} toggleInvitation={toggleInvitation}/>
          </>
        )
        
      }
    </div>
  );
}

export default App;
