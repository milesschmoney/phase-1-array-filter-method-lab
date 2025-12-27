// 1️⃣ findMatching
// returns all drivers whose name matches the given name (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver =>
    driver.toLowerCase() === name.toLowerCase()
  );
}

// 2️⃣ fuzzyMatch
// returns all drivers whose names start with the given letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.startsWith(letters)
  );
}

// 3️⃣ matchName
// returns all driver objects whose name matches the given string
function matchName(drivers, name) {
  return drivers.filter(driver =>
    driver.name === name
  );
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName
};
