(function() {
    'use strict';

        window.calc = window.calc || {};


        // TODO: Your tests go here!
        var expect = chai.expect;


        describe('Array test', function() {
            it('Should get the result of the function from added numbers in the array.', function() {
                var result = window.calc.sum([3, 7, 9]);
                expect(result).to.equal(19);
            });

            it('Should determine if there are no arguments it is equal to 0.', function() {
                var result = window.calc.sum();
                expect(result).to.equal(0);
            });

            it('Should determine if the argument is a string the result is untrue.', function() {
                var result = window.calc.sum('Rodolfo');
                expect(result).to.equal(false);
            });


        });


        describe('Factorial Function Test', function() {
            it('Should multiply all numbers up to a chosen factorial', function() {
                var testResult = window.calc.factorial(5);
                expect(testResult).to.equal(120);
            });
            it('Should return false if a string is put into the argument.', function(){
              var testResult = window.calc.sum('number');
              expect(testResult).to.be.(false);
            })
            it('Should ')

        });

        xdescribe('Basic test', function() {

                it('Should know that 1 is equal to 1.', function() {
                    expect(1).to.equal(1);
                });
            });


})();
