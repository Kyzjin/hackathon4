var win1 = Titanium.UI.createWindow({
	backgroundImage:'banner.jpg'
});

var button1 = Titanium.UI.createButton({
	title:'Event Schedule',
	top:'90%',
	alignment:'center'
});

button1.addEventListener('click', function(e) {win2;});

var win2 = Titanium.UI.createWindow({
	backgroundColor:'#999'
});

var button2 = Titanium.UI.createButton({
	backgroundImage:'Flower1.png',
	text:'Official UI Class Ring Sale',
});

var button3 = Titanium.UI.createButton({
	backgroundImage:'Flower2.png',
	text:'Amazing Race Traditions Challenge',
});

var button4 = Titanium.UI.createButton({
	backgroundImage:'Flower1.png',
	text:'CALS Moms Weekend Gala Wine and Cheese Tasting',
});

var button5 = Titanium.UI.createButton({
	backgroundImage:'Flower2.png',
	text:'Bella Notte: An Italian Dinner',
});

var table1 = Titanium.UI.createTableView({
	backgroundColor:'#999',
	scrollable: true
});

button2.addEventListener('click', function(e) {win3;});

button3.addEventListener('click', function(e) {win4;});

button4.addEventListener('click', function(e) {win5;});

button5.addEventListener('click', function(e) {win6;});

var win3 = Titanium.UI.createWindow({
	backgroundColor:'#999',
	text:'Official UI Class Ring Sales',
	text:'VandalStore Plaza',
	text:'April 17th, 1-5 p.m.',
	textAlign:'rightcenter'
});

var win4 = Titanium.UI.createWindow({
	backgroundColor:'#999',
	text:'Amazing Race Traditions Challenge',
	text:'VandalStore',
	text:'April 17th, 5-6 p.m.',
	text:'Cost $10, includes Tradition Keepers book',
	textAlign:'rightcenter'
});

var win5 = Titanium.UI.createWindow({
	backgroundColor:'#999',
	text:'CALS Moms Weekend Gala Wine and Cheese Tasting',
	text:'Pitman Center International Ballroom',
	text:'April 17th, 5-8 p.m.',
	text:'Cost: $20/person or $35/couple',
	text:'RSVP required',
	textAlign:'rightcenter'
});

var win6 = Titanium.UI.createWindow({
	backgroundColor:'#999',
	text:'Bella Notte: An Italian Dinner',
	text:'St. Augustines Catholic Center',
	text:'April 17th, 5-8:30 p.m.',
	text:'Cost: $6/person, $5/student, $18/group of 4',
	textAlign:'rightcenter'
});

var button6 = Titanium.UI.createButton({
	top:'90%',
	left:'90%',
	text:'Back'
});

button6.addEventListener('click', function(e) {win2;});

win1.add(button1);
table1.add(button2);
table1.add(button3);
table1.add(button4);
table1.add(button5);
win2.add(table1);
win3.add(button6);
win4.add(button6);
win5.add(button6);
win6.add(button6);
win1.open();
win2.open();
win3.open();
win4.open();
win5.open();
win6.open();
