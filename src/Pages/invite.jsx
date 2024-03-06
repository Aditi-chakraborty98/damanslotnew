import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../global.css';
import { useNavigate } from 'react-router-dom';

const Invite = () => {
  const navigate = useNavigate()

  const [showAlert, setShowAlert] = useState(false);


  const copyToClipboard = () => {
    const inviteLink = window.location.href; 
    navigator.clipboard.writeText(inviteLink)
      .then(() => {
        console.log('Invitation link copied to clipboard successfully');
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy invitation link to clipboard:', err);
      });
  };
  const sendInvite = () => {
    const inviteLink = window.location.href; 
    window.alert(`Send the link ${inviteLink}`)
  }
  return (
    <div id="box">
      <div><h5 id="headdd">Invite</h5></div>
      <div><h6 id="headdd">Please swipe left- right to choose your favourite poster</h6></div>
      <Carousel style={{ backgroundColor: 'white' }}>
        <Carousel.Item>
          <div id="img1"></div>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div id="img1"></div>
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div id="img1"></div>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <div><h5 id="headdd">Invite friends    Income 10 billion Commision</h5></div>

      
      {/* <button className="btn btn-primary custom-button" id="btn "style={{ width: '400px', backgroundColor: '#FF5733',  }}>
        Invite Link
      </button>     */}
            {showAlert && (
        <div className="alert alert-success justify-content-center align-items-center" role="alert" style={{ zIndex: '9999' }}>
          Link copied to clipboard!
        </div>
      )}

      <button className='invite-link mt-5' onClick={sendInvite}>Invite Link</button>
      <button className='invite-link1 mt-2 mb-5' onClick={copyToClipboard}>Copy Link</button>



      </div>
      
  );
};

export default Invite;
