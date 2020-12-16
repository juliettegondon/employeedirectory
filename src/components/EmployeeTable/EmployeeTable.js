import React, { Component } from "react";
import axios from 'axios'

// states property for employee, empty array to start
class EmployeeTable extends Component {
  state = {
    employees: [],
    search: ''
  };

  async componentDidMount(){
    try {

      const { data } = await axios.get("https://randomuser.me/api/?results=10")
      const { results } = data
    
      await this.setState({
        employees: results
      })

      console.log(this.state)


    } catch(err) {
      console.log(err)
    }
  }

  render() {
    //declare variables if you want (dependencies)
    const usersMap = this.state.employees.map((currentVal, index) => {

      const { cell, dob, email, gender, id, location, login, name, nat, phone, picture, registered } = currentVal
      const { title, first, last } = name
      const { thumbnail, medium, large } = picture
  
      return (


        <div>
            <h1>{`${title} ${first} ${last}`}</h1>
        </div>
      )
    })

    return ( 
      <div> 
        {usersMap}
      </div>
    )
  }

}

export default EmployeeTable;