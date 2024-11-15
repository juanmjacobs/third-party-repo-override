const { nestedFunction } = require("./nestedfolder/nestedFunction");
//const badrequire = require("../illegalbadrequire");
async function extraFunction(param) {
	return _.toUpper(nestedFunction(param + " extraFunctionOverriden!"));
}
module.exports = { extraFunction }
