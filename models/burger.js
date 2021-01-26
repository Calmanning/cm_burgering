const orm = require("../config/orm.js");


const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    
    create: function(col, values, cb) {
        orm.create("burgers", col, values, function(res) {
            cb(res);
        });
    },

    update: function(objColValues,condition, cb) {
        orm.update("burgers",objColValues,condition, function(res) {
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