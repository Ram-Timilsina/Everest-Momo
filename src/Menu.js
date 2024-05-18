import React from 'react';
import Navbar from './Navbar'
import "./App.css";
import scan from "../src/Image/Scan.png"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import  Brush from '../src/Image/BRUSHES (1).png';
import  Brush2 from '../src/Image/BRUSHES.png';
import bmomo from '../src/Image/pngwing 2 (2).png';
import chillymomo from '../src/Image/chilli-momo.png';
import bfmomo from '../src/Image/pngegg 1 (2).png';
import Footer from "./Footer";
function Menu() {
  return (
    <div>
     <div>
      <Navbar/>
     </div>
     <div className='fronts'>
     <div className="menuheader">
      <h1 className='color3'>Our Menu</h1>
     </div>
     <div className='menutopic'>
      <h2><span className='color'>Our menu is more than just momos,</span><br />
with a variety of dishes to cater to all tastes and preferences.</h2>
     </div>
     </div>
     <div className='color4'>
     <div className='headerscan'>
      <h2 className='color3'>Scan the QR code</h2>
      <p>You can also check the allergy advices using your phone as well</p>
     </div>
     <div className='scanqr'>
      <img src={scan} alt="" className='qrcode' />
      <h2><span className='color'>SCAN</span> ME! <MdOutlinePhoneAndroid className='androidbtn'/></h2>
     </div>
     </div>
     <div className='momoheader'>
     <img src={Brush} alt="pic7"></img>
      <h2><span className='color'>BUFF</span> MOMO's</h2>
      <img src={Brush2} alt="pic5"></img>
     </div>
     <div className='momoflex1'>
     <div>
      <img src={bmomo} alt=""  /><br />
      <div className='newbtn'>
        <button className='newbtninner'>New</button>
      </div>
      <h2>Buff Steam Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={chillymomo} alt="ja" />
      <div className='popmomo'>
        <button className='popular'>Popular</button>
      </div>
      <h2>Buff C. Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoflex2'>
     <div>
      <img src={bfmomo} alt="sf"  /><br />
      <h2>Buff Fry Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={bmomo} alt="sgh" />
      <div className='recommomo'>
        <button className='recommend'>Recommended</button>
      </div>
      <h2>Buff Jhol Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoheader'>
     <img src={Brush} alt="pic7"></img>
           <h2><span className='color'>CHICKEN</span> MOMO's</h2>
           <img src={Brush2} alt="pic8"></img>     </div>
     <div className='momoflex1'>
     <div>
      <img src={bmomo} alt="sggsg"  /><br />
      <div className='newbtn' >
        <button className='newbtninner'>New</button>
      </div>
      <h2>Buff Steam Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={chillymomo} alt="sggsg" />
      <div className='popmomo'>
        <button className='popular'>Popular</button>
      </div>
      <h2>Buff C. Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div className='momoflex2'>
     <div>
      <img src={bfmomo} alt="pes"  /><br />
      <h2>Buff Fry Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>     
      </div>
     <div>
      <img src={bmomo} alt="pes" />
      <div className='recommomo'>
        <button className='recommend'>Recommended</button>
      </div>
      <h2>Buff Jhol Momo</h2>
      <h3>रु<span className='color'>200</span></h3>
      <p>(Freshly Steamed Buff Momos made from <br /> whole wheat and kneaded with beta Carotene <br /> Rich Vegetable Juice)</p>
     </div>
     </div>
     <div>
      <Footer/>
     </div>
    </div>
  )
}

export default Menu;