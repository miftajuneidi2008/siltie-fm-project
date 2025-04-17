"use client"
import React from 'react'
import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';
import Spinner from './Spinner';
import { cn } from '@/lib/utils';

const GoogleLoginButton = ({size,name}:{size?:string,name?:string}) => {
  const {pending}= useFormStatus()
  return (
    <Button type="submit" className={cn("w-full py-4",size && 'w-max')} disabled={pending}>
      {pending ? (
        <div className="flex gap-2 items-center">
          <Spinner />
          <span>Processing</span>
        </div>
      ) : (
        <div>{name ? name : "Signin with Google"}</div>
      )}
    </Button>
  );
}

export default GoogleLoginButton