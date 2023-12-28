import React from 'react'

export default function MyForm() {
  return (
    <form>
      <div className='row'>
      <div className="col">
    <label for="exampleInputFname" className="form-label"><b>First Name</b> </label>
    <input type="text" className="form-control"  />
  </div>
  <div className="col">
    <label for="exampleInputLname" className="form-label"> <b>Last Name</b></label>
    <input type="text" className="form-control"  />
  </div>
  <div className="col">
    <label for="exampleInputEmail1" className="form-label"> <b>Email address</b> </label>
    <input type="email" className="form-control" />
  </div>
  <div className='col mt-auto'> 
  <button type="submit" className="btn btn-primary ">Submit</button>
  </div>
      </div>
</form>
  )
}
