import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="name">
        ✧･ﾟ: * Aditi Chalasani ✧･ﾟ:*
      </h1>
      <h2 className="bio">
        I am a freshman here at UMD studying computer science!
      </h2>
      <h3 className="interests">
        I love art (in all forms), music, movies, and trying new things.
      </h3>
      <p className="music">
        Here are some of my favorite albums:
      </p>
      <div className="musicPics1">
        <img src="https://upload.wikimedia.org/wikipedia/en/9/9d/Get_Rich_Or_Die_Tryin%27.JPG" />
        <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg" />
        <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg" />
      </div>
      <div className="musicPics2">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg" />
        <img src="https://i.discogs.com/11rqC9v_0UmGnTIIeKF5UdfshFhjm5ZCQusS8RB9ZEE/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MjIz/MTYtMTM3OTQzMTg1/NS00NjUzLmpwZWc.jpeg" />
        <img src="https://i.scdn.co/image/ab67616d00001e02f75e291cc449ca4b72af0fb7" />
      </div>
      <p className="movies">
        Here are some of my favorite movies (I dont really like tv shows):
      </p>
      <div className="moviePics">
            <img src="https://resizing.flixster.com/KQnlV-QK90j-rYBlvk3S4hy_Vfo=/300x300/v2/https://resizing.flixster.com/BSFE0zyDP-8vR6zx4Fz8FbkHKDA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2MyYzY1NTY1LWViNWYtNGQxOS05YTFlLTdlMzhiMGMzNjM5My53ZWJw" /> 
            <img src="https://resizing.flixster.com/VZYjugSEc4Xd7JFqDkMxu2LtBBU=/300x300/v2/https://flxt.tmsimg.com/assets/p10939779_p_v10_ad.jpg"/>
            <img src="https://i.scdn.co/image/ab67616d00001e02e621b61565da017e174628bb"/>
            <img src="https://soundtrackworld.com/wp-content/uploads/2017/11/Henry-Jackman-Matthew-Margeson-Kingsman-The-Golden-Circle-300x300.jpg"/>
      </div>
      <p className="facts">
        Some quick facts about me:
      </p>
      <ul className="funFacts">
        <li>My favorite colors are <span style={{color: "pink"}}>pink</span> and <span style={{color: "blue"}}>blue</span></li>
        <li>I was born in Toronto, Canada</li>
        <li>I danced for 12 years (Bharatananatyam, ballet, hiphop, and classical)</li> 
        <li>I know the ABCs in sign language</li> 
        <li>I speak Telugu & English</li> 
      </ul>

    </div>



  );
}

export default App;
