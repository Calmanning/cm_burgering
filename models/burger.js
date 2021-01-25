const orm = require("../config/orm.js");


const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    
    create: function(cb) {
        orm.create("burgers", cols, values, function(res) {
            cb(res);
        });
    },

    update: function(objColsValues, condition, cb) {
        orm.update("burgers", objColsValues, condition, function(res) {
            cb(res);
        }) 
    },

    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;
//this export gets linked to the contoller file, "burgerControl.js"