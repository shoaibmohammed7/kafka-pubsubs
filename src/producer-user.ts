import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
  await producer.connect();
  await producer.send({
    topic: "payment-done",
    messages: [{
      value: "Hello, This is new producer with user key",
      key: "user1"
    },{
        value: "New User 2",
        key: "user2"
      },{
        value: "User Number 3",
        key: "user3"
      },{
        value: "Try New Consumer",
        key: "user4"
      }]
  });
}

main();
