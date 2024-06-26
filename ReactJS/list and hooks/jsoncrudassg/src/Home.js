import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const [users,setUsers] = useState("");
    const n = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:5600/users')
        .then((res)=>{return res.json()})
        .then((data)=>{setUsers(data)})
    },[])

    // console.log(users)

    const handleView =(id)=>{
        // console.log(id)
        // n(`/view-user/${id}`)
        n('/view-user/'+id)

    }

    const handleEdit =(id)=>{
      // console.log(id)
      // n(`/view-user/${id}`)
      n('/edit-user/'+id)

  }

  const handleDelete =(id)=>{
    fetch('http://localhost:7000/users/'+id,{
      method:"delete",
      headers:{"content-type":"application/json"},
      
    })
    .then((res)=>{
      if(res){
        alert('Deleted..!')
        n('/')
      }})

}
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div>
                <h2>JSON CRUD</h2>
            </div>
            <div>
                <Link to='/add-user' className="btn btn-warning">Add New</Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((v)=>(
                <tr>
                  <th scope="row">{v.id}</th>
                  <td>{v.name}</td>
                  <td>
                    {/* <Link to={`/view-user/${v.id}`} className="btn btn-info">View</Link> */}
                    <button onClick={()=>{handleView(v.id)}} className="btn btn-info mx-2">View</button>
                    <button onClick={()=>{handleEdit(v.id)}} className="btn btn-success mx-2">Edit</button>
                    <button onClick={()=>{handleDelete(v.id)}} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;