var db = require("./models")

// db.user.create({
//     firstName: "John",
//     lastName: "Doe",
//     email: "e@mail.com"
// });

// db.match.create({
//     title: "FL vs Fla",
//     week: 1,
//     day: "sat",
//     visId: 3,
//     home: 4
// });

// db.user.findById(1).then(function(user) {
//     user.createPick({
//         matchId: 1,
//         choice: 2,
//         confidence: 7
//     });
// });

db.user.findById(1).then(function(user) {
    user.getPicks({
        include: [db.match]
    }).then(function(picks) {
        console.log(picks[0].match.title)
    })
});
