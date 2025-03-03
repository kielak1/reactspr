import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Copyright = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get("https://backend.reactspr.kielak.com/api/tickets/copyright")
            .then(response => setText(response.data))
            .catch(error => console.error("Błąd pobierania danych:", error));
    }, []);

    return (
        <div>
            {text}
        </div>
    );
};

export default Copyright;