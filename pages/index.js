import { useSession, signIn, signOut } from "next-auth/react"
import LoginMenu from "../components/LoginMenu"
import '../styles/globals.css';

export default function Component() {
  return <>
    <LoginMenu />
  </>
}