var app = function(app){  //module pattern
	app.makeView = function(m, stage){
		const v = {};
		
		var labelColors = ["#91193D","#788970","#64163A","#47163A","#301B2D"];

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
		
		let footer2 = v.page2.tabs = new Tabs({
			tabs:[new Button({
				icon: pizzazz.makeIcon("home", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("home", "white").sca(.6)
			}), 
			new Button({
				icon: pizzazz.makeIcon("close", "white").sca(.5).rot(45),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6).rot(45)
			})
			]
		}).addTo(page2);
		
		const layout2 = new Layout(page2, [
			{object: header2, marginTop:5,  maxWidth: 90,},
			{object: content2, marginTop:2},
			{object: footer2, marginTop:2,  maxWidth: 90}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout2);
		

		////////////PAGE 3/////// select secret type
		const page3 = v.page3 = new Container(stageW, stageH);

		let header3 = new Container().addTo(page3);
		let instruction1 = new Label({
			text: "post a new secret",
			font: "courier",
			color: white
		}).addTo(header3);
		
		let content3 = new Container(300,300).addTo(page3);
		
		var bubbleBox = v.page3.bubbleSecret = new Rectangle(100, 170, "white").centerReg(content3).mov(-60);
		var ransomBox = v.page3.ransomSecret = new Rectangle(100, 170, "white").centerReg(content3).mov(60);
		//var bg = frame.asset("bg-test.jpg").centerReg(page3).sca(.2);
		
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
		}).addTo(page3);
		
		const layout3 = new Layout(page3, [
			{object: header3, marginTop:5,  maxWidth: 90,},
			{object: content3, marginTop:2},
			{object: footer3, marginTop:2,  maxWidth: 90}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout3);
		

		////////////PAGE 4/////// bubble secret
		
		const page4 = v.page4 = new Container(stageW, stageH);
		
		let header4 = new Container().addTo(page4);
		
		let closeButton = v.page4.close = new Button({
				icon: pizzazz.makeIcon("close", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
			}).addTo(header4);

		let instruction2 = new Label({
			text: "use the space bar to add spacing",
			font: "courier",
			color: white
		}).addTo(header4);
		
		let content4 = new Container(300,300).addTo(page4);
		
    	
		//speech bubbles//////
		var speechBubble1 = new Label({
        	text:"", 
        	backgroundColor:white,
        	corner: 10,
        	color: "#91193D"
	    }).center(content4);

	    var speechBubble2 = new Label({
	        text:"", 
	        backgroundColor:white,
	        corner: 10,
	        color: "#91193D"
	    }).center(content4);
		
		/////keyboard///////
		var keyboard = new Keyboard({
        	backgroundColor:"#91193D",
        	corner:45,
        	shadowColor: -1,
       		labels:[speechBubble1,speechBubble2]
    	});

    	var text1Event = speechBubble1.on("mousedown", activate);
	    var text2Event = speechBubble2.on("mousedown", activate);
	    
	    function activate(e) {
	        keyboard.show();
	        speechBubble1.off("mousedown", text1Event);
	        speechBubble2.off("mousedown", text2Event);
	    }
	    keyboard.on("close", function() {
	        speechBubble1.on("mousedown", text1Event);
	        speechBubble2.on("mousedown", text2Event);
	    });


		const layout4 = new Layout(page4, [
			{object: header4, marginTop:5,  maxWidth: 90},
			{object: content4, marginTop:2}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout4);

		//////////PAGE 5/////// ransom secret
		//ransom//////

		const page5 = v.page5 = new Container(stageW, stageH);
		
		let header5 = new Container().addTo(page5);
		
		closeButton = v.page5.close = new Button({
				icon: pizzazz.makeIcon("close", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
			}).addTo(header5);

		let instruction3 = new Label({
			text: "use the space bar to add spacing",
			font: "courier",
			color: white
		}).addTo(header5);
		
		let content5 = new Container(300,300).addTo(page5);

    	var letterBox = new Container().addTo(content5);

    	function createLetter(letter){
        label = new Label({
            text: letter,
            size: rand(30, 60),
            color: "white",
            font: "courier",
            backgroundColor: labelColors[rand(labelColors.length-1)],
            fontOptions:"italic bold"
        }).centerReg(letterBox).rot(rand(-7, 7));
    	}
		
		frame.on("keydown", function(e){
        if (e.keyCode == 8 || e.keyCode == 46){
            letterBox.removeChildAt(letterBox.numChildren -1);
            stage.update();
        }
        else if (e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 20){
            // zog("do NOTHING");
        }
        else if (e.keyCode == 32){
            new Rectangle(50,50).alp(0).addTo(letterBox);
            stage.update();
        } else {
             
            createLetter(event.key);

            if (letterBox.numChildren >= 20){
                label.pos(70*(letterBox.numChildren-20),200);
                stage.update();
            } else if (letterBox.numChildren >= 10){
                label.pos(70*(letterBox.numChildren-9),100);
                stage.update();
            } else {
                label.loc(70*letterBox.numChildren);
                stage.update();
            }
        
        }
    	});

		layout5 = new Layout(page5, [
			{object: header5, marginTop:5,  maxWidth: 90,},
			{object: content5, marginTop:2},
			], 2, "#3E303B", true, null, stage);

		manager.add(layout5);

		v.pages = new Pages([
			{page:page1, swipe:[null, null, page1, page2]},
			{page:page2, swipe:[null, null, page1, page3]},
			{page:page3, swipe:[null, null, page2, page3]},
			{page:page4},
			{page:page5},
			], "slide", 500).addTo();
		
		manager.add(v.pages);
	
	return v;
	}
	return app;
}(app||{});

