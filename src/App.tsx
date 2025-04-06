import SearchBar from "./component/SearchBar"
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { userAPI } from "./services/usersAPI";

const App = () => {
  return (
    <>
    <ApiProvider api={userAPI}>
      <SearchBar/>
    </ApiProvider>
    </>
  )
}

export default App
