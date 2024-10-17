const { nestedFunction } = require("./nestedfolder/nestedFunction");
//const badrequire = require("../illegalbadrequire");
async function extraFunction(param) {
	return _.toUpper(nestedFunction(param + " extraOverridenFunction!"));
}
module.exports = { extraFunction }
