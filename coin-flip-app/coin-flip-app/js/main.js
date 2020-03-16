//*Collaborated with Eric, Asiah, Vanessa, Zahmir, Nyah, Joshua  */
document.querySelector("button").addEventListener('click', makeReq)

function makeReq(){


  fetch(`/api`)//after question mark everything is a params
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#placeImg").src = data
     
    });

}
