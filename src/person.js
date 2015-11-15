export default class Person {
    constructor(val) {
	this.personName = val;
    }
    
    get name() {
	return this.personName;
    }
    
    set name(val) {
	this.personName = val;
    }
} 
