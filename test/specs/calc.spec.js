(function() {
    'use strict';

    window.calc = window.calc || {};

    // TODO: Your tests go here!
    var expect = chai.expect;

    
    describe('My test', function(){
      it('Should get the result of the function from added numbers in the array', function(){
        var result = window.calc.sum([3,7,9]);
        expect(result).to.equal(19);
      });

        it('Should determine if there are no arguments it is undefined', function(){
          var result = window.calc.sum();
          expect(result).to.equal(undefined);
        });
      });

    describe('Basic test', function(){

      it('Should know that 1 is equal to 1', function(){
        expect(1).to.equal(1);
      });
    });


})();
