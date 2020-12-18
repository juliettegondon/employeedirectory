import React from "react";
import { EmployeeTable } from "./components";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Nav from "./components/Nav/Nav";




function App() {
  return (
    <div className='App'>
      <Wrapper>
      <Header />
      <Nav/>
      <EmployeeTable />
      </Wrapper>
    </div>
  )

}

export default App;