arith = {
	/**
	 * @param  {number} a First parameter for addition operation
	 * @param  {number} b Second parameter for addition operation
	 * @return {number} addition Result
	 */
	getSum : function (a, b){
		var addition = a+b;
		return addition;
	},
	/**
	 * @param  {number} a First parameter for subtractin operation
	 * @param  {number} b Second parameter for subtractin operation
	 * @return {number} subtractin Result
	 */
	getDiffernce : function (a, b){
		var subtractin = a-b;
		return subtractin;
	},
	/**
	 * @param  {number} a First parameter for multiplication operation
	 * @param  {number} b Second parameter for multiplication operation
	 * @return {number} multiplication Result
	 */
	getProduct : function (a, b){
		var multiplication = a*b;
		return multiplication;
	},
	/**
	 * @param  {number} a First parameter for division operation
	 * @param  {number} b Second parameter for division operation
	 * @return {number} division Result
	 */
	getPortions : function (a, b){
		var division = a/b;
		return division;
	},
	/**
	 * @param  {number} a First parameter for reminder operation
	 * @param  {number} b Second parameter for reminder operation
	 * @return {number} reminder Result
	 */
	getReminder : function (a, b){
		var reminder = a%b;
		return reminder;
	}
};
module.exports = arith;