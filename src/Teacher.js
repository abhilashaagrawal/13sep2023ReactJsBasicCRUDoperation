//1 import area

import { useEffect, useState } from "react";


//2 function defination
function Teacher() {

  //2.1 hook/variable
  // const[hookvariable,setHookVariable] = useState(initialValue)
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Ashi",
      createdAt: "12343445454"
    },
    {
      id: 2,
      name: "Priti",
      createdAt: '655565'
    }
  ]
  );


  // every hook is a function
  //useeffect is used for page load
  // i want to call api after the page load
  useEffect(() => {
    // whatever you write here will be executed after the pageload/component rendered

    fetch(`http://localhost:1337/api/teachers`, { method: "GET" })
      .then((res) => {
        // this make response json readable
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
          let newobj=data.data.map((cv,index,arr)=>{
            return   {
                id: cv.id,
                name: cv.attributes.name,
                createdAt: cv.attributes.createdAt
            }
        })
        console.log(newobj);
        setTeachers(newobj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  //2.2 function defination

  //2.3 return statement
  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <br />
        <br />
        <hr />
        <br />
        <br />

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers.map((cv, index, arr) => {
                return <tr>
                  <td>{cv.id}</td>
                  <td>{cv.name}</td>
                  <td>{cv.createdAt}</td>
                </tr>
              })
            }

          </tbody>
        </table>
      </div>
    </>
  );
}


//3 export area
export default Teacher;
