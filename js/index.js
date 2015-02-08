var people = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10, person11, person12, person13, person14, person15];
var person1 = {firstName:"Neck", lastName:"Beard", age:17, gender:"m", description:"hairy", tags:"#hairierthanyou"};
var person2 = {firstName:"Queen", lastName:"Buccaneer", age:60, gender:"f", description:"regal", tags:"#thecaptain"};
var person3 = {firstName:"Young", lastName:"Booty", age:12, gender:"m", description:"Single and ready to mingle", tags:"#cannonballass"};
var person4 = {firstName:"Juanita", lastName:"Wench", age:26, gender:"f", description:"Slightly promiscuous", tags:"#misterstoleyourgirl"};
var person5 = {firstName:"Scallywag", lastName:"Dancer", age:35, gender:"m", description:"I twerk", tags:"#theherpenjig"};
var person6 = {firstName:"Black", lastName:"Beard", age:46, gender:"f", description:"The king/queen of the sea.", tags:"#dressindraganddothehula, #fishyaf"};
var person7 = {firstName:"Parrot", lastName:"Queen", age:16, gender:"m", description:"I like the avian type more than the human type if you get what I mean. ", tags:"#squawk"};
var person8 = {firstName:"Calico", lastName:"Charityflint", age:53, gender:"f", description:"Indecisive, anxiety-filled, constantly confused, but usually nice.", tags:"#yeraverageswashbuckler"};
var person9 = {firstName:"Sir Francis Drake", lastName:"Lopez", age:17, gender:"m", description:"Cooler than my uncle", tags:"#swashbucklinglysexy"};
var person10 = {firstName:"TheOnlyJuan", lastName:"For You", age:52, gender:"m", description:"I'm a fighter, not a lover", tags:"#Iwillswabyourdecks"};
var person11 = {firstName:"Elizabeth", lastName:"Plank", age:28, gender:"f", description:"I won't walk the plank, but I'll climb your mast. ", tags:"#hornywoodboard"};
var person12 = {firstName:"OneEyed", lastName:"OneHorn", age:10, gender:"f", description:"Flying Purple People Eater", tags:"#scarierthanyourdragon"};
var person13 = {firstName:"Foreign", lastName:"Beauty", age:50, gender:"m", description:"Having my midlife crisis and looking for a new first mate", tags:"#dazedandconfused"};
var person14 = {firstName:"Mermaid", lastName:"Ariel", age:14, gender:"f", description:"Looking for a 20+ year old prince charming preferably without another girl but we can (t)werk out the details", tags:"#nolongerunderthesea"};
var person15 = {firstName:"John", lastName:"Doe", age:35, gender:"m", description:"Crazy for love and crazy about life", tags:"#manofmystery"};

$(document).onclick(function(people){
	for(int i = 0; i < people.length;){
		$(#name).append(people[i].firstName +" "+ people[i].lastName);
		$(#description).append(people[i].description);
	}
})



