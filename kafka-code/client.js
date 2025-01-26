const {Kafka} = require("kafkajs");


exports.kafka = new Kafka({
    clientId: "my-kafka-app",
    brokers: ["http://localhost:9092"],
});