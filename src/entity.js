var Schema = require('./schema');
var fn_checkId = require('./functions/entity').checkId;

function Entity(name, id, fields) {
	var self = this; 
	
	if(!name || !id) {
		throw new Error("entity require a name and an id");
	}

	this.schema = new Schema(name, fields);
	this.id = fn_checkId(self, id);
	
	// Properties
	this.data = {};
	
}

// Methods ----------------------------

module.exports = Entity;