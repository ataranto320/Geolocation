const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition((data) => {
    //getCurrentLocation other ^
    console.log(data);
    speed.textContent = data.coords.speed;
    // speed.textContent = Math.round(data.coords.speed); // rounding
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert("Where am I?");
});

// {
//     "start": "browser-sync start --directory --server --files \"*.css, *.html, *.js\" --https"
//   },

// above for npm in package.json. looking into, will fix start issues.
