

var app = function(app){  //module pattern
	app.makeController = function(m, v, stage){

		const c ={};

		//change background
		function changeBackground(seriesname){
	 		let currentbg = seriesname;
	 		frame.asset(currentbg).top();
	 		stage.update();
	 	}

	 	//save image
		function saveImage1(){
			v.instructions4.alp(0);
	 		v.page4.controls.alp(0);
	 		v.page4.keyboard.hide();
	 		cacheStage();
	 		v.instructions4.alp(1);
	 		v.page4.controls.alp(1);
	 		v.page4.keyboard.show();
	 	}
		
		function saveImage2(){
			v.instructions5.alp(0);
	 		v.page5.controls.alp(0);
	 		v.page5.keyboard.hide();
	 		v.page4.keyboard.hidePlace()
	 		cacheStage();
	 		v.instructions5.alp(1);
	 		v.page5.controls.alp(1);
	 		v.page5.keyboard.show();
		}
		
		// function cacheStage(){
		// 	stage.cache();
		// 	var bitmap = new Bitmap(stage.cacheCanvas);
		// 	stage.uncache();
		// }

		function cacheStage(){
			var loader = new Loader();
			var img = loader.save({
				content: stage, 
				type:"jpeg"
			});
			loader.dispose();
			v.instructions4.alp(1);
	 		v.page4.controls.alp(1);
		}

	 	//////////////KEYBOARDS///////////////////

		function activate1() {
	        v.page4.keyboard.show();
	        v.speechBubble1.off("mousedown", text1Event);
	        v.speechBubble2.off("mousedown", text2Event);
	        v.speechBubble3.off("mousedown", text3Event);
	        v.instructions4.alp(0);
	    }
	    
	    function activate2() {
	        v.page5.keyboard.show();
	        v.instructions5.alp(0);
	    }

	    v.page4.keyboard.on("close", function() {
	        v.speechBubble1.on("mousedown", text1Event);
	        v.speechBubble2.on("mousedown", text2Event);
	        v.speechBubble3.on("mousedown", text3Event);
	        v.instructions4.alp(1);
	    });

	    v.page5.keyboard.on("close", function() {
	        v.instructions5.alp(1);
	        createLetter("e")
	    });

	    //speech bubble
		var text1Event = v.speechBubble1.on("mousedown", activate1);
	    var text2Event = v.speechBubble2.on("mousedown", activate1);
	    var text3Event = v.speechBubble3.on("mousedown", activate1);
		//ransom
	    var text4Event = v.page5.on("mousedown", activate2);

		//////////////RANSOM -page5///////////////////
		var labelColors = ["#91193D","#788970","#64163A","#47163A","#301B2D"];

		function createLetter(letter){
        label = new Label({
	            text: letter,
	            size: rand(12, 20),
	            color: "white",
	            font: "courier",
	            backgroundColor: labelColors[rand(labelColors.length-1)],
	            fontOptions:"italic bold"
	        }).centerReg(v.page5.letterBox).rot(rand(-7, 7));
    	}
		
		//v.page5.keyboard
		v.page5.keyboard.on("keydown", function(e){
        if (e.letter == 8 || e.letter == 46){
            v.page5.letterBox.removeChildAt(v.page5.letterBox.numChildren -1);
            stage.update();
        }
        else if (e.letter == 16 || e.letter == 17 || e.letter == 20){
            // zog("do NOTHING");
        }
        else if (e.letter == 32){
            new Rectangle(20,20).alp(0).addTo(v.page5.letterBox);
            stage.update();
        } else {
             
            createLetter(event.key);

            if (v.page5.letterBox.numChildren >= 20){
                label.pos(30*(v.page5.letterBox.numChildren-19),100);
                stage.update();
            } else if (v.page5.letterBox.numChildren >= 10){
                label.pos(30*(v.page5.letterBox.numChildren-10),50);
                stage.update();
            } else {
                label.loc(30*v.page5.letterBox.numChildren);
                stage.update();
            }
        

        }
    	});

		const hs = new HotSpots([  
			//secret style choice
			{page: v.page3, rect: v.page3.bubbleSecret,call:()=>{v.pages.go(v.page4, "left");}},
			{page: v.page3, rect: v.page3.ransomSecret,call:()=>{v.pages.go(v.page5, "right");}},
			//back to home
			{page: v.page3, rect: v.page3.home, call:()=>{v.pages.go(v.page1, "up");}},
			//Enter site
			{page: v.page1, rect: v.page1.button, call:()=>{v.pages.go(v.page2, "down");}},
			//mid navigation
			{page: v.page2, rect: v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
			{page: v.page2, rect: v.page2.tabs.buttons[1], call:()=>{v.pages.go(v.page3, "down");}},
			//back to secret style choice
			{page: v.page4, rect: v.page4.controls.buttons[2], call:()=>{v.pages.go(v.page3, "right");}},
			{page: v.page5, rect: v.page5.controls.buttons[2], call:()=>{v.pages.go(v.page3, "left");}},
			//background changes
			{page: v.page4, rect: v.page4.controls.buttons[0], call:()=>{changeBackground(v.bgseries1());}},
			{page: v.page5, rect: v.page5.controls.buttons[0], call:()=>{changeBackground(v.bgseries2());}},
			//saves images
			{page: v.page4, rect: v.page4.controls.buttons[1], call:()=>{saveImage1();}},
			{page: v.page5, rect: v.page5.controls.buttons[1], call:()=>{saveImage2();}}
		]);


		frame.on("resize", ()=>{

			v.manager.resize();
			v.page4.keyboard.resize();
			v.page5.keyboard.resize();
			stage.update();
		});
		return c;
	}
	return app;
}(app||{});

