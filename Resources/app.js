var win1 = Titanium.UI.createWindow({
	backgroundImage:'\andriod\banner.jpg'
});

var button1 = Titanium.UI.createButton({
	title:'Event Schedule',
	top:'90%',
	alignment:'center'
});

button1.addEventListener('click', function(){
	var win2 = Titanium.UI.createWindow({
		backgroundColor:'#999'
	});
	var table1 = Titanium.UI.createTableView({
		backgroundColor:'#999',
		scrollable: true
	});
	var button2 = Titanium.UI.createButton({
		backgroundImage:'\android\Flower1.png',
		text:'Official UI Class Ring Sale',
	});
	var button3 = Titanium.UI.createButton({
		backgroundImage:'\android\Flower2.png',
		text:'Amazing Race Traditions Challenge',
	});
	var button4 = Titanium.UI.createButton({
		backgroundImage:'\android\Flower1.png',
		text:'CALS Moms Weekend Gala Wine and Cheese Tasting',
	});
	var button5 = Titanium.UI.createButton({
		backgroundImage:'\android\Flower2.png',
		text:'Bella Notte: An Italian Dinner',
	});
	button2.addEventListener('click', function(){
		var win3 = Titanium.UI.createWindow({
			backgroundColor:'#999',
			text:'Official UI Class Ring Sales',
			text:'VandalStore Plaza',
			text:'April 17th, 1-5 p.m.',
			textAlign:'center',
		});
		var button6 = Titanium.UI.createButton({
			top:'90%',
			left:'80%',
			text:'Back'
		});
		win3.add(button6);
		button6.addEventListener('click', function() {
			win3.close();
		});
		win3.open();
	});
	button3.addEventListener('click', function(){
		var win4 = Titanium.UI.createWindow({
			backgroundColor:'#999',
			text:'Amazing Race Traditions Challenge',
			text:'VandalStore',
			text:'April 17th, 5-6 p.m.',
			text:'Cost $10, includes Tradition Keepers book',
			textAlign:'center'
		});
		var button7 = Titanium.UI.createButton({
			top:'90%',
			left:'80%',
			text:'Back'
		});
		win4.add(button7);
		button7.addEventListener('click', function() {
			win4.close();
		});
		win4.open();
	)};
	button4.addEventListener('click', function(){
		var win5 = Titanium.UI.createWindow({
			backgroundColor:'#999',
			text:'CALS Moms Weekend Gala Wine and Cheese Tasting',
			text:'Pitman Center International Ballroom',
			text:'April 17th, 5-8 p.m.',
			text:'Cost: $20/person or $35/couple',
			text:'RSVP required',
			textAlign:'center'
		});
		var button8 = Titanium.UI.createButton({
			top:'90%',
			left:'80%',
			text:'Back'
		});
		win5.add(button8);
		button8.addEventListener('click', function() {
			win5.close();
		});
		win5.open();
	)};
	button5.addEventListener('click', function(){
		var win6 = Titanium.UI.createWindow({
			backgroundColor:'#999',
			text:'Bella Notte: An Italian Dinner',
			text:'St. Augustines Catholic Center',
			text:'April 17th, 5-8:30 p.m.',
			text:'Cost: $6/person, $5/student, $18/group of 4',
			textAlign:'center'
		});
		var button9 = Titanium.UI.createButton({
			top:'90%',
			left:'80%',
			text:'Back'
		});
		win6.add(button9);
		button9.addEventListener('click', function() {
			win6.close();
		});
		win6.open({);
	});
	table1.add(button2);
	table1.add(button3);
	table1.add(button4);
	table1.add(button5);
	win2.add(table1);
	win2.open();
});

win1.add(button1);

win1.open();
