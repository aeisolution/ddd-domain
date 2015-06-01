function Domain(name) {
	if(!name) {
		throw new Error("domain require a name");
	}

	this.name = name;
	
	this.entities = [];
	this.objectsValue = [];
	this.validationRules = [];
}

//Methods ---------------------------
Domain.prototype.addEntity = function() {};
Domain.prototype.addObjectValue = function() {};
Domain.prototype.addValidationRule = function() {};

module.exports = Domain;