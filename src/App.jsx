// import { StrictMode } from 'react';
import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

function App(){
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel", 
      isFollowing: true
    },
    {
      userName: "feroliveros",
      name: "Fernando Oliveros", 
      isFollowing: true
    },
    {
      userName: "pedroo",
      name: "Pedro Pablo", 
      isFollowing: false
    }
  ]
  
  return (
    <section className="App">
      {
        users.map((user) =>{
          return(
            <TwitterFollowCard
            key={user.userName}
            userName={user.userName}
            name={user.name}
            initialIsFollowing={user.isFollowing}
            />
          )

        })
      } 
    

    </section>
    
    )
  
}

export default App;