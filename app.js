const express = require('express');
const app = express();
require('dotenv').config();

var AWS = require('aws-sdk');

app.get('/', (req, res) => {

    // console.log("Message = " + req.query.message);
    // console.log("Number = " + req.query.number);
    // console.log("Subject = " + req.query.subject);
    
    // var paramsp = {
    //     Message: req.query.message,
    //     PhoneNumber: '+' + req.query.number,
    //     //TopicArn:'arn:aws:sns:us-east-1:862163474169:MyFirstTopic',
    //     MessageAttributes: {
    //         'AWS.SNS.SMS.SenderID': {
    //             'DataType': 'String',
    //             'StringValue': req.query.subject
    //         }
    //     }
    // };
   
    //   var snsIns = new AWS.SNS({ apiVersion: '2010-03-31' })
    //         // successful response
    //         var publishTextPromise = snsIns.publish(paramsp).promise();
    //         publishTextPromise.then(
    //             function (data) { 
    //                 console.log("data.message  = " + data.message);
    //                 console.log("data.PhoneNumber = " + data.PhoneNumber);
                    
    //                 console.log("req.query.message = " + req.query.message);
    //                   res.end(JSON.stringify({ MessageID: data.MessageId }));
    //             }).catch(
    //                 function (err) {
    //                     res.end(JSON.stringify({ Error: err }));
    //                 });  
    
    
    

    const client = require('twilio')(
        'AC35c18346fa0a86db122669f9a1e4b8fe',
        '05b2d2ae85412de6860bded7c3808083' 
      );
      
      client.messages.create({
        from: '+14086062860',
        to: '+919840391870',
        body: "You just sent an SMS from Node.js using Twilioooooooooooooooooooooooooooo!"
      }).then(
                    function (data) { 
                        console.log("data.accountSid  = " + data.accountSid);
                        console.log("data.body = " + data.body);                        
                        
                          res.end(JSON.stringify({ MessageID: data.messagingServiceSid }));
                    }).catch(
                        function (err) {
                            res.end(JSON.stringify({ Error: err }));
                        });  
        

                    });
