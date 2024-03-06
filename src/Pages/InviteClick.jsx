import React from 'react';
import '../global.css';
import { useNavigate } from 'react-router-dom';


export default function InviteClick() {
    const navigate = useNavigate()
  return (
    <div className='invite-box'>

        <div className='header d-flex justify-content-center align-items-center'>
            <h6>Agency</h6>
        </div>

        <div className='red-box'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <p className='mt-3'>0</p>
                <div className='curv d-flex justify-content-center align-items-center'>
                    <span>Yesterday total commission</span>
                </div>
                <p className='mt-2'>Upgrade the level to increase commision</p>
            </div>
            <div className='upper-box shadow bg-body-tertiary rounded'>
                <div className='row'>
                    <div className='col d-flex flex-column align-items-center justify-content-center'>
                        <h6 className='p-3'>Direct subordinates</h6>
                        <span className='mt-2'>0</span>
                        <span>number of register</span>
                        <span className='mt-2'>0</span>
                        <span>Deposit number</span>
                        <span className='mt-2'>0</span>
                        <span>Deposit amount</span>
                        <span className='mt-2'>0</span>
                        <span>Number of people making fist deposit</span>
                    </div>
                    <div className='col d-flex flex-column align-items-center justify-content-center'>
                    <h6 className='p-3'>Team subordinates</h6>
                        <span className='mt-2'>0</span>
                        <span >number of register</span>
                        <span className='mt-2'>0</span>
                        <span >Deposit number</span>
                        <span className='mt-2'>0</span>
                        <span >Deposit amount</span>
                        <span className='mt-2'>0</span>
                        <span >Number of people making fist deposit</span>
                    </div>
                </div>
            </div>
        </div>

        <div className='mt-5 d-flex justify-content-center align-items-center'>
        <button className='invite-link' style={{marginTop:80}} onClick={()=>{navigate('/invite')}}>Invite Link</button>
        </div>

        <div className='mt-3 p-4'>
            <div class="card">
            <div class="card-body">
                This is some text within a card body.
            </div>
            </div>
            <div class="card mt-3">
            <div class="card-body">
                This is some text within a card body.
            </div>
            </div>
            <div class="card mt-3">
            <div class="card-body">
                This is some text within a card body.
            </div>
            </div>
            
        </div>
    </div>
  )
}
