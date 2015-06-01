var chai = require('chai'),
		expect = chai.expect,
		domain = require('../src/domain'),
		entity = require('../src/entity');

describe('Entity', function() {
	var myEntity;

	//************************
	// Entity space
	//************************

	// Properties ----------------------------------------------
	describe('should have a property: "schema"', function(){
		beforeEach(function(){
			myEntity = new entity('contact','id',{id: 'Number', nome: 'String'});
		});
		
		it('that is an object', function() {
			expect(myEntity).to.have.ownProperty('schema');			
			expect(myEntity.schema).to.be.an('object');
		});
	
		it('that contains a property "name"', function() {
			var schema = myEntity.schema;
						
			expect(schema).to.have.ownProperty('name');
		});		

		it('that contains a property "prop"', function() {
			var schema = myEntity.schema;
						
			expect(schema).to.have.ownProperty('prop');
			expect(schema.prop).to.be.an('object');
		});		
	});
	
	// Constructor ----------------------------------------------
	describe('constructor', function(){
		it('require three args (name, id, fields)', function() {
			expect(entity).to.throw(Error);		
			expect(entity.bind(this,"nome")).to.throw(Error);		
			expect(entity.bind(this,"nome", "id")).to.throw(Error);		
			expect(entity.bind(this,"nome", "id", {nome: 'String'})).to.throw(Error);		
			expect(entity.bind(this,"nome", "id", {id: 'Number'})).not.to.throw(Error);		
		});
		
		var contact;
		beforeEach(function(){
			contact = new entity('ContactName', 'ContactId', 
													 {ContactId: 'Number', name: 'String'});
		});

		it('first arg is the schema name ', function() {
			expect(contact.schema.name).to.equal('ContactName');
		});

		it('second arg is entity fieldId name ', function() {
			expect(contact.id).to.equal('ContactId');
		});
		
		it('third arg is an object with the schema fields ', function() {
			expect(contact.schema.fieldExist('ContactId')).to.be.true;
			expect(contact.schema.fieldExist('name')).to.be.true;
		
		});
		
		
	});
});
