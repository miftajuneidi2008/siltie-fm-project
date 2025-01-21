import Container from '@/components/Container'
import GoogleLoginButton from '@/components/GoogleLoginButton'
import LoginForm from '@/components/LoginForm'

import React from 'react'

const LoginPage = () => {
  return (
    <Container className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-3 w-[90%] sm:w-[60%] md:w-[45%] shadow-md p-4">
        <LoginForm />
        <GoogleLoginButton />
      </div>
    </Container>
  );
}

export default LoginPage