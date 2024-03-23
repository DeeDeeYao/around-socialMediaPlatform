import React, { useState } from "react";
import TopBar from "./TopBar";
import Main from "./Main";

import { TOKEN_KEY } from "../constants";

function App() {
  //use hook to create a state
  const [isLoggedIn, setIsLoggedIn] = useState(
    //hashmap 存储空间 浏览器里的存储空间 关闭浏览器后还会有】
    localStorage.getItem(TOKEN_KEY) ? true : false
  );

  const logout = () => {
    console.log("log out");
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };

  const loggedIn = (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="App">
      <TopBar isLoggedIn={isLoggedIn} handleLogout={logout} />
      <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    </div>
  );
}

export default App;
