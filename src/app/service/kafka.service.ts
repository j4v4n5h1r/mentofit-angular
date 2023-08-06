import { Injectable } from '@angular/core';
import { Kafka } from 'kafkajs';

@Injectable({
  providedIn: 'root'
})
export class KafkaService {

  private kafka: Kafka;

  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092']
    });
  }

  // public sendMessage(message: string) {
  //   this.kafka.produce({
  //     topic: 'my-topic',
  //     value: message,
  //   });
  // }

  // publish(topic: string, message: string) {
  //   this.kafka.publish(topic, message);
  // }

  // subscribe(topic: string, callback: (message: string) => void) {
  //   this.kafka.subscribe(topic, (message: string) => {
  //     callback(message);
  //   });
  // }

}

