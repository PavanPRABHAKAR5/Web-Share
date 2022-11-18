import React from 'react'
import "./style.css";
import { useState } from "react"
import { Users } from './Data';


const Form = () => {

  const [query, setQuery] = useState("");
  const [User, setUser] = useState("")

  const addUser = (query)=>{
    const newaddUser = [...User, query];
    setUser(newaddUser)
  }

  console.log(query)
  return (
    <>
      <div className='box'>
        <h1>Click on share Button</h1>
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-dark btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <span>Share </span>
          <span><i className="fa-solid fa-share-nodes"></i></span>
        </button>
      </div>
      {/* <!-- Modal --> */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">



              {/* 1st part */}
              <div className='header'>
                <div className='logo'>
                  <i className="fa-solid fa-circle-user"></i>
                </div>
                <div className='description'>
                  <h4>Share to web</h4>
                  <p>Publish and share link with anyone</p>
                </div>
                <div className='toggle'>
                  <div className="form-check form-switch">
                    <input className="form-check-input toggle-box" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>
                </div>
              </div>

            </div>
            <div className="modal-body">



              {/* 2nd part */}
              {/* <Search query={query} setQuery={setQuery}/> */}
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="People, emails, groups" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onChange={(e) => setQuery(e.target.value)} />
                <button className="input-group-text" id="basic-addon2">invite</button>
                {/* <UserList query={query} handleClick={addUser} /> */}
              </div>
            </div>
            <div className="modal-footer">


              {/* 3rd part */}
              <div className='footer'>
                <div className='question'>
                  <i className="fa-regular fa-circle-question"></i>
                  <span>learn about sharing</span>
                </div>
                <div className='close'>
                  <i className="fa-regular fa-circle-xmark" data-bs-dismiss="modal" ></i>
                  <span data-bs-dismiss="modal">close</span>
                </div>
                <div className='link'>
                  <i className="fa-solid fa-link"></i>
                  <span>Copy link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="People, emails, groups" onChange={(e) => setQuery(e.target.value)} />
                <button className="input-group-text" id="basic-addon2">invite</button>
              </div>

            </div>
            <div className="modal-body">
            <ul className='list'>
                {Users.filter(user => user.name.toLowerCase().includes(query)).map((user) => (
                  <li key={user.id} className="listItem" onClick={addUser}>
                   <span>{user.Avatar}</span> 
                   <span>{user.name}</span> 
                    </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Back to first</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form