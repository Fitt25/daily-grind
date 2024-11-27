/*
	daily_grind.js

	Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

	One unique image, with appropriate and matching content in the alt tag.  
	A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday).

	A unique color that supports the image and paragraph of content
	The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

	
	Here are the items we need for each coffee 

	name - Bubble Tea for example
	pic - An image of a bubble tea
	day - For example Wednesday 
	alt - The data in the alt tag
	color - A color to match the coffee 
	desc - A description of the coffee 

*/
let myDate = new Date();
let myDay =  myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
	myDay = urlParams.get("day");
 }
myDay = parseInt(myDay);//must change to integer for switch

switch(myDay){
	
	case 0:

		today = "Sunday";

		coffee = {  
			name: "Frappuccino", 
			day: "Sunday",
			alt: "A pic of a Frappuccino", 
			color: "beige", 
			pic: "images/frapuccino.jpg", 
			desc: `Indulge in the ultimate coffee treat with our creamy, dreamy Frappuccino. Blended to perfection, this icy delight combines rich espresso, velvety milk, and your choice of decadent flavors, all crowned with a swirl of whipped cream and a drizzle of pure bliss. Whether you're craving classic mocha, caramel's golden sweetness, or a seasonal twist, our Frappuccino is the perfect pick-me-up for any time of day. Cool, refreshing, and irresistibly indulgent—it’s more than just coffee; it’s an experience.`

		};
		
	break;

	case 1:
		today = "Monday";

		coffee = {  
			name: "Cold Brew", 
			day: "Monday",
			alt: "A pic of a Cold Brew", 
			color: "#493014", 
			pic: "images/cold-brew.jpg", 
			desc: `to get the extra energy!`
			
		};
	break;
	
	case 2:
		today = "Tuesday";

		coffee = {  
			name: "Cappucino", 
			day: "Tuesday",
			alt: "A pic of Drip coffee", 
			color: "#5d473a", 
			pic: "images/drip.jpg", 
			desc: `for dark coffee lovers.`

		};
	break;

	case 3:
		today = "Wednesday";


		coffee = {  
			name: "Flat White", 
			day: "Wednesday",
			alt: "A pic of a Bubble Tea", 
			color: "pink", 
			pic: "images/bubble-tea.jpg", 
			desc: `I like me some Bubble Tea!`

		};
	break;

	case 4:
		today = "Thursday";

		coffee = {  
			name: "Caramel Latte", 
			day: "Thursday",
			alt: "A pic of a Caramel Latte", 
			color: "#d3a54f", 
			pic: "images/caramel-latte.jpg", 
			desc: `you can't go wrong with caramel.`

		};
	break;

	case 5:
		today = "Friday";


		coffee = {  
			name: "Mocha", 
			day: "Friday",
			alt: "A pic of a Mocha", 
			color: "#9c917a", 
			pic: "images/mocha.jpg", 
			desc: `chocolate to spice life up`

		};
	break;

	case 6:
		today = "Saturday";

		coffee = {  
			name: "Pumpkin Spice", 
			day: "Monday",
			alt: "A pic of a Pumpkin Spice Latte", 
			color: "orange", 
			pic: "images/pumpkin-spice-latte.jpg", 
			desc: `One of our best sellers`

		};
	break;

	default:
		today = "Something went wrong";
}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
//document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
	let myReturn = `<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
	<h3 class="feature"><strong>${coffee.day}'s Special:</strong> 
	<strong>${coffee.name}.</strong><h3/>
	<p>${coffee.desc}</p>`; 

	return myReturn;

}
