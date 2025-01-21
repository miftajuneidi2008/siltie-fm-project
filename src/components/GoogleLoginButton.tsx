import { signIn } from '@/lib/auth';
import React from 'react'
import { Button } from './ui/button';

const GoogleLoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <Button type="submit" className='w-full'>Signin with Google</Button>
    </form>
  );
}

export default GoogleLoginButton