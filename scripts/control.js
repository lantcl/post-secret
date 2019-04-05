

var app = function(app){  //module pattern
	app.makeController = function(m, v, stage){

		const c ={};

		// v.page1.tabs.change(()=>{
		// 	if (v.page1.tabs.text == 2){
		// 	v.pages.go(v.page2, "down");
		// 	}
		// });
		
		const hs = new HotSpots([  //use loops whenn you need repeated stuff
			// {page: v.page1,rect: v.page1.logo,call:()=>{zog("clicking on hotspot")}},
			{page: v.page3, rect: v.page3.bubbleSecret,call:()=>{v.pages.go(v.page4, "left");}},
			{page: v.page3, rect: v.page3.ransomSecret,call:()=>{v.pages.go(v.page5, "right");}},
			{page: v.page1, rect: v.page1.button, call:()=>{v.pages.go(v.page2, "down");}},
			{page: v.page3, rect: v.page3.home, call:()=>{v.pages.go(v.page1, "up");}},
			{page: v.page2, rect: v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}},
			{page: v.page2, rect: v.page2.tabs.buttons[1], call:()=>{v.pages.go(v.page3, "down");}}
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

