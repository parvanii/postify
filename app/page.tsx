
import {SignUpButton,SignedOut,SignedIn,SignOutButton} from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
    <h1> Welcome</h1>
    <SignedOut>
    <SignUpButton mode="modal">Get Started</SignUpButton>
    </SignedOut>

    <SignedIn>
   <SignOutButton>Logout</SignOutButton>
    </SignedIn>
    </div>
  )
}