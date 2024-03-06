import React from 'react';
import notify  from '../pics/notify.png'
import { useNavigate } from 'react-router-dom';

export default function Notifications() {
    const navigate = useNavigate()
  return (
    <div className='invite-box p-3'>
        <span className='float-start' style={{cursor:'pointer'}} onClick={()=>{navigate(-1)}}>&lt;</span>
        <div className='ml-5'>
            <h5 className='d-flex justify-content-center align-items-center'>Notifications</h5>
        </div>

        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; Announcement!!!</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores illo doloremque eaque blanditiis quis voluptatem sapiente dignissimos! Unde incidunt, illo eum voluptatibus iste quam, non error repellat autem reiciendis tenetur. Error eius quisquam quam iste nulla aliquid nihil eveniet ad obcaecati. Culpa saepe minima maxime, ullam molestiae facilis rerum!
        </div>
        
       
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; ⭐Official Website⭐</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores illo doloremque eaque blanditiis quis voluptatem sapiente dignissimos! Unde incidunt, illo eum voluptatibus iste quam, non error repellat autem reiciendis tenetur. Error eius quisquam quam iste nulla aliquid nihil eveniet ad obcaecati. Culpa saepe minima maxime, ullam molestiae facilis rerum!
        </div>
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; Safe Recharge Tips</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores illo doloremque eaque blanditiis quis voluptatem sapiente dignissimos! Unde incidunt, illo eum voluptatibus iste quam, non error repellat autem reiciendis tenetur. Error eius quisquam quam iste nulla aliquid nihil eveniet ad obcaecati. Culpa saepe minima maxime, ullam molestiae facilis rerum!
        </div>
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; Authorise Customer Service</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores illo doloremque eaque blanditiis quis voluptatem sapiente dignissimos! Unde incidunt, illo eum voluptatibus iste quam, non error repellat autem reiciendis tenetur. Error eius quisquam quam iste nulla aliquid nihil eveniet ad obcaecati. Culpa saepe minima maxime, ullam molestiae facilis rerum!
        </div>
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; Secured Website</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolores illo doloremque eaque blanditiis quis voluptatem sapiente dignissimos! Unde incidunt, illo eum voluptatibus iste quam, non error repellat autem reiciendis tenetur. Error eius quisquam quam iste nulla aliquid nihil eveniet ad obcaecati. Culpa saepe minima maxime, ullam molestiae facilis rerum!
        </div>
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <div className='mt-5'>
        <div class="card p-2">
        <div className='d-flex'>
        <img src={notify} alt=''style={{height:30,width:30}} />
        <h5 className='card-title'>&nbsp;&nbsp;&nbsp;&nbsp; Protect your account from HACKERS</h5>
        </div>
        <div class="card-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias aliquam similique vero perspiciatis illum, neque ducimus ratione quo dicta dolores labore maiores autem vel, quibusdam qui? Temporibus dicta tempora facere ipsa tempore optio officia distinctio, consequuntur placeat provident repellat architecto, delectus minima esse iusto. Ab, velit amet voluptate necessitatibus in placeat architecto rerum? Cum sint quisquam recusandae voluptatem necessitatibus ducimus ullam maxime, dolorem consequuntur sapiente fuga ipsum aut tempore iusto culpa excepturi tempora. Molestiae dignissimos repudiandae iusto debitis reprehenderit sapiente laborum nam veritatis commodi, necessitatibus autem. Ut magnam ab fuga aperiam nam animi dolores hic. Possimus nam atque recusandae voluptas.
        </div>
        <h7>2023-08-08&nbsp;22:19:25</h7>
        </div>

        </div>
        <h6 id="nomore">No more</h6>
        

        
    </div>
  )
}
