describe('Javabuzz', function(){

	var javabuzz

	describe('should be divisible by', function (){

		it('fifteen', function(){
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
		});
	});
});