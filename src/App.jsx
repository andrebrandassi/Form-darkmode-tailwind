import { useState } from "react"
import ArticlesList from "./components/ArticlesList"
import Header from "./components/Header"
import Form from "./components/Form"


function App() {
  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user}/>
      {hasUser && <ArticlesList/>}
      {!hasUser && <Form onSubmit={setUser}/>}
    </div>
  )
}

export default App
