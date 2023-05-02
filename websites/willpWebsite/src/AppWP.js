import './AppWP.css';

function App() {
  return (
    <div>
    <h1 className="center">All About Me</h1>
    <p className="center">My name is William Phoone and I am currently a sophomore Computer Science major at the University of Maryland.</p>
    <section>
      <h2 className="center">My Favorite Movies</h2>
      <ul className="entries">
        <li>
          <div className="pic">
            <img src="https://m.media-amazon.com/images/I/81anyi8IkDS._RI_.jpg" alt="Dark Knight Rises" />
            <p>The Dark Knight Rises</p>
          </div>
        </li>
        <li>
          <div className="pic">
            <img src="https://i.ytimg.com/vi/PC5blZ9n810/maxresdefault.jpg" alt="F9" />
            <p>Fast and Furious</p>
          </div>
        </li>
        <li>
          <div className="pic">
            <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" alt="Endgame" />
            <p>Avengers: Endgame</p>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h2 className="center">Hobbies</h2>
      <ul className="entries">
        <li>
          <div className="pic">
            <img src="https://www.nerdfitness.com/wp-content/uploads/2020/01/weights_to_strength_train.jpg" alt="Lifting" />
            <p>Lifting</p>
          </div>
        </li>
        <li>
          <div className="pic">
            <img src="https://media1.westword.com/den/imager/u/magnum/13178614/20211229_171956.jpg?cb=1642611234" alt="Trying Different Restaurants" />
            <p>Trying Different Restaurants</p>
          </div>
        </li>
        <li>
          <div className="pic">
            <img src="https://img.freepik.com/premium-photo/three-african-american-men-playing-basketball-court-outdoors-black-man-his-sporty-friends-being-athletic-outside-group-basketball-players-competing-match-game-recreation-fun_590464-69392.jpg?w=2000" alt="Spending time outside playing sports" />
            <p>Spending time outside playing sports</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
  );
}

export default App;
