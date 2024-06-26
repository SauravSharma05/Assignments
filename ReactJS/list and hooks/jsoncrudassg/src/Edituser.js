import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edituser() {
  const [name,setName] = useState("")
  const nav = useNavigate();
  const {eId} = useParams();

  useEffect(()=>{
    fetch(`http://localhost:7000/users/`+eId)
    .then((res)=>{return res.json()})
    .then((data)=>{
        setName(data.name)
    })
   },[])


   const handleSubmit =(e)=>{
    e.preventDefault();
   const obj = {name,email}  
    
    fetch('http://localhost:7000/users/'+eId,{
      method:"put",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(obj)
    })
    .then((res)=>{
      if(res){
        alert('User data updated..!')
        nav('/')
      }})}

  return (
    <div>
         <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div>
              <h2>JSON CRUD</h2>
            </div>
            <div>
              <Link to="/" className="btn btn-warning">
                Go back
              </Link>
            </div>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label class="form-label">Id</label>
                <input
                  type="text"
                  value={eId}
                  disabled={true}
                  onChange={()=>{setName("")}}
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter name.."
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter name.."
                />
              </div>
              <div class="mb-3">
                <input type="submit" value="Update" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edituser 