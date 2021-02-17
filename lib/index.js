const dinoPass = require("dinopass-node");
const _ = require("dinopass-node");
const exit = () => {
  process.exit(0);
};
const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

module.exports = async () => {
  const args = process.argv.slice(2);
  if (
    args[0] &&
    isNumeric(args[0]) &&
    args[1] &&
    (args[1] === "simple" || args[1] === "strong")
  ) {
    const passwords = await dinoPass[args[1]](Number(args[0]));
    console.log(passwords);
  } else {
    console.error(`Please supply with correct args`);
  }
  exit();
};
