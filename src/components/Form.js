import React from 'react'
import "./style.css";
const Form = () => {
  return (
    <>
    <div className='box'>
    <h1>Click on share Button</h1>
    {/* <!-- Button trigger modal --> */}
<button type="button" className="btn btn-dark btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <span>Share </span>
  <span><i class="fa-solid fa-share-nodes"></i></span>
</button>
</div>
{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}


        {/* 1st part */}
        <div className='header'>
            <div className='logo'>
            <i class="fa-solid fa-circle-user"></i>
            </div>
            <div className='description'>
                <h4>Share to web</h4>
                <p>Publish and share link with anyone</p>
            </div>
            <div className='toggle'>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
            </div>
        </div>

      </div>
      <div className="modal-body">
        {/* 2nd part */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="People, emails, groups" aria-label="People, emails, groups" aria-describedby="basic-addon2"/>
           <span className="input-group-text" id="basic-addon2">invite</span>
</div>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button> */}

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
    </>
  )
}

export default Form