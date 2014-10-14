describe('Javabuzz', function(){

  var javabuzz

  describe('should be divisible by', function (){

	it('fifteen', function(){
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
	});

	it('five', function(){
  		javabuzz = new Javabuzz();
 		 expect(javabuzz.isDivisibleByFive(5)).toBe(true);
  	});

  	it('', function (){
  		javabuzz = new Javabuzz();
  		expect(javabuzz.isDivisibleByThree(3)).toBe(true);
  	});

  });
});