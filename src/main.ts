export default {
	fizzbuzz() {
		var array = []

		for (var c = 1; c <= 100; c++) {
			var result = ""

			if (c % 3 == 0) {
				result += "fizz"
			}

			if (c % 5 == 0) {
				result += "buzz"
			}

			array.push(result == "" ? c : result);
		}

		return array;
	},

	notFizzbuzz() {
		var myVar = 0;

		return myVar + 1;
	}
}
