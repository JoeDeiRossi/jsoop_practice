
class RandomGenerator{
	constructor(min, max){ 
		this.min = min;
		if (min = undefined) {
			this.min = 1;
		}
		this.max = max;
		if (max = undefined) {
			this.max = 10;
		}
		this.randomNum = null;
		//takes in the minimum and maximum values
		//if they are not defined, it sets the minimum to 1, and the max to 10
		//makes storage for the random number
	}
	generate(){
		this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
		//make a random value between the minimum and maximum values
		//and store the number into the storage from the constructor
	}
	getRange(){
		var minMaxObject = {
			min: this.min,
			max: this.max
		}
		return minMaxObject;
		//return an object with min and max, min being the minimum value for the generator, max being the maximum value
		//returns a basic object literal
	}
	getNum(){
		return this.randomNum;
		//return the random number that was generated by generate()
	}
}