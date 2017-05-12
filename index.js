// All requires & global var's
require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var isLoggedIn = require('./middleware/isLoggedIn');
var methodOverride = require('method-override');

var app = express();

//Set & use statements
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
});
// override with POST having action containing ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'));


//Routes
app.get('/', function(req, res) {
    res.render('home');
});



//Controlers
app.use('/auth', require('./controllers/auth'));

app.use('/dash', isLoggedIn, require('./controllers/dash'));

app.use("/profile", isLoggedIn, require("./controllers/profile"));

//Listen

app.listen(process.env.PORT || 3000);
