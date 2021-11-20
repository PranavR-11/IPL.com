import { Link } from 'react-router-dom';
import bookticketsjpg from "./IPLimages/book_tickets.jpg";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import amd from "./IPLimages/ahmedabad.jpg";
import rcb from "./IPLimages/bangalore.jpg";
import delhi from "./IPLimages/delhi.jpg";
import hyd from "./IPLimages/hyderabad.jpg";
import raj from "./IPLimages/rajasthan.jpg";
import eden from "./IPLimages/eden.jpg";
import pjb from "./IPLimages/pjb.jpg";
import mum from "./IPLimages/mumbai.jpg";
import csgay from "./IPLimages/csgay.jpg";
import pune from "./IPLimages/pune.jpg";

const slideImages = [
    amd,
    rcb,
    delhi,
    hyd,
    raj,
    eden,
    pjb,
    mum,
    csgay,
    pune
    ];    
    
function BookTickets()
{
    return(<><body>
        
        <header>
        <div className="container">
            
        <section className="image" style={{ backgroundImage: "url(" + bookticketsjpg + ")"}}></section>
            <div className="main">
                <ul>
                    <li><Link to="/">HOME</Link></li>
					<li><a href="#">POINTS TABLE</a></li>
					<li><Link to="/News">NEWS</Link></li>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">ABOUT US</a></li>
					<li><a href="#">LEADERBOARD</a></li>				
					<li><a href="#">STATISTICS</a></li>			
                    <li className="active"><Link to="/BookTickets">BOOK TICKETS</Link></li>	
					<li><a href="#">TEAMS</a></li>
                    
                </ul>
                
            </div>
            <div>
                <Slide easing="ease" style={{padding: "30px"}}>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[0] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>
                        <div >
                        {/* <span>Slide 1</span> */}
                        </div>
                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[1] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>
                        <div>
                        {/* <span>Slide 2</span> */}
                        </div>
                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[2] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        {/* <span>Slide 3</span> */}
                        </div>
                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[3] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>
                        
                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[4] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[5] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[6] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[7] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[8] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    <div className="each-slide" style={{padding:"300px",
                     backgroundImage: 'url(' + slideImages[9] + ')', backgroundRepeat: "no-repeat",
                      backgroundSize: "300px", backgroundPosition: "absolute", backgroundPositionX: "420px",
                       backgroundPositionY: "40px"}}>

                    </div>
                    
                </Slide>
            </div>
        </div>
        </header>   
    </body>
    </>)
}
export default BookTickets;

// {/* <div class="slideshow-container">
//             <div class="mySlides fade">
//                 <div class="numbertext">1 / 3</div>
//                 {/* <img src="img_nature_wide.jpg" style="width:100%"> */}
//                 <section className="image" style={{ backgroundImage: "url(" + mainjpg + ")"}}></section>
//                 <div class="text">Caption Text</div>
//             </div>
//             <div class="mySlides fade">
//                 <div class="numbertext">2 / 3</div>
//                 {/* <img src="img_snow_wide.jpg" style="width:100%"> */}
//                 <div class="text">Caption Two</div>
//             </div>
//             <div class="mySlides fade">
//                 <div class="numbertext">3 / 3</div>
//                 {/* <img src="img_mountains_wide.jpg" style="width:100%"> */}
//                 <div class="text">Caption Three</div>
//             </div>

//             </div>
//             <br></br>
//             <div style="text-align:center">
//                 <span class="dot"></span> 
//                 <span class="dot"></span> 
//                 <span class="dot"></span> 
//             </div>
//             <script>
//                 var slideIndex = 0;
//                 showSlides();

//                 function showSlides() {
//                 var i;
//                 var slides = document.getElementsByClassName("mySlides");
//                 var dots = document.getElementsByClassName("dot");
//                 for (i = 0; i < slides.length; i++) {
//                     slides[i].style.display = "none";
//                 }
//                 slideIndex++;
//                 if (slideIndex > slides.length) {slideIndex = 1}    
//                 for (i = 0; i < dots.length; i++) {
//                     dots[i].className = dots[i].className.replace(" active", "");
//                 }
//                 slides[slideIndex-1].style.display = "block";  
//                 dots[slideIndex-1].className += " active";
//                 setTimeout(showSlides, 2000); // Change image every 2 seconds
//                 }
//             </script> */}