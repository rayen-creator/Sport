const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sport', { useNewUrlParser: true, useUnifiedTopology: true });
const bcrypt = require('bcrypt');
//#region import models
const Player = require('./models/player');
const Team = require('./models/team');
const Match = require('./models/match');
const User = require('./models/user');
const user = require('./models/user');
//#endregion

//#region Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
//#endregion Security configuration

//#region create express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//#endregion create express application

//#region all method of players
app.get('/getAllPlayers', (req, res) => {
    Player.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allPlayers: docs
            });
        }
    })
});

app.post('/addplayer', (req, res) => {
    console.log('Here in post', req.body);
    // Insert into DB
    const player = new Player({
        name: req.body.name,
        post: req.body.post,
        Age: req.body.Age,
        Description: req.body.Description
    });

    player.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Player Added with success'
                })
            }
        }
    );
});

app.delete('/deleteid/:id', (req, res) => {
    console.log('Delete player by id ', req.params.id);
    Player.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Player deleted with success'
        })
    )
});

app.get('/getPlayerById/:id', (req, res) => {
    Player.findOne({ _id: req.params.id }).then(
        (data) => {
            if (data) {
                res.status(200).json({
                    player: data
                })
            }
        }
    )
});

app.put('/editplayerbyid', (req, res) => {
    console.log('edit by Id', req.params.id);
    console.log('new player', req.body);
});
//#endregion player

//#region all method of teams
app.post('/AddTeam', (req, res) => {
    console.log('Here in post', req.body);
    // Insert into DB
    const team = new Team({
        name: req.body.name,
        foundation: req.body.foundation,
        staduim: req.body.staduim,
        country: req.body.country
    });

    team.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'team Added with success'
                })
            }
        }
    );
});

app.get('/getAllTeams', (req, res) => {
    Team.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allteams: docs
            });
        }
    })
});
app.delete('/DeleteTeam/:id', (req, res) => {
    console.log('Delete team by id ', req.params.id);
    Team.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Team deleted with success'
        })
    )
});

app.get('/getTeamByID/:id', (req, res) => {
    Team.findOne({ _id: req.params.id }).then(
        (data) => {
            if (data) {
                res.status(200).json({
                    player: data
                })
            }
        }
    )
});

app.put('/EditTeam', (req, res) => {
    console.log('edit by Id', req.params.id);
    console.log('new player', req.body);
});

//#endregion team

//#region all method matchs
app.get('/GetAllMatchs', (req, res) => {
    Match.find((err, docs) => {
        if (err) {
            console.log('error with DB');
        } else {
            res.status(200).json({
                allmatchs: docs
            });
        }
    })
});

app.post('/AddMatch', (req, res) => {
    console.log('Here in post', req.body);
    // Insert into DB
    const match = new Match({
        logo1: req.body.logo1,
        team1: req.body.team2,
        score1: req.body.score1,
        score2: req.body.score2,
        team2: req.body.team2,
        logo2: req.body.logo2
    });

    match.save().then(
        (data) => {
            if (data) {
                res.status(200).json({
                    message: 'Match Added with success'
                })
            }
        }
    );
});

app.delete('/DeleteMatch/:id', (req, res) => {
    console.log('Delete match by id ', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        res.status(200).json({
            message: 'Match deleted with success'
        })
    )
});

app.get('/GetMatchByID/:id', (req, res) => {
    Match.findOne({ _id: req.params.id }).then(
        (data) => {
            if (data) {
                res.status(200).json({
                    match: data
                })
            }
        }
    )
});

app.put('/EditMatch', (req, res) => {
    console.log('edit by Id', req.params.id);
    console.log('new match', req.body);
});

//#endregion

//#region signup
app.post('/signup', (req, res) => {
    console.log('Here in post');
    // Insert into DB
    bcrypt.hash(req.body.Password, 10).then((cryptedPWD) => {
        const user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: cryptedPWD,
        });
        user.save().then(
            (data) => {
                if (data) {
                    res.status(200).json({
                        message: 'User Added with success'
                    });
                };
            }
        );
    });
});
//#endregion

//#region login
app.post('/login', (req, res) => {
    console.log('Here in post', req.body);
    // Insert into DB
    User.findOne({
        Email: req.body.Email,
        Password: req.body.Password
    })
});
//#endregion

module.exports = app;