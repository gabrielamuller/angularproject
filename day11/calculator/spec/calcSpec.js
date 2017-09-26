describe('calculator', function () {     
   
    for (var i=5; i>0; i--){
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);

        it('should add two numbers together and return the result', function () {
            expect(Calculator.add(2, 2)).toBe(4);
        });

        it('should subtract two numbers and return the result', function () {
            expect(Calculator.sub(4, 4)).toBe(0);
        });

        it('should multply two numbers and return the result', function () {
           expect(Calculator.mul(4, 2)).toBe(8);
        });

        it('should divide two numbers and return the result', function () {
            expect(Calculator.div(10, 5)).toBe(2);
        });
    }
});