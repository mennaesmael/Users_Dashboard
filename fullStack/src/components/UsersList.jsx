import React from 'react'

export default function UsersList() {
  return (
    <div>


<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">
Email address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td><button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>

    </div>

  )
}
