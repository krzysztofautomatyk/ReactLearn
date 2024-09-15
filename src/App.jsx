import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="John"/>
      <UserGreeting isLoggedIn={false} username="John"/>
    </>
  )
}

export default App
