document.addEventListener('DOMContentLoaded', () => {

    const dogBtn = document.getElementById("dogBtn");
    dogBtn.addEventListener('click', displayDoggy);

   
    document.getElementById('currencyBtn').addEventListener('click', displayCurrency);

    document.getElementById('hotelBtn').addEventListener('click', displayHotel);


});

function displayDoggy(){
    // fetch request (go to API endpoint)
    // https://dog.ceo/api/breeds/image/random
    
    fetch("https://dog.ceo/api/breeds/image/random")  //remember ".then" handles the promise; get back a "response" object
    .then((response) => {
        let json = response.json();   //converts the response into json
       // console.log(json);

        return json;

    })
    // extract the data portion from the response
    .then ((data) => {
        //console.log(data);

        const img = document.createElement('img');
        img.src = data.message;

        const dogImg = document.getElementById("dogImg");
        
        dogImg.appendChild(img);
    })

}

function displayCurrency(){

    // https://api.exchangerate.host/latest?base=USD

    fetch("https://api.exchangerate.host/latest?base=USD")
    .then((response) => response.json())
    .then((data) => {
        let rates = data.rates;
        for (key in rates){
            const value = rates[key];
            console.log(`${key} - ${value}`);
           // can also do it this way:  console.log(key + "-" + value);
        }

    })
}

function displayHotel(){

    const hotel = document.getElementById('hotel'); //connects to HTML (to display on web page)

    fetch("http://localhost:8080/hotels")
    .then ((response) => response.json())
    .then((data) => {
       // console.log(data);
       for (let i=0; i< data.length; i++){
            const h2 = document.createElement('h2');
            h2.innerText = data[i].name;
            hotel.appendChild(h2);
            const p = document.createElement('p');
            p.innerText = data[i].address.city + ", " + data[i].address.state;
            hotel.appendChild(p);


       }


    })



}