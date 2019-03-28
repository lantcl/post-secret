var app = function(app){  //module pattern
	app.makeView = function(m, stage){
		const v = {};

		const manager = v.manager = new Manager();

		var stageW = stage.width;
		var stageH = stage.height;
		
		STYLE = {
			type:{
				Tabs:{
					currentSelected: false,
					width: 160,
					spacing: 20
				},
				Button:{
					width: 60,
					height:60,
					shadowBlur: -1,
					label:"",
					corner:30,
					backgroundColor: grey,
					rollBackgroundColor: black
				}
			}
		}
		
	
		
		////////////PAGE 1///////
		const page1 = v.page1 = new Container(stageW, stageH);
		
		let header = new Container().addTo(page1);
		v.page1.logo =  new Label(m.title).addTo(header);
		let content = new Container(300,300).addTo(page1);
		
		v.dial = new Dial().center(content);
		v.dial.currentValue = m.data[0];

		let footer = v.page1.tabs = new Tabs({
			tabs:[new Button({
				icon: pizzazz.makeIcon("home", "white").alp(.7),
				rollIcon: pizzazz.makeIcon("home", "white")
			}), 
			new Button({
				icon: pizzazz.makeIcon("settings", "white").alp(.7),
				rollIcon: pizzazz.makeIcon("settings", "white")
			})
			]
		}).addTo(page1);
		//footer.buttons[0].setIcon("icon", pizzazz.makeIcon("settings", "white"))

		const layout1 = new Layout(page1, [
			{object: header, marginTop:5,  maxWidth: 90, backgroundColor:green},
			{object: content, marginTop:2, backgroundColor:green},
			{object: footer, marginTop:2, maxWidth: 90}
			], 2, yellow, true, null, stage);

		manager.add(layout1);

		////////////PAGE 2///////
		const page2 = v.page2 = new Container(stageW, stageH);

		header = new Container().addTo(page2);
		v.page2.logo = new Label(m.title).addTo(header);
		content = new Container(300,300).addTo(page2);
		v.slider = new Slider().sca(.5).center(content);
		v.slider.currentValue = m.data[1];
		
		// footer = v.page2.tabs = new Tabs({tabs:[1,2]}).addTo(page2);
		footer = v.page2.tabs = footer.clone().addTo(page2);
		
		layout2 = new Layout(page2, [
			{object: header, marginTop:5,  maxWidth: 90, backgroundColor:blue},
			{object: content, marginTop:2, backgroundColor:blue},
			{object: footer, marginTop:2,  maxWidth: 90}
			], 2, yellow, true, null, stage);


		manager.add(layout2);
		
		v.pages = new Pages([
			{page:page1, swipe:[null, null, page2, page2]},
			{page:page2, swipe:[null, null, page1, page1]}
			], "slide", 500).addTo();
		
		manager.add([v.pages]);
	
	return v;
	}
	return app;
}(app||{});

