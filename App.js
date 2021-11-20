import React from 'react';
import Homepage from "./homepage.js";
import News from "./news.js";
import BookTickets from "./booktickets.js";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
        </ul> */}

        <hr />
        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route> 
          <Route path="/News" element={<News/>}>
          </Route>
          <Route path="/BookTickets" element={<BookTickets/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
//import { BrowserRouter as Router, Route} from "react-router-dom";

// import ExercisesList from "./components/exercises-list.component";
// import EditExercise from "./components/edit-exercise.component";
// import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";

//<News></News>
    // <Router>
    //   <div className="container">
    //   <Navbar />
    //   <br/>
    //   <Route path="/" exact component={ExercisesList} />
    //   <Route path="/edit/:id" component={EditExercise} />
    //   <Route path="/create" component={CreateExercise} />
    //   <Route path="/user" component={CreateUser} />
    //   </div>
    // </Router>