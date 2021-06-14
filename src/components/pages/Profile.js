import React, { Component} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


class Profile extends Component {
  constructor(props) {
    super(props)
    this.getProfiles = this.getProfiles.bind(this)
  }
  state = {
    profiles: []
  };

  getProfiles () {
    axios.get('http://localhost:9001/profiles')
    .then(response => {
      this.setState({
        profiles: Object.entries(response.data).map(([k,v]) => ({[k]: v}))
      })
    })
 }

 deleteProfile () {
  axios.delete('http://localhost:9001/delete')
  .then(response => {
    this.setState({
      profiles: Object.entries(response.data).map(([k,v]) => ({[k]: v}))
    })
  })
 }

  render() {
    return (
      <div className="container" >
      <div className="py-4" >
        <div>
        <Button variant="outline-primary" className="mx-5" size="lg" onClick={this.getProfiles}> Get All Profiles</Button>
        </div>
        <h1>Profile page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Setting</th>
            </tr>
          </thead>
          <tbody>
          {this.state.profiles.map((data, key) => {
          return (
          <tr>
            <td>{data[key].first_name}</td>
            <td>{data[key].last_name}</td>
            <td>{data[key].email}</td>
            <td>{data[key].phone}</td>
            <td>{data[key].address}</td>
            <td>
              <span>
                <Button variant="outline-primary" className="mx-10" size="sm">edit</Button> 
                 </span>
                 <span>
                   <Button variant="outline-danger" className="mx-10" size="sm" onClick={this.deleteProfile} > delete</Button>
                   </span>
                   </td>
          </tr>
          )
       })}

          </tbody>
        </Table>
      </div>
    </div>
    )
    
};
}

export default Profile;