import { expect } from 'chai';
import main from "../src/main.ts";

describe('FizzBuzz', function() {
	var fizzbuzz = main.fizzbuzz();

	it("should return input numbers except for multiples of 3 or 5", function () {
		for (var c = 1; c <= 100; c++) {
			if (c % 3 != 0 && c % 5 != 0) {
				expect( fizzbuzz[c - 1] ).to.be.equal( c );
			}
		}
	})

	it("should return fizz for multiples of 3 but not 5", function () {
		for (var c = 1; c <= 100; c++) {
			if (c % 3 == 0 && c % 5 != 0) {
				expect( fizzbuzz[c - 1] ).to.be.equal( "fizz" );
			}
		}
	})

	it("should return buzz for multiples of 5 but not 3", function () {
		for (var c = 1; c <= 100; c++) {
			if (c % 3 != 0 && c % 5 == 0) {
				expect( fizzbuzz[c - 1] ).to.be.equal( "buzz" );
			}
		}
	})

	it("should return fizzbuzz for multiples of 3 and 5", function () {
		for (var c = 1; c <= 100; c++) {
			if (c % 3 == 0 && c % 5 == 0) {
				expect( fizzbuzz[c - 1] ).to.be.equal( "fizzbuzz" );
			}
		}
	})
});
