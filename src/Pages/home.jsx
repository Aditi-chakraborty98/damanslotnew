import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css'; 
import pic from '../pics/2.png'
import  { useEffect } from 'react';
import { Bottom } from '../App';
import notification from '../pics/notificationCenter.png'
import { useNavigate } from 'react-router-dom';




const Home = () => {
const navigate= useNavigate()
  useEffect(() => {
    const moveDivs = () => {
      const divContainer = document.getElementById('amama');
      const divs = Array.from(divContainer.children);
    
      const lastDiv = divs[divs.length - 1];
    
      divContainer.style.transition = 'transform 1s';
      divContainer.style.transform = 'translateY(70px)';
      
      
    
      setTimeout(() => {
        divContainer.style.transition = 'none';
        divContainer.style.transform = 'translateY(0)';
        divContainer.insertBefore(lastDiv, divs[0]);
        setTimeout(() => {
          divContainer.style.transition = 'transform 1s';
          divContainer.style.overflow = 'auto';
        }, 50);
      }, 1000);
    };
    
    const interval = setInterval(moveDivs, 4000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);
 

  return (
    <div id='gg'>
      <Container className="mt-5 border  p-1" id='main'>
        <Row className="justify-content-center">
          <Row>
            <div id='headin'>
              <div className="head">
                <div id="jj"></div>
              </div>
              &nbsp;
              <div className="head">
                <h4>Winning&nbsp;Information</h4>
              </div>
            </div>
          </Row>
          <Row>
            <div id="amama" >
             <div >
             <div class="pic" id="p1"></div>
             <div class="nam" id="">Men***HHTR</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;7657</h6>Winning&nbsp;Ammount</div>
             </div >
             <div >
             <div class="pic" id="p2"></div>
             <div class="nam" id="">Men***GGH</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;3216</h6>Winning&nbsp;Ammount</div>
             </div>
             <div >
             <div class="pic" id="p3"></div>
             <div class="nam" id="">Men***MNB</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;568</h6>Winning&nbsp;Ammount</div>
             </div>
             <div >
             <div class="pic" id="p4"></div>
             <div class="nam" id="">Men***OIU</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;7214</h6>Winning&nbsp;Ammount</div>
             </div>
             <div >
             <div class="pic" id="p5"></div>
             <div class="nam" id="">Men***QWE</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2772</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p6"></div>
             <div class="nam" id="">Men***GVD</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2422</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p7"></div>
             <div class="nam" id="">Men***BEB</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2722</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p8"></div>
             <div class="nam" id="">Men***GDS</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;75727</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p9"></div>
             <div class="nam" id="">Men***RGR</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;27872</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p10"></div>
             <div class="nam" id="">Men***GRGR</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;27975</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p11"></div>
             <div class="nam" id="">Men***GRG</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;45752</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p12"></div>
             <div class="nam" id="">Men***FHT</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;7757</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p13"></div>
             <div class="nam" id="">Men***TTF</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;79757</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p14"></div>
             <div class="nam" id="">Men***ERG</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;5758</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p15"></div>
             <div class="nam" id="">Men***CDFE</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;282</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p16"></div>
             <div class="nam" id="">Men***DFE</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2757</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p17"></div>
             <div class="nam" id="">Men***EFW</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;4896</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p18"></div>
             <div class="nam" id="">Men***DD6</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;7520</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p19"></div>
             <div class="nam" id="">Men***GRS</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2476</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p20"></div>
             <div class="nam" id="">Men***UIR</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;2843</h6>Winning&nbsp;Ammount</div>
             </div>
             <div>
             <div class="pic" id="p1"></div>
             <div class="nam" id="">Men***MCE</div>
             <div class="logo"></div>
             <div class="ammo"><h6>Receive &#8377;564</h6>Winning&nbsp;Ammount</div>
             </div>
             
             
              
            </div>
          </Row>
          
          <Row>
          
          <div id='headin'>
              <div className="head">
                <div id="jj"></div>
              </div>
              &nbsp;
              <div className="head">
              <br/>
          <br/>
          <br/>
          
                <h4>Today's earning chart</h4>
               
              </div>
            </div>
            <br />
            <br />
            <br />
            <div>

                <div id='rank'>
                  
                <div  id="p111"><div class="rol"> NO 2</div></div>
                <div  id="p112"><div class="rol"> NO 1</div></div>
                <div  id="p113"><div class="rol"> NO 3</div></div>
                <div class="nam" id="sna">Men***TYU</div>
                <div class="ammo"id="mon">&#8377;1,65,521.00</div>
                <div class="nam" id="sna1">Men***OIU</div>
                <div class="ammo"id="mon1">&#8377;2,23,234.00</div>
                <div class="nam" id="sna2">Men***NBV</div>
                <div class="ammo"id="mon2">&#8377;1,23,234.00</div>
                <div id='score'></div>
                </div>
                
                <div id="amama" >
            
            
          
            <div id="runner">
            <div class="tt" ><h5 >4</h5></div>
             <div class="pic" id="p15"></div>
             <div class="nam" id="">Men***CDFE</div>
             
             <div class="scbtn"><h6> &#8377;1,00,01,234.00</h6></div>
             </div>
             <div id="runner">
             <div class="tt"><h5 >5</h5></div>
             <div class="pic" id="p12"></div>
             <div class="nam" id="">Men***RTYG</div>
             
             <div class="scbtn"><h6> &#8377;90,432,473.00</h6></div>
             </div>
            </div>
                <br />
            <br />
            <br />
            <br />
                
            </div>
		<div>
              <div class="card shadow bg-body-tertiary rounded mt-5">
                <div class="card-body" onClick={()=>{navigate('/notification')}}>
                  <img src={notification} alt='' style={{height:30, width:30}} />
                  <span>Notification</span>
                  <span className='float-end'>&gt;</span>
                </div>
              </div>
            </div>
            

          </Row>
          <Row>
        
        </Row>
          
          
        </Row>       
        <Bottom/>
      </Container>
    </div>
  );
};

export default Home;