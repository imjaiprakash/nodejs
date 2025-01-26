const {kafka} = require("./client");

async function init() {
    const producer = kafka.producer();

    console.log("Connecting producer.");
    await producer.connect();
    console.log("Connected producer!");

    await producer.send({
        topic: "test_topic",
        messages: [
            { 
                key: "location", 
                value: {
                    location: "New York", 
                    name:"Rider#1"
                } 
            },
        ]
    });
}