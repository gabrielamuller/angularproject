describe('whatCanIDrink', function() {
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!")
	});
	
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(10)).toBe("Drink Toddy")
	});
	
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(17)).toBe("Drink Coke")
	});
	
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(20)).toBe("Drink Beer")
	});
	
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(30)).toBe("Drink Whiskey")
	});
	
	it('should check the age and return a drink for the age', function() {
		expect(whatCanIDrink(135)).toBe("Sorry. I can't tell what drink because that age is incorrect!")
	});
});