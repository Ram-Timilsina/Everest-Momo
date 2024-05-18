import "./App.css";
import elipse from '../src/Image/Ellipse 9.png';
import frame from '../src/Image/Frame 16.png';
import photo from '../src/Image/Group 3.png';
import cmomo from '../src/Image/C Momo.png';
import fried from '../src/Image/pngegg 1.png';
import plain from '../src/Image/pngwing 2 (2).png';
import bp from '../src/Image/Image.png';
import qualit from '../src/Image/Our Services.png';
import rect from '../src/Image/Rectangle 8(1).png';
import map from '../src/Image/Map(1).png';
import logo from '../src/Image/Logo.png';
import Navbar from "./Navbar";



const Home=()=>{
    return(<>
    <Navbar />
    <div>
        <div className="firsth">
    <div>
        <h1 className="res">RESTAURANT</h1>
    </div>
    <div>
        <h1 className="THE">The <span className="one">#One</span><br/>Momo <span className="rest">Restaurant </span> </h1>
    </div>
    <div>
                <h4 className="h3">More than <span className='color'>20+ Varieties</span> of momo available for you</h4>
                </div>
                <div className="elipse">
                    <img src={elipse} alt="semicircle"></img>
                </div>
                <div className="frame">
                    <img src={frame} alt="frame" />
                </div>
                <div className="photo">
                    <img src={photo} alt="photoe"></img>
                </div>
                <div className="center">
                    <div className="why"><h1>Why Customers <span>Love Us</span></h1><br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus sint enim <br/>nobis incidunt voluptatibus assumenda veniam corrupti recusandae voluptatem <br/>illum quas ex, architecto aliquid velit cumque aspernatur corporis sunt ullam.</p></div>
                <div>
                <button className="BTN2">Explore Our Story</button>
                </div>
                </div>
                </div>
                <div className="content">
                <h1>Our<span> Most Popular</span> Recipes</h1><br/><h2>Browse through a varieties of recipes with fresh ingredients selected only from the best places</h2>
                </div>
                <div className="btnn">
                    <button>Buff</button>
                    <button>chicken</button>
                    <button>veg</button>
                </div>
                <div className="momo">
                <div> <img src={cmomo} alt="momoee"></img></div>
                <div> <img src={fried} alt="momos"></img></div>
                <div> <img src={plain} alt="momose"></img></div>
                </div>
                <div className="momotext"> 
                <div><h1>Buff Momo <br/><span>रु 150</span></h1></div>
                <div><h1>Buff Fry Momo <br/><span>रु 180</span></h1></div>
                <div><h1>Buff C.Momo <br/><span>रु 200</span></h1></div>
                </div>
                <div className="menu">
                    <button> Explore Our Menu    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="15px"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                </div>
                <div className="offer">
                    <h1><span>We Offer People </span> The Service They Want</h1>
                </div>
                <div className="photoe">
                    <img src={bp} alt="photoed"></img>
                    </div>
                    <div className="photext"><h1>Process behind the Making</h1>
                    <h2>See how only chefs cooks only the best momos</h2>
                    <br/>
                    <button> Watch the video</button>
                    </div>
                    <div className="ohii">
                    <img src={qualit} alt="photoe"/>   
                 </div>
                <div className="hb">
                 <div className="happy">
                    <div className="con">
                    <h1>200+ <span>Happy customer</span><br/></h1>
                    <h2>What our customer say about us</h2>
                    <br/><br/><i>"Only the best Momo you can find in the market.<br/>Different varieties of to choose from. Will <br/>be visiting again soon"</i><br/><br/><b>Livia Dias</b>
                    </div>
                    </div>
                   <div>
                  <img src={rect} alt="photow"></img>
                   </div>
                    
                </div>
                 <div className="ones">
                    <div className="get"><h1>Get <span>In Touch </span></h1> 
                    <h2>Our Friendly Team would love to hear from you</h2>
                    </div>
                    <div className="control">
                    <div className="two">
                    <i class="fa-light fa-location-dot"></i>                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1.5rem"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Our Address <br/>
                        New Baneshwor,Kathmandu,Bagmati,Nepal<br/>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="1.5rem"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> Our contacts<br/>
                        <pre>Mobile               Landline</pre>
                        <br/>
                        <pre>9805689789           01-4783972</pre><br/>
                        9841275897
                        <br/>
                        Our Service Time<br/>
                         <pre>MON-FRI              SAT-SUN<br/>10am-8pm             Closed</pre><br/>
                        <br/><br/><br/>
                        <div className="space"/>
                        Get In touch in social networks</p>
                        
                        <div className="fit">
                            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='2rem'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>           
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='2rem'><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
            </div>
            <div >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='2rem'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
            </div>
            </div>
                        
                        <div className="three">      
                    <form>
                    
                        <div className="fl">
                        <label for="fname">First Name</label><br/>
                        <input type="text" id="fname" name="fname" placeholder="Ram"></input>           
                        </div>
                        <div className="f2">
                        <label for="fname">Last Name</label><br/>
                        <input type="text" id="fname" name="fname" placeholder="Timilsina"></input>
                        </div>
                        <div className="email">
                        <label for="femail">E-mail</label>
                        <br/>
                       <input type="text" id="femail" name="email" placeholder="....@gmail.com"></input>
                       </div>
                       <div className="men">
                       <label for="menu">What can we do for you</label><br/>
                       &nbsp;<select id="menu" name="menu">
                       <option>Choose</option>
                       <option>order food</option>
                       </select>
                       </div>
                       <div className="phone">
                       <label for="fname">Phone Number</label><br/>
                        <input type="text" id="fname" name="fname" placeholder="9869..."></input>
                        </div>
                        <div>
                            <label>Message</label><br/>
                            <textarea></textarea>
                        </div>
                        <div className="fbt">
                            <button>send Message</button>
                        </div>
                       </form>
                       </div>
                       </div>
                       </div>
                       <div className="mapp">
                        <img src={map} alt="maps"></img>
                       </div>




                       <div className="footer">
                        <div className="fo1">

                            <div className="fo2">
                                 <img src={logo} alt="logs"></img><br/>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ipsum iusto quae fugit voluptatum 
                       odit commodi! Recusandae id ad ab nihil exercitationem, eum nobis incidunt laudantium impedit 
                       quae! Omnis, commodi.                         
                          </div>

                        <div className="fo3"><h1>momos</h1><br/>
                       <p> About Us<br/>
                        Our Services<br/>
                        Our Menu<br/>
                        <li><a href="/contact">Contact Us<span className="arrow"></span></a></li> </p><br/>
                        </div>

                       <div className="fo4">
                       <h1>Legals </h1>
                       <p>Terms and conditions<br/>
                       Privacy Policy<br/>
                       Support</p><br/>
                       </div> 

                       <div className="fo5">
                        <h1><span>Follow Us</span></h1>
                        <div className="fit">
                        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='2rem'><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>           
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='2rem'><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
            </div>
            <div >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='2rem'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </div>
            </div>
            </div>
            </div> 
            <div className="linef"><hr></hr></div>
            <div class="footer-text">
                    <p>Copyright &copy;2024 @Ram_Timilsina | All Rights Reserved.</p>
                </div>

            
            </div>
            </div> 
</>)
};
export default Home;