import { Link } from 'react-router-dom';
import Newscss from "./news.css";
import mainjpg from "./IPLimages/main.jpg";
import csk from "./IPLimages/csk.jpg";
import dwarner from "./IPLimages/dwarner.jpg";
import klrahul from "./IPLimages/klrahul.jpg";
import rr from "./IPLimages/rr.jpg";
import mi from "./IPLimages/mi.jpg";
import siyer from "./IPLimages/siyer.jpg";
import viyer from "./IPLimages/viyer.jpg";
import vkohli from "./IPLimages/vkohli.jpg";

function News()
{	
	// document.querySelector("header").style.backgroundImage = "url()"
    return(<><header>
		<div className="container">
			<div className="main">
				<ul>
					{/* <Router> */}
					<li><Link to="/">HOME</Link></li>
					<li><a href="#">POINTS TABLE</a></li>
					<li className="active"><Link to="/News">NEWS</Link></li>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">ABOUT US</a></li>
					<li><a href="#">LEADERBOARD</a></li>				
					<li><a href="#">STATISTICS</a></li>				
					<li><Link to="/BookTickets">BOOK TICKETS</Link></li>		
					<li><a href="#">TEAMS</a></li>
					{/* </Router> */}
				</ul>
				
			</div>
			
			<section className="image" style={{ backgroundImage: "url(" + mainjpg + ")"}}></section>
            
			<section className="heading">
			  <h1>HOT TOPICS</h1>
			</section>
			<section className="text" style={{backgroundColor: "#000"}}>
				<p>SCROLL TO KNOW THE LATEST NEWS</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + klrahul + ")"}}></section>
			<section className="heading">
			  <h5>Will KL Rahul be retained? Punjab's problems seem to never fade</h5>
			</section>
			<section className="text" style={{backgroundColor: "#D9A807"}}>
				<p>As Rahul and Kings look to part ways in an amicable way, PBKS' problems never seem to fade just like their season.</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + rr + ")"}}></section>
			<section className="heading">
			  <h5>RR's yet again promising but tottering season continues </h5>
			</section>
			<section className="text" style={{backgroundColor: "#591CE7"}}>
			  <p>The inaugral edition winning team will once again hope for a full regig in the coming mega auction in search for a solid 11.
				  The men in pink have always been known to buy the big bucks along with their neighbours PBKS. But just like them, their problems never seem to end!
			  </p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + dwarner + ")"}}></section>
			<section className="heading">
			  <h6>Is SRH going to lose it's form? Ill treatment to Warner reminds the world that loyalty is a mere word</h6>
			</section>
			<section className="text" style={{backgroundColor: "#000"}}>
				<p>The 2016 IPL winning captain and 3 time orange cap holder was striped off his captaincy and dropped from the team he loved the most.
					All because of a few poor outings from the Australian opener.</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + siyer + ")"}}></section>
			<section className="heading">
			  <h6>Has Iyer done enough for Delhi to make it for the WC squad?</h6>
			</section>
			<section className="text" style={{backgroundColor: "#EF4864"}}>
				<p>As Iyer returns from injury, the former Delhi Capitals captain looks hungrier than ever</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + viyer + ")"}}></section>
			<section className="heading">
			  <h6>Are Knight Riders really the dark horses or one of the favourites?</h6>
			</section>
			<section className="text" style={{backgroundColor: "#5230AF"}}>
				<p>Venkatesh Iyer solves the opening puzzle for the KKR now making them real contenders for the trophy in a sudden turn of events.</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + vkohli + ")"}}></section>
			<section className="heading">
			  <h6>Kohli bids audieu to his captaincy career in RCB colours</h6>
			</section>
			<section className="text" style={{backgroundColor: "#F0193D"}}>
				<p>Not the fairy tale end that Virat Kohli would have hoped with a loss in the playoffs yet again. Says that his loyalty will always lie in the Bangalore franchise.</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + mi + ")"}}></section>
			<section className="heading">
			  <h6>All star team MI didn't shine enough!</h6>
			</section>
			<section className="text" style={{backgroundColor: "#197DF0"}}>
				<p>The most successful IPL team and defending champions couldn't even make the playoffs this time around as their star players still look for form.</p>
			</section>
			<section className="image" style={{backgroundImage: "url(" + csk + ")"}}></section>
			<section className="heading">
			  <h6>CSK storm into record 9th final</h6>
			</section>
			<section className="text" style={{backgroundColor: "#0E3C71"}}>
				<p>Twitter erupts as Dhoni does a Dhoni again and as Gaikwad surpasses KL Rahul for the orange cap.</p>
			</section>
			</div>
		
	</header> </>)
}
export default News;