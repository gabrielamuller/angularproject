describe('FizzBuzz', function() {
    	it('should check if number is divisible by 3 and 5', function() {
		expect(FizzBuzz(15)).toBe("FizzBuzz")
	});
	
	it('should check if number is divisible by 3', function() {
		expect(FizzBuzz(27)).toBe("Fizz")
	});
	
	it('should check if number is divisible by 5', function() {
		expect(FizzBuzz(50)).toBe("Buzz")
	});
	
	it('should check if number is not divisible by 3 or 5', function() {
		expect(FizzBuzz(2)).toBe(2)
	});
});