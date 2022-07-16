import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get('https://62ce7f6e826a88972dfc9dae.mockapi.io/Crud')
            .then((getData) => {
                setApiData(getData.data);
            });
    }, [])

            const setData = (data) => {
                let { id, firstName, lastName } = data;
                localStorage.setItem('ID', id);
                localStorage.setItem('First Name', firstName);
                localStorage.setItem('Last Name', lastName)
            }

    const getData = () => {
        axios.get('https://62ce7f6e826a88972dfc9dae.mockapi.io/Crud')
            .then((getData) => {
                setApiData(getData.data);
            });
    }

    const onDelete = (id) => {
        axios.delete(`https://62ce7f6e826a88972dfc9dae.mockapi.io/Crud/${id}`)
            .then(() => {
                getData();
            })
    }
    return (
        <div className='container'>
            <table className="table table-striped table-bordered text-center">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>
                                        <Link to='/update'>
                                            <button type="button" className="btn btn-success" onClick={() => setData(data)}>Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
