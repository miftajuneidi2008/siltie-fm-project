"use client"
import React from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState } from "react";
import { LoginFunction, State } from '@/lib/action';


const LoginForm = () => {
       const initialState: State = { message: null, errors: {} };
       const [state, formAction] = useActionState(LoginFunction, initialState);
       console.log(state.errors?.password)

  return (
    <div className='w-full' >
      <h1 className="text-xl font-bold">Signin</h1>
      <form action={formAction} className="flex flex-col gap-4">
        <div className="relative">
          <Input
            type="email"
            name="username"
            id="username"
            className="my-2"
            placeholder="Email"
            required
            aria-describedby="username-error"
          />

          <div id="username-error" aria-live="polite" aria-atomic="true">
            {state.errors?.username &&
              state.errors.username.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="relative">
          <Input
            type="password"
            name="password"
            id="password"
            className="my-2"
            placeholder="Password"
            required
            aria-describedby="password-error"
          />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <Button>Login</Button>
      </form>
    
    </div>
  );
}

export default LoginForm