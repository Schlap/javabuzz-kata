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

  	it('three', function (){
  		javabuzz = new Javabuzz();
  		expect(javabuzz.isDivisibleByThree(3)).toBe(true);
  	});

  });


 
  describe('should say', function (){

    it('Javabuzz when divisible by 15', function(){
      javabuzz = new Javabuzz
      expect(javabuzz.say(15)).toEqual('Javabuzz')

        });
    });
});
