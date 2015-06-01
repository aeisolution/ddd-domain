var chai = require('chai'),
		expect = chai.expect,
		domain = require('../src/domain');

describe('Domain', function() {
	var myDomain;
	
	beforeEach(function(){
		myDomain = new domain('myD');
	});
					 
	// Domain space
	it('should exist', function() {
		expect(myDomain).to.exist;
	});

	it('require a name property not null', function() {
		expect(myDomain).to.include.keys('name');

		expect(myDomain.name).to.be.ok;
	});
	
	it('should contains two properties: entities and objectsValue', function() {
		expect(myDomain).to.include.keys('entities', 'objectsValue');
	});
	
	// Entities property
	describe('Entities', function(){
		it('should be an array', function(){
			expect(myDomain.entities).to.be.an('array');
		});
	});

	// Entities property
	describe('ObjectsValue', function(){
		it('should be an array', function(){
			expect(myDomain.objectsValue).to.be.an('array');
		});
	});
	
	//Methods
	describe('Methods that should exist:', function(){
		it('"addEntity"', function(){
			expect(myDomain.addEntity).to.exist;
		});

		it('"addObjectValue"', function(){
			expect(myDomain.addObjectValue).to.exist;
		});
		
		it('"addValidationRule"', function(){
			expect(myDomain.addValidationRule).to.exist;
		});
	});
	
});