import Homepagejpg from "./IPLimages/homepage.jpg";
import Homepagecss from "./Homepage.css";
import Homepagevid from "./trailer.mp4";
import { Link } from 'react-router-dom';
function Homepage()
{
	// var video = document.getElementById('iplvideo').playbackRate = 2.0;
  return(<><header>
		<div className ="main">
			<ul>
			{/* <Link to="/about">About</Link> */}
				<li className ="active"><Link to="/">HOME</Link></li>
				<li><a href="#">POINTS TABLE</a></li>
				<li><Link to="/News">NEWS</Link></li>
				<li><a href="#">FAQ</a></li>
				<li><a href="#">ABOUT US</a></li>
				<li><a href="#">LEADERBOARD</a></li>				
				<li><a href="#">STATISTICS</a></li>				
				<li><Link to="/BookTickets">BOOK TICKETS</Link></li>		
				<li><a href="#">TEAMS</a></li>
				
			</ul>
			
		</div>
	</header>
	<video width="320" height="240" playbackrate="2.0"  autoPlay>
		<source src= {Homepagevid} type="video/mp4" id = "iplvideo"/>
		<source src="trailer.ogg" type="video/ogg" id = "iplvideo"/>
	    Your browser does not support the video tag.
	</video></>)
}

export default Homepage;