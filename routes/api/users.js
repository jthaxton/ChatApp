const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const validateLoginInput = require('../../validation/login');
const passport = require('passport');
const User = require('../../models/User');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router
    .get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        user: req.user
    });
});


router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    
    
    User.findOne({"info.email": email} ).then(user => {
        
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }
        
        console.log(user.info);
        
        bcrypt.compare(password, user.info.password).then(isMatch => {
            
            if (isMatch) {
                const payload = { id: user.id, email: user.info.email, name: user.info.name };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});



module.exports = router;
