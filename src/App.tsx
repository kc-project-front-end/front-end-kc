import React from "react";
import { GlobalStyles } from "./styles/global";
import { Router } from "./routes";
import { UserProvider } from "./contexts/usersContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  );
}

export default App;
