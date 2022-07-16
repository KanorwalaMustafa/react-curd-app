import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'



export default function Create() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log(firstName);
    console.log(lastName);


    const setDataToApi = (e) => {
        e.preventDefault();
        axios.post(`https://62ce7f6e826a88972dfc9dae.mockapi.io/Crud`, {
            firstName,
            lastName
        }).then(() => {
            navigate("/read");
        })
    }


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success" onClick={setDataToApi}>Submit</button>
            </form>
        </div>
    )
}
