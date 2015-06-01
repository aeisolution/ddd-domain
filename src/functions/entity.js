//***************************
// src/function/entity.js
//***************************

// Check Id
function fn_checkId(entity, fieldId) {
	if(!entity || !entity.schema || !fieldId) {
		throw new Error("to init an Entity you must configure schema and fieldId");
	}

	if(entity.schema.fieldExist(fieldId)===true) {
		return fieldId;
	} else {
		throw new Error("fieldId must be in the schema");
	}
	return '';
}

module.exports.checkId = fn_checkId;


// Set data
function fn_set(entity, data) {
	if(!entity || !entity.schema) {
		throw new Error("Entity and the schema must be defined to set data");
	}

	for(var prop in data) {
		// set only the field that are defined in the schema
		if(entity.fieldExist(prop)===true) {
			entity.data[prop] = data[prop];
		}
	}
}

module.exports.set = fn_set;