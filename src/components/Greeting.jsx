import { useState } from "react"

export default function Greeting({messages}) {
  const randomMessage= () => messages[(Math.floor(Math.random() * messages.length))]
  const [greeting, setGreeting] = useState(randomMessage())
  function handleGreeting() {
    setGreeting(randomMessage())
  }
  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button type="button" onClick={handleGreeting}>New Greeting</button>
    </div>
  )
}
