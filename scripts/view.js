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
		
		//let imgs = ["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];
		// let imgs = ["bg1.jpg","bg2.jpg"];
		// frame.asset("bg2.jpg").sca(.2).alp(.7).addTo(page4);
		// frame.asset("bg1.jpg").sca(.2).alp(.7).addTo(page4);

	 // 	function changeBackground(page){
	 // 		// bg.removeFrom();
	 // 		let currentbg = imgs[rand(imgs.length-1)];
	 // 		frame.asset(currentbg).top();
	 // 		stage.update();
	 // 	}
		
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
		
		let footer2 = new Container(300,100).addTo(page2); 

		v.page2.tabs = new Tabs({
			tabs:[new Button({
				icon: pizzazz.makeIcon("home", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("home", "white").sca(.6)
			}), 
			new Button({
				icon: pizzazz.makeIcon("close", "white").sca(.5).rot(45),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6).rot(45)
			})
			]
		}).center(footer2);
		
		const layout2 = new Layout(page2, [
			{object: header2, marginTop:5,  maxWidth: 90,},
			{object: content2, marginTop:2, backgroundColor:"darkslategrey"},
			{object: footer2, marginTop:2,  maxWidth: 90}
			], 2, "#3E303B", true, null, stage);

		let messageColors = series("floralwhite", "ghostwhite","whitesmoke","linen","antiquewhite","mintcream");

		for (var i =0; i<5; i++){
			new Rectangle(60,100, messageColors()).center(content2).rot(rand(-7, 7)).mov(rand(-180, 180),rand(-100, 100));
		}

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
		
		let footer3 =  new Container(300,100).addTo(page3);
		let home = v.page3.home = new Button({
				icon: pizzazz.makeIcon("home", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("home", "white").sca(.6)
			}).centerReg(footer3);
		
		
		const layout3 = new Layout(page3, [
			{object: header3, marginTop:5,  maxWidth: 90,},
			{object: content3, marginTop:2},
			{object: footer3, marginTop:2, maxWidth: 90}
			], 2, "#3E303B", true, null, stage);


		manager.add(layout3);
		

		////////////PAGE 4/////// bubble secret
		
		const page4 = v.page4 = new Container(stageW, stageH);
		const bgContainer = new Container(stageW, stageH).addTo(page4);
		
		let content4 = new Container(300,300).addTo(page4);
		
		// bg.addTo(page4);
		let imgs = ["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];
		let bgseries = series(imgs);

		for(var i =0; i<imgs.length; i++){
			frame.asset(imgs[i]).sca(.2).alp(1).centerReg(bgContainer);
		}

	 	function changeBackground(page){
	 		// bg.removeFrom();
	 		let currentbg = bgseries();
	 		zog(currentbg);
	 		frame.asset(currentbg).top();
	 		stage.update();
	 	}
		

		let footer4 = new Container().addTo(page4);
		let controls4 = new Container().addTo(page4);

		let instruction21 = new Label({
			text: "type a message",
			font: "courier",
			color: white,
			backgroundColor: "#91193D"
		}).addTo(footer4);

		let instruction2 = new Label({
			text: "click a bubble to type in it",
			font: "courier",
			color: white,
			backgroundColor: "#91193D"
		}).addTo(footer4).mov(null, 60);
		
		// let closeButton = v.page4.close = new Button({
		// 		backgroundColor: "#91193D",
		// 		rollBackgroundColor:"#47163A",
		// 		icon: pizzazz.makeIcon("close", "white").sca(.5),
		// 		rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
		// 	}).addTo(controls4);

		var save = new Label({
		   text:"save",
		   size:20,
		   font: "courier",
		   color: "white",
		});
		var background = new Label({
		   text:"background",
		   size:20,
		   font: "courier",
		   color: "white",
		});
		

		let controls = v.controls = new Tabs({
			tabs:[
			new Button({
				label: background,
				corner: 2,
				width: 150,
				height: 50,
				}),
			new Button({
				label: save,
				corner: 2,
				width: 150,
				height: 50,
				}),
			new Button({
				backgroundColor: "#91193D",
				rollBackgroundColor:"#47163A",
				icon: pizzazz.makeIcon("close", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
				})
			]
		}).addTo(controls4);

		controls.on("mousedown", function(){
					changeBackground(page4);
				});		
    	
    	let bubbleimg = new Rectangle({
    		color:"white",
    		corner: 25,
    		width: 200, 
    		height:200
    		}).centerReg(content4);

		//speech bubbles//////
		var speechBubble1 = new Label({
        	text:"", 
        	backgroundColor:white,
        	corner: 10,
        	size:20,
        	align: "center",
        	color: "#91193D"
	    }).center(content4).mov(null, -50);

	    var speechBubble2 = new Label({
	        text:"", 
	        size:20,
	        align: "center",
	        backgroundColor:white,
	        corner: 10,
	        color: "#91193D"
	    }).center(content4);
		
		var speechBubble3 = new Label({
	        text:"", 
	        size:20,
	        align: "center",
	        backgroundColor:white,
	        corner: 10,
	        color: "#91193D"
	    }).center(content4).mov(null, -50);

		/////keyboard///////
		var keyboard = new Keyboard({
        	backgroundColor:"#91193D",
        	corner:0,
        	shadowColor: -1,
        	place: false,
       		labels:[speechBubble1,speechBubble2, speechBubble3]
    	});

    	var text1Event = speechBubble1.on("mousedown", activate);
	    var text2Event = speechBubble2.on("mousedown", activate);
	    var text3Event = speechBubble3.on("mousedown", activate);
	    
	    function activate(e) {
	        keyboard.show();
	        speechBubble1.off("mousedown", text1Event);
	        speechBubble2.off("mousedown", text2Event);
	        speechBubble3.off("mousedown", text3Event);
	    }
	    keyboard.on("close", function() {
	        speechBubble1.on("mousedown", text1Event);
	        speechBubble2.on("mousedown", text2Event);
	        speechBubble3.on("mousedown", text3Event);
	    });


		const layout4 = new Layout(page4, [
			{object: controls4, marginTop:2, maxWidth: 90},
			{object: content4},
			{object: footer4,  maxWidth: 90},
			], 2, "#3E303B", true, null, stage);


		manager.add(layout4);

		//////////PAGE 5/////// ransom secret
		//ransom//////

		const page5 = v.page5 = new Container(stageW, stageH);
		
		let header5 = new Container().addTo(page5);
		let controls5 = new Container().addTo(page5);
		
		let instruction31 = new Label({
			text: "type a message",
			font: "courier",
			color: white
		}).addTo(header5).alp(.3);

		let instruction3 = new Label({
			text: "use the space bar to fix gaps",
			font: "courier",
			color: white
		}).addTo(header5).mov(null, 60).alp(.3);

		controls.clone().addTo(controls5);

		closeButton = v.page5.close = new Button({
				backgroundColor: "#91193D",
				rollBackgroundColor:"#47163A",
				icon: pizzazz.makeIcon("close", "white").sca(.5),
				rollIcon: pizzazz.makeIcon("close", "white").sca(.6)
			}).addTo(header5).pos(0,0,true);
		
		let content5 = new Container(300,300).addTo(page5);

    	var letterBox = new Container().addTo(content5);

    	function createLetter(letter){
        label = new Label({
            text: letter,
            size: rand(12, 20),
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
            new Rectangle(20,20).alp(0).addTo(letterBox);
            stage.update();
        } else {
             
            createLetter(event.key);

            if (letterBox.numChildren >= 20){
                label.pos(30*(letterBox.numChildren-19),100);
                stage.update();
            } else if (letterBox.numChildren >= 10){
                label.pos(30*(letterBox.numChildren-10),50);
                stage.update();
            } else {
                label.loc(30*letterBox.numChildren);
                stage.update();
            }
        
        }
    	});

		layout5 = new Layout(page5, [
			{object: header5, marginTop:5, maxWidth: 90,},
			{object: controls5, maxWidth: 90},
			{object: content5, marginTop:2,  maxWidth: 90},
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

