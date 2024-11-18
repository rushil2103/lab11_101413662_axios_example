import React from 'react';
import axios from 'axios';
import './PersonList.css';
// Custom CSS file for styling

class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">User List</h1>
        <div className="person-list">
          {this.state.persons.map(person => (
            <div className="person-card" key={person.login.uuid}>
              <div className="person-header">
                <h3>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h3>
                <p>ID: {person.login.uuid}</p>
              </div>
              <img src={person.picture.large} alt={`${person.name.first}'s avatar`} className="avatar" />
              <div className="person-info">
                <p><strong>User Name:</strong> {person.login.username}</p>
                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
                <p><strong>Email:</strong> {person.email}</p>
                <p><strong>Birth Date and Age:</strong> {`${person.dob.date} (${person.dob.age})`}</p>
                <p><strong>Register Date:</strong> {person.registered.date}</p>
                <p><strong>Phone#:</strong> {person.phone}</p>
                <p><strong>Cell#:</strong> {person.cell}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PersonList;
