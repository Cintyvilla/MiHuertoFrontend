import { createContext, use, useEffect, useState } from "react";

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = use(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

export function SessionProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const session = localStorage.getItem("session");
      setLoginStatus(session !== "");
      const userId = localStorage.getItem("userId");
      setUserId(userId == "" || userId == null ? null : userId);
    }
  }, []);

  return (
    <AuthContext
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setLoginStatus(true);
        },
        signOut: () => {
          setLoginStatus(false);
        },
        loginStatus,
        userId,
      }}
    >
      {children}
    </AuthContext>
  );
}
