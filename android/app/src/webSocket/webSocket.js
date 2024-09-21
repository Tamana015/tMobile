import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Client } from '@stomp/stompjs';

const SOCKET_URL = 'ws://localhost:8080/ws-message';

class Stomp extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: 'Your server message here.',
    };
  }

  componentDidMount() {
    let currentComponent = this;

    const onConnected = () => {
      console.log("Connected!!");
      client.subscribe('/topic/message', function (msg) {
        if (msg.body) {
          const jsonBody = JSON.parse(msg.body);
          if (jsonBody.message) {
            currentComponent.setState({ messages: jsonBody.message });
          }
        }
      });
    };

    const onDisconnected = () => {
      console.log("Disconnected!!");
    };

    const client = new Client({
      brokerURL: SOCKET_URL,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: onConnected,
      onDisconnect: onDisconnected,
    });

    client.activate();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.state.messages}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Stomp;
