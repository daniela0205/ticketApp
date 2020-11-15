
const request = require('request');
//get the user data from json file

const fs = require('fs');

const getUserData = () => {
    const jsonData = fs.readFileSync('tickets.json')
    return JSON.parse(jsonData)    
}

// get thedata from site
const getUserData2 = () => {
var url = "https://daniela0205.zendesk.com/api/v2/tickets.json";

var options = {json: true};

request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)

    };

    if (!error && res.statusCode == 200) {
        return JSON.parse(body);
    };
});

}

module.exports = getUserData();

/*


const getUserData = () => {
    request({
        url:"https://daniela0205.zendesk.com/api/v2/tickets.json",
        json:true
    },(err,response,body) => {
       return JSON.stringify(body);
    }
    );
}

*/
//export 


