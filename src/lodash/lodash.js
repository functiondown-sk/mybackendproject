const _ = require("lodash");
function lodash() {
    let month = [
        "January",
        "Fabruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
   console.log(_.chunk(month,4));

   const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
   console.log(_.tail(oddNum, 11));

   const Num = [2, 5, 4, 2, 7];
   console.log(_.union(Num));

   const obj = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["Fantasy", "Pans Labyrinth"],
   ];

   console.log(_.fromPairs(obj));
}
module.exports.lodash = lodash;