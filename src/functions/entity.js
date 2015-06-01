//***************************
// src/function/entity.js
//***************************

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