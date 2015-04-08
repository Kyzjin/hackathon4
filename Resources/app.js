
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Friday, April 17th',
    backgroundImage:"images/banner.jpg"
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Friday Events',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'black',
	top:'37%',
	text:'April 17th-18th',
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	layout:'vertical'
});

var ring = Titanium.UI.createButton({
	title:'Official UI Class Ring Sales',
	top:'40%',
	left:'20%'
});
ring.addEventListener('click', function(e) {
	alert('Time - 1pm to 5pm\nPlace - VandaStore Plaza');
	});

var race = Titanium.UI.createButton({
	title:'Amazing Race Traditions Challenge',
	top:'40%',
	left:'50%'
});
race.addEventListener('click', function(e) {
	alert('Time - 5pm to 6pm\nPlace - Meet at VandalStore\nCost - $10, includes Tradition Keepers book');
});

var gala = Titanium.UI.createButton({
	title:'CALS Moms Weekend Gala Wine and Cheese Tasting',
	top:'50%',
	left:'20%'
});
gala.addEventListener('click', function(e) {
	alert('Time - 5pm to 8pm\nPlace - Pitman Center International Ballroom\nCost - $20/person or $35/couple\nRSVP Required');
});

var bella = Titanium.UI.createButton({
	title:'Bella Notte: An Italian Dinner',
	top:'50%',
	left:'50%'
});
bella.addEventListener('click', function(e) {
	alert('Time - 5pm to 8:30pm\nPlace - St. Augustines Catholic Center\nCost - $5/student, $6/person, $18/group of 4');
});

label1.add(ring);
label1.add(race);
label1.add(gala);
label1.add(bella);

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Contact Information',
    backgroundImage:'images/banner.jpg',
    layout:'vertical',
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Contact',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'black',
	top:'30%',
	text:'Welcome Moms',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	width:'100%'
});

win2.add(label2);

//tab 3
var win3 = Titanium.UI.createWindow({  
    title:'Saturday, April 18th',
    backgroundImage:"images/banner.jpg"
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Saturday Events',
    window:win3
});
var label3 = Titanium.UI.createLabel({
	color:'black',
	text:'April 17th-18th',
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var button6 = Titanium.UI.createButton({
	title:'Brunch featuring University of Idaho Jazz Choir',
	top:'40%',
	left:'20%'
	});

var button7 = Titanium.UI.createButton({
	top:'40%',
	left:'60%',
	title:'Key for a Cure Fun Run',
});

var button8 = Titanium.UI.createButton({
	top:'50%',
	left:'20%',
	title:'Official UI Class Ring Sales',
	
});
	var button9 = Titanium.UI.createButton({
	top:'50%',
	left:'60%',
	title:'Annual Phi Delta Theta Turtle Derby',
});

var button10 = Titanium.UI.createButton({
	top:'60%',
	left:'20%',
	title:'Greenthumb 101',
});

var button11 = Titanium.UI.createButton({
	top:'60%',
	left:'60%',
	title:'Greenthumb 201',
});

var button12 = Titanium.UI.createButton({
	top:'70%',
	left:'20%',
	title:'Dinner and Entertainment with FRANGELA',
});

button6.addEventListener('click', function(e) {alert
	('Brunch featuring University of Idaho Jazz Choir\nPitman Center Ballroom\nApril 18th, 9:30 a.m.\nCost: $20/person');
});

button7.addEventListener('click', function(e) {alert
	('Key for a Cure Fun Run\nStart at Memorial Gym\nApril 18th, 10:00 a.m.\nCost: $17 including T-shirt; $10 without');
});

button9.addEventListener('click', function(e) {alert
	('Official UI Class Ring Sales\nVandalStore Plaza, 710 Deakin Ave.\nApril 18th, 10:00 a.m.-3:00 p.m.');
});
button10.addEventListener('click', function(e) {alert
	('Greenthumb 101\n6th Street Greenhouse.\nApril 18th, 10:30 a.m.-11:30 a.m.\nCost:$15 per pot/basket | Pay at the door');
});

button11.addEventListener('click', function(e) {alert
	('Annual Phi Delta Theta Turtle Derby\n804 Elm St.\nApril 18th, 11:00 a.m.\nCost: Free');
});

button12.addEventListener('click', function(e) {alert
	('Greenthumb 201\n6th Street Greenhouse\nApril 18th, 1:00 p.m. - 2:00 p.m.\nCost: $15 per pot/basket | Pay at the door');
});


win3.add(label3);
label3.add(button6);
label3.add(button7);
label3.add(button9);
label3.add(button10);
label3.add(button11);
label3.add(button12);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();



