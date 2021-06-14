import React, { useState } from 'react';
import axios from 'axios';





const Registration = () => {

    const [userRegistration, setUserRegistration] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        password: ""

    });


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({ ...userRegistration, [name]: value});
    }

    const [record, setRecord] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = userRegistration.firstName + " " + userRegistration.lastName
        console.log(fullName)
        console.log(userRegistration.email)
        console.log(userRegistration.phone)
        console.log(userRegistration.address)
        console.log(userRegistration.password)


        const newRecord = {...userRegistration, id: new Date().getTime().toString()};
        console.log(record);
        setRecord([...record, newRecord]);
        console.log(record);

        setUserRegistration({firstName: "", lastName: "", email: "", phone: "", address: "", password1: ""})

        axios.post('http://localhost:9001/register', {
            first_name: userRegistration.firstName,
            last_name: userRegistration.lastName,
            email: userRegistration.email,
            phone: userRegistration.phone,
            address: userRegistration.address,
            password: userRegistration.password,
        }).then(function(response){
            console.log(response.data);
        })
    }


    return (
        <div className="container">
            <div className="py-4">
                <h1>User Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 py-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" 
                        name="firstName"
                        value={userRegistration.firstName} 
                        onChange={handleInput}
                        id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" 
                        name="lastName"
                        value={userRegistration.lastName} 
                        onChange={handleInput}
                        id="lastName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                        name="email"
                        value={userRegistration.email} 
                        onChange={handleInput}
                        id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" 
                        name="phone"
                        value={userRegistration.phone} 
                        onChange={handleInput}
                        id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" 
                        name="address"
                        autoComplete="off"
                        value={userRegistration.address} 
                        onChange={handleInput}
                        id="address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" 
                        name="password"
                        value={userRegistration.password} 
                        onChange={handleInput}
                        id="password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;    