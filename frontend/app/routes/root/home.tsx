import React from 'react'
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';





export function meta({}: Route.MetaArgs) {
    return [
      { title: "Taskflo" },
      { name: "description", content: "Welcome to Taskflo!" },
    ];
  }
  
const Homepage = () => {
  return (
   <div className ="w-full h-screen flex items-center justify-center gap-x-4">
    <Link to="/sign-in">
        <Button variant="outline" className=" bg-blue-500 text-white">Login</Button>
    </Link>

    <Link to="/sign-up">
        <Button variant="outline" className=" bg-blue-500 text-white">Sign Up</Button>
    </Link>
   </div>
  )
}

export default Homepage