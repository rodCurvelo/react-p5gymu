import React from "react";
import { render } from "react-dom";

// "Create a Reusable Component" Exercise
// Instructions
// 1) Add the following CSS rule to the profile image:
//    .profile-image { height: 50px; float: left;}
// 2) Add the following CSS rule to the profile <p> tag:
//    p.profile {margin-left: 65px; line-height: 50px;}
// 3) Create a parent component named App(). Nest <Profile /> in App() component several times and render <App /> to the page.
// 4) Add props to the profile component, and pass in props from <App /> so you end up with several different Avatar Images and Avatar names.
// 5) Add a separator of some sort between the avatar rows

function Profile(props) {
  return (
    <div style={{ borderBottom: "5px solid blue" }}>
      <img src={props.imgSrc} style={{ height: 50, float: "left" }} />
      <p style={{ marginLeft: 65, lineHeight: "50px" }}>{props.name}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
        name="Perry the Platypus"
      />
      <Profile
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926"
        name="Heinz Doofenshmirtz"
      />
      <Profile
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239"
        name="Major Monogram"
      />
    </div>
  );
}

render(<App />, document.getElementById("my-app"));

/* - Data for profiles
Perry the Platypus
https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301
     
Heinz Doofenshmirtz
https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926
      
Major Monogram
https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239"

*/
