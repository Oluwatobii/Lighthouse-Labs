const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //console.log(item)
    if (itemsToCount[item]) {
      //In this case, item is allItems[i] (the names inside the firstNames array) //Also if you want to Count them all, you dont need this line.
      if (results[item]) {
        results[item] = results[item] + 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual}  !== ${expected}`);
//   }
// };

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
