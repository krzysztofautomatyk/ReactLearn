import Student from "./Student"

function App() {
  return (
    <>
      <Student    isStudent={true}/>
      <Student name="Martin" age = {12} isStudent={false}/>
      <Student name="Krzysztof" age = {38} isStudent={false}/>
      <Student name="Patrik" age = {22} isStudent={true}/>
    </>
  )
}

export default App
