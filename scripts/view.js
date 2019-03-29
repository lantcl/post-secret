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
					width: 40,
					height:40,
					shadowBlur: -1,
					label:"",
					corner:20,
					font: "courier",
					backgroundColor: "#47163A",
					rollBackgroundColor: "#330033"
				}
			}
		}
		
	 
		
		////////////PAGE 1///////
		const page1 = v.page1 = new Container(stageW, stageH);
		
		let header = new Container().addTo(page1);
		// v.page1.logo =  new Label(m.title).addTo(header);
		v.page1.logo = frame.asset("logo.png").addTo(header);
		
		let content = new Container(300,300).addTo(page1);
		
		let startButton = v.page1.button = new Button({
			label: "enter",
			size: 10,
			corner: 2,
			width: 150,
			height: 50
		}).center(content);


		const layout1 = new Layout(page1, [
			{object: header, marginTop:10,  maxWidth: 90},
			{object: content, marginTop:2}

			], 2, "#3E303B", true, null, stage);

		manager.add(layout1);

		////////////PAGE 2///////
		const page2 = v.page2 = new Container(stageW, stageH);

		let header2 = new Container().addTo(page2);
		let logo2 = v.page2.logo = frame.asset("page2-header.png").addTo(header2);
		let content2 = new Container(300,300).addTo(page2);
		
		//var bg = frame.asset("bg-test.jpg").addTo(content);
		
		let footer2 = v.page2.tabs = new Tabs({
			tabs:[new Button({
				icon: pizzazz.makeIcon("home", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("home", "white").sca(.6)
			}), 
			new Button({
				icon: pizzazz.makeIcon("plus", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("plus", "white").sca(.6)
			})
			]
		}).addTo(page2);
		
		const layout2 = new Layout(page2, [
			{object: header2, marginTop:5,  maxWidth: 90,},
			{object: content2, marginTop:2},
			{object: footer2, marginTop:2,  maxWidth: 90}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout2);
		

		////////////PAGE 3///////
		const page3 = v.page3 = new Container(stageW, stageH);

		let header3 = new Container().addTo(page3);
		v.page3.logo = new Label({
			text: "add a new secret",
			font: "courier",
			color: white
		}).addTo(header3);
		let content3 = new Container(300,300).addTo(page3);
		
		var bg = frame.asset("bg-test.jpg").centerReg(page3).sca(.2);
		
		let footer3 = v.page3.tabs = new Tabs({
			tabs:[new Button({
				icon: pizzazz.makeIcon("home", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("home", "white").sca(.6)
			}), 
			new Button({
				icon: pizzazz.makeIcon("close", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
			})
			]
		}).addTo(content3);
		
		const layout3 = new Layout(page3, [
			{object: header3, marginTop:5,  maxWidth: 90,},
			{object: content3, marginTop:2},
			{object: footer3, marginTop:2,  maxWidth: 90}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout3);
		
		v.pages = new Pages([
			{page:page1, swipe:[null, null, page1, page2]},
			{page:page2, swipe:[null, null, page1, page3]},
			{page:page3, swipe:[null, null, page2, page3]},
			], "slide", 500).addTo();
		
		manager.add(v.pages);
	
	return v;
	}
	return app;
}(app||{});

