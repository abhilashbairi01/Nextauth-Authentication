"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
const SigninButton = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button
              className="bg-white p-2 px-4 rounded-lg"
              onClick={() => signIn('google')}
            >
              Login with Google
            </button>
          </div>
        </div>
      </>
    );
  }

  if (session) {
    return <>Logged in {session.user.email} </>;
  }
};

export default SigninButton;
