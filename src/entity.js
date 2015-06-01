var Schema = require('./schema');
var fn_checkId = require('./functions/entity').checkId;
var fn_set = require('./functions/entity').set;


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
Entity.prototype.getType = function() {
	return this.schema.name;
};

Entity.prototype.getId = function() {
	return this.data[this.id] || undefined;
};

Entity.prototype.fieldExist = function(name) {
	return this.schema.fieldExist(name);
};

Entity.prototype.set = function(data) {
	fn_set(this, data);
};

Entity.prototype.get = function() {
	return this.data;
};

module.exports = Entity;