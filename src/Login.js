import React from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import { ModalHeader } from 'react-bootstrap';
const Login = () => {
  const [open,setOpen] = useState(false);

  const handleOpen = (e)=>{
      e.preventDefault();
      setOpen(true);
  }

  const handleClose = (e)=>{
      e.preventDefault();
      setOpen(false);
  }

  <Modal show={open} onHide={handleClose}>
      <ModalHeader className="modal-header" closeButton>
        <ModalBody>
            <form action="">
                <input type="text" placeholder="First name"/>
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Mobile number or email address" />
                <input type="password" placeholder="New password" />
            </form>
        </ModalBody>
      </ModalHeader>
  </Modal>
  return (
    <div className="Login">
        <div className="heading">
            <h1>facebook</h1>
        </div>
        <div className="para">
            <p>Facebook helps you connect and share <br /> with the people in your life.</p>
        </div>

        <div className="details">
            <input type="text" placeholder="Email address or phone number" /> <br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <button>Login</button>
            <p href="#" className="forPass">Forgotten Password?</p>
            <hr />
            <div className="createAcc"><button>Create New Account</button></div>
        </div>
        
    </div>
  )
}

export default Login