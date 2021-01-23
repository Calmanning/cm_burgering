const connection = require("./DB_connect");

function qMarks(num){
    const array = [];

    for (let i; i<num; i++){
        array.push("?");
    }

    return array.toString();
}

//function that will convert object (key+val pairs) into SQL so the ORM will do what I want...hopefully.
function objToSql(obj) {
    const array = [];
//a for-in loop to loop through keys and push the vaule pair as a string into the array
for (let key in obj) {
    let vaule = obj[key];
    //checking for hidden properties
    if  (Object.hasOwnProperty.call(ob, key)) {
        //if the string has spaces, let's add quotes
        if(typeof value === "string" && value.indexOf(" ") >=0) {
            value ="'"+ value + "'";
        }

        array.push(key + "=" + value);
    }
}

//moving from an array of strings to just one, longer, string.
return array.toString();
}

//object that will hold all the SQL queires.
const orm = {

    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput +";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }            
            cb(result);
        });
    },
    
    create: function(table, cols, values, cb) {
        const queryString = "INSERT INTO " + table;
        
        //concatenating this string to achieve the proper formatting

        queryString += " (";
        queryString += cols.tostring();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += qMarks(values.length);
        queryString += ") ";
        
        console.log(queryString);

        connection.query(queryString, values, function(err,result) {
            if(err){
                throw err;
            }
            cb(result);
        });
    },

    update: function(table, objColValues, condition, cb) {
        const queryString = "UPDATE " + table;

       queryString += " SET ";
       queryString += objToSql(objColValues);;
       queryString += "WHERE ";
       queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if(err){
                throw err;
            }
            cb(result)
        });
    },

    delete: function(table, condition, cb) {
        const queryString = "DELETE FROM " + table;

        queryString += "WHERE ";
        queryString += condition;

        console.log(queryString);

        conneection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    }

}; 

module.exports = orm;