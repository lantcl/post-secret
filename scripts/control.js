

var app = function(app){  //module pattern
	app.makeController = function(m, v, stage){

		const c ={};

		// v.page1.tabs.change(()=>{
		// 	if (v.page1.tabs.text == 2){
		// 	v.pages.go(v.page2, "down");
		// 	}
		// });

		//v.dial.on("change" functionetc...) not chainable 
		// v.dial.change(()=>{ //chainable
		// 	m.data[0] = v.dial.currentValue;
		// 	m.updateData();
		// });

		// v.slider.change(()=>{ 
		// 	m.data[1] = v.slider.currentValue;   //basically this keeps the same values for the slider and dial if you refresh the page
		// 	m.updateData();
		// });
		
		const hs = new HotSpots([  //use loops whenn you need repeated stuff
			{
				page: v.page1,
				rect: v.page1.logo,
				//rect:[0,0,100,100], 
				call:()=>{zog("clicking on hotspot")}
			},
			{page: v.page2, rect: v.page2.logo,call:()=>{zog("clicking on hotspot 2")}},
			{page: v.page1, rect: v.page1.button, call:()=>{v.pages.go(v.page2, "down");}},
			{page: v.page2, rect: v.page2.tabs.buttons[0], call:()=>{v.pages.go(v.page1, "up");}
			}
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

