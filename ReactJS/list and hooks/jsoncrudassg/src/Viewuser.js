import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Viewuser() {

    const [Name, setName] = useState("")

    const {id} = useParams();
    console.log(id)//1

    fetch(`http://localhost:7000/users/${id}`)
    .then((res)=>{return res.json()})
    .then((data)=>{
        setName(data.name)
    })

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div>
              <Link to="/" className="btn btn-warning">
                Go back
              </Link>
            </div>

            <h2>Id: {id}</h2>
            <h2>Name: {Name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewuser