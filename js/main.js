document.body.style.backgroundImage = "url('img/33.png')";
var zodiacs = [ 
{
	name: "Aquarius",
	horoscope: "This sign's babies are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping",
	Image: "img/aquarius.jpg"

},
{
	name: "Cancer",
	horoscope: "This sign's have a big heart, yes they tend to be emotional, and overreact somtimes but it's qll coming from the big heart and love they have for you. or the their passion about something",
	Image: "img/cancer.jpg"
},
{
	name: "Pisces", 
	horoscope: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back",
	Image: "img/pisces2.jpg"

},
{
	name: "Aries",
	horoscope: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.",
	Image: "img/Aries.jpg"
},
{
	name: "Taurus",
	horoscope: "Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses.",	
	Image: "img/Taurus2.jpg"
},
{
	name: "Gemini", 
	horoscope: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless.", 
	Image: "img/gemini2.jpg"
},
{
	name: "Leo",
	horoscope: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. Statu is a main strength to the Leo sign.",
	Image: "img/leo2.jpg"
},
{
	name: "Virgo", 
	horoscope: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. Statu is a main strength to the Leo sign.",
	Image: "img/Virgo2.jpg"
},
{
	name: "Libra",
	horoscope: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality.",
	Image: "img/Libra2.jpg"
},
{
	name: "Scorpio",
	horoscope: "Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.",
	Image: "img/Scorpio2.jpg"
},
{
	name: "sagittarius", 
	horoscope: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals. ",
	Image: "img/sagittarius2.jpg"
},
{
	name: "Capricorn",
	horoscope: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. ",
	Image: "img/Capricorn2.jpg"
}
]

function getHoroscope() {
	
var userZodiac = document.getElementById("userInput").value;
var emptyH1 = document.getElementById("userSign");
var emptyImg = document.getElementById("userLogo");
var emptyP = document.getElementById("userDescription");

	for(var i = 0; i < zodiacs.length; i++) {
		if(userZodiac == zodiacs[i].name) {
		emptyH1.innerHTML = zodiacs[i].name;
		emptyP.innerHTML = zodiacs[i].horoscope;
		emptyImg.src = zodiacs[i].Image;

	}
}
}












