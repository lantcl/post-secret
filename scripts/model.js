

var app = function(app){  //module pattern
	app.makeModel = function(){
		const m ={};
		
		//localStorage.clear();
		if (localStorage && localStorage.exampleData){
			m.data = JSON.parse(localStorage.exampleData);
		} else {
			m.data = [0, 0];
		}
		
		m.updateData = function(){
			zog("updating");
			localStorage.exampleData = JSON.stringify(m.data);
		}

		m.title= "Post Secret";

		return m;
	}
	return app;
}(app||{});

