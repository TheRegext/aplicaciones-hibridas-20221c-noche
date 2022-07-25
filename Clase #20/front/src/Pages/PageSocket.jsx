import React from 'react';
import { useEffect } from 'react';
import socketIOClient  from 'socket.io-client';

function PageSocket() {
    const [response, setResponse] = React.useState('');

    useEffect(
        () => {
            const socket = socketIOClient('http://127.0.0.1:2022', {
                transports: ['websocket'],
            });
            
            socket.on('message', (data) => {
                setResponse(data);
            })
        }, [])
    return (
        <div>
            <h1>{response}</h1>
        </div>)
}

export default PageSocket;