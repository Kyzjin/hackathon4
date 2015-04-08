// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Friday, April 17th',
    backgroundImage:"pictures/banner.jpg",
    scrollable:true
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Friday Events',
    window:win1
});
var label1 = Titanium.UI.createLabel({
	color:'black',
	text:'April 17th-18th',
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	layout:'vertical'
});

var ring = Titanium.UI.createButton({
	title:'Official UI Class Ring Sales',
	top: 100
});
ring.addEventListener('click', function(e) {
	alert('Time - 1pm to 5pm\nPlace - VandaStore Plaza');
	});

var race = Titanium.UI.createButton({
	title:'Amazing Race Traditions Challenge',
	top: 115
});
race.addEventListener('click', function(e) {
	alert('Time - 5pm to 6pm\nPlace - Meet at VandalStore\nCost - $10, includes Tradition Keepers book');
});

var gala = Titanium.UI.createButton({
	title:'CALS Moms Weekend Gala Wine and Cheese Tasting',
	top: 130
});
gala.addEventListener('click', function(e) {
	alert('Time - 5pm to 8pm\nPlace - Pitman Center International Ballroom\nCost - $20/person or $35/couple\nRSVP Required');
});

var bella = Titanium.UI.createButton({
	title:'Bella Notte: An Italian Dinner',
	top: 145
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
    backgroundImage:'pictures/banner.jpg',
    layout:'vertical',
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Contact',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'black',
	text:'Welcome Moms',
	font:{fontSize:35,fontFamily:'Helvetica Neue'},
	textAlign:'top',
	width:'auto'
});

win2.add(label2);
//tab 3
var win3 = Titanium.UI.createWindow({  
    title:'Saturday, April 18th',
    backgroundImage:"pictures/banner.jpg"
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

win3.add(label3);
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);

// open tab group
tabGroup.open();
