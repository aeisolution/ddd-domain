// interal Methods
var fn_init = require('./functions/schema').init;
var fn_fieldExist = require('./functions/schema').fieldExist;

function Schema(name, fields) {
	var self = this; 
	
	if(!name 		|| !typeof(name)==='String' || 
		 !fields 	|| !typeof(fields)==='Object') {
			throw new Error("schema require a name and a fields object");
	}

	this.name = name;
	this.prop = {};
	
	
	//execute methods
	fn_init(self, name, fields);
}

// Methods ----------------------------
Schema.prototype.fieldExist = function(field) {
	var self = this;
	
	return fn_fieldExist(self, field);
};

module.exports = Schema;