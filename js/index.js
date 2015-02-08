var person1 = {firstName:"Neck", lastName:"Beard", age:17, gender:"m", description:"hairy", tags:"#hairierthanyou", img:"img/person1.png"};
var person2 = {firstName:"Queen", lastName:"Buccaneer", age:60, gender:"f", description:"regal", tags:"#thecaptain", img:"img/person2.png"};
var person3 = {firstName:"Young", lastName:"Booty", age:12, gender:"m", description:"Single and ready to mingle", tags:"#cannonballass", img:"img/person3.jpg"};
var person4 = {firstName:"Juanita", lastName:"Wench", age:26, gender:"f", description:"Slightly promiscuous", tags:"#misterstoleyourgirl", img:"img/person4.jpg"};
var person5 = {firstName:"Scallywag", lastName:"Dancer", age:35, gender:"m", description:"I twerk", tags:"#theherpenjig", img:"img/person5.jpg"};
var person6 = {firstName:"Black", lastName:"Beard", age:46, gender:"f", description:"The king/queen of the sea.", tags:"#dressindraganddothehula, #fishyaf", img:"img/person6.jpg"};
var person7 = {firstName:"Parrot", lastName:"Queen", age:16, gender:"m", description:"I like the avian type more than the human type if you get what I mean. ", tags:"#squawk", img:"img/person7.png"};
var person8 = {firstName:"Calico", lastName:"Charityflint", age:53, gender:"f", description:"Indecisive, anxiety-filled, constantly confused, but usually nice.", tags:"#yeraverageswashbuckler", img:"img/person8.jpg"};
var person9 = {firstName:"Sir Francis Drake", lastName:"Lopez", age:17, gender:"m", description:"Cooler than my uncle", tags:"#swashbucklinglysexy", img:"img/person9.jpg"};
var person10 = {firstName:"TheOnlyJuan", lastName:"For You", age:52, gender:"m", description:"I'm a fighter, not a lover", tags:"#Iwillswabyourdecks", img:"img/person10.png"};
var person11 = {firstName:"Elizabeth", lastName:"Plank", age:28, gender:"f", description:"I won't walk the plank, but I'll climb your mast. ", tags:"#hornywoodboard", img:"img/person11.jpg"};
var person12 = {firstName:"OneEyed", lastName:"OneHorn", age:10, gender:"f", description:"Flying Purple People Eater", tags:"#scarierthanyourdragon", img:"img/person12.jpg"};
var person13 = {firstName:"Foreign", lastName:"Beauty", age:50, gender:"m", description:"Having my midlife crisis and looking for a new first mate", tags:"#dazedandconfused", img:"img/person13.png"};
var person14 = {firstName:"Mermaid", lastName:"Ariel", age:14, gender:"f", description:"Looking for a 20+ year old prince charming preferably without another girl but we can (t)werk out the details", tags:"#nolongerunderthesea", img:"img/person14.png"};
var person15 = {firstName:"John", lastName:"Doe", age:35, gender:"m", description:"Crazy for love and crazy about life", tags:"#manofmystery", img:"img/person15.png"};

var neg1 = "sounds/lillyliveredlandlubbers.wav";
var neg2 = "sounds/theplank.wav";
var neg3 = "sounds/yescurrvyscum.wav";

var pos1 = "sounds/ahoyyematey.wav";
var pos2 = "sounds/ayeayecapn.wav";
var pos3 = "sounds/yourbooty.wav";

var pos = [pos1, pos2, pos3];
var neg = [neg1, neg2, neg3];

function profile(i){
	var people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15];
	var name = people[i]["firstName"] +" "+ people[i]["lastName"];
	document.getElementById("description").innerHTML = ("<p>" + people[i]["age"] + "</p>"+ "<p>" + people[i]["gender"] + "</p>"+"<p>" + people[i]["description"] + "</p>" + "<p>" + people[i]["tags"] + "</p>");
}
function swipe(i){
	var people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15];
	var name = people[i]["firstName"] +" "+ people[i]["lastName"];
	document.getElementById("image").innerHTML = ("<img src ='" + people[i]["img"] + "'/>")
	document.getElementById("name").innerHTML = (name);
	document.getElementById("sound").innerHTML = "";
}
function no(j){
	var neg = [neg1, neg2, neg3];
	document.getElementById("sound").innerHTML = ("<audio autoplay> <source src ='" + neg[j] + "' type = 'audio/wav'/></audio>");
}
function yes(j){
	var pos = [pos1, pos2, pos3];
	document.getElementById("sound").innerHTML = ("<audio autoplay> <source src ='" + pos[j] + "' type = 'audio/wav'/></audio>");
}





