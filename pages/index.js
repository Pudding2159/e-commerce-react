import { useSession, signIn, signOut } from "next-auth/react"
import LoginMenu from "../components/LoginMenu"
import '../styles/globals.css';

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      <button onClick={() => signOut()}>Sign out</button>
      <LoginMenu email = {session.user.email}/>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn()}>Sign in</button>
  </>
}