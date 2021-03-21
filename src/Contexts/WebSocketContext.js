import React, { useState, useEffect } from 'react';

const WebSocketContext = React.createContext(null);
const WebsocketConsumer = WebSocketContext.Consumer;
let i = 0;
const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState({});



  useEffect(() => {
    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20');

    ws.onmessage = (e) => {

      let msg = JSON.parse(e.data);

      setData(msg)

    }
  }, []);


  return (
    <WebSocketContext.Provider value={{ data }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export { WebSocketContext, WebSocketProvider, WebsocketConsumer };