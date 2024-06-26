import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Mainpage() {

  const [Dat,setDat] = useState("");
  const navi = useNavigate()

  useEffect(()=>{

        fetch('http://localhost:7000/users')
        .then((res)=>{return res.json()})
        .then((data)=>{

              setDat(data);


        })
    },[])

    const viewpage = (id)=>{

      navi('/viewuser/'+id)

    }

    const Delete =(id)=>{
      fetch('http://localhost:7000/users/'+id,{
        method:"delete",
        headers:{"content-type":"application/json"},
        
      })
      .then((res)=>{
        if(res){
          alert('User Deleted..!')
          navi('/')
        }})
  
  }


  return (
    <div>        
        <ul>
            <li><Link to="/addnew">addnew</Link></li>
        </ul>
        <table className="table">
                <tr>
                  <th>NAME</th>
                </tr>
                <tbody>

          {Dat && Dat.map((v,i)=>(
              <tr key={i}>
                <td>{v.name}</td>
                <td>
                      <button className='btn btn-primary' onClick={()=>{viewpage(v.id)}}>view</button>
                      <button className="btn btn-warning" onClick={()=>{Edit(v.id)}}>Edit</button>
                      <button className="btn btn-danger" onClick={()=>{Delete(v.id)}}>Delete</button>
                </td>
              </tr>
          ))}
                </tbody>
        </table> 
    </div>
  )
}


export default Mainpage