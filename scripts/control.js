

var app = function(app){  //module pattern
	app.makeController = function(m, v, stage){

		const c ={};

		// v.page1.tabs.change(()=>{
		// 	if (v.page1.tabs.text == 2){
		// 	v.pages.go(v.page2, "down");
		// 	}
		// });
		function changeBackground(seriesname){
	 		let currentbg = seriesname;
	 		frame.asset(currentbg).top();
	 		stage.update();
	 	}
		
		function activate1(keyboard) {
	        v.keyboard1.show();
	        v.speechBubble1.off("mousedown", text1Event);
	        v.speechBubble2.off("mousedown", text2Event);
	        v.speechBubble3.off("mousedown", text3Event);
	        v.instructions4.alp(0);
	    }
	    
	    v.keyboard1.on("close", function() {
	        v.speechBubble1.on("mousedown", text1Event);
	        v.speechBubble2.on("mousedown", text2Event);
	        v.speechBubble3.on("mousedown", text3Event);
	        v.instructions4.alp(1);
	    });

		var text1Event = v.speechBubble1.on("mousedown", activate1);
	    var text2Event = v.speechBubble2.on("mousedown", activate1);
	    var text3Event = v.speechBubble3.on("mousedown", activate1);
		


		const hs = new HotSpots([  //use loops whenn you need repeated stuff
			// {page: v.page1,rect: v.page1.logo,call:()=>{zog("clicking on hotspot")}},
			{page: v.page3, rect: v.page3.bubbleSecret,call:()=>{v.pages.go(v.page4, "left");}},
			{page: v.page3, rect: v.page3.ransomSecret,call:()=>{v.pages.go(v.page5, "right");}},
			{page: v.page1, rect: v.page1.button, call:()=>{v.pages.go(v.page2, "down");}},
			{page: v.page3, rect: v.page3.home, call:()=>{v.pages.go(v.page1, "up");}},
			{page: v.page2, rect: v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
			{page: v.page2, rect: v.page2.tabs.buttons[1], call:()=>{v.pages.go(v.page3, "down");}},
			{page: v.page4, rect: v.page4.controls.buttons[2], call:()=>{v.pages.go(v.page3, "right");}},
			{page: v.page5, rect: v.page5.controls.buttons[2], call:()=>{v.pages.go(v.page3, "left");}},
			{page: v.page4, rect: v.page4.controls.buttons[0], call:()=>{changeBackground(v.bgseries1());}},
			{page: v.page5, rect: v.page5.controls.buttons[0], call:()=>{changeBackground(v.bgseries2());}}
		]);
		//hs.show();

		frame.on("resize", ()=>{

			v.manager.resize();

			stage.update();
		});
		return c;
	}
	return app;
}(app||{});

