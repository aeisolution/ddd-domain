//***************************
// src/function/schema.js
//***************************

//-------------------------------------------------------
// Schema init
function schema_init(schema, name, fields) {
	if(!name || !fields) {
		throw new Error('schema require a name and fields');
	}

	if(!typeof(fields)==='object') {
		throw new Error('fields object is required');
	}

	schema.name = name;

	for (var prop in fields) {
		schema.prop[prop] = {type: fields[prop]};
	}
}

module.exports.init = schema_init;

//-------------------------------------------------------
// Schema check field
function schema_fieldExist(schema, field) {
	if(!schema || !field) {
		throw new Error('schema and field must be defined');
	}
	
	if(!schema.prop[field]) { 
		return false;
	} else {
		return true;
	}
}

module.exports.fieldExist = schema_fieldExist;