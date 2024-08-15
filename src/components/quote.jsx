
import React, { useState, useEffect } from 'react';

const citas = [
    {cita: "El problema del matrimonio es que se acaba todas las noches después de hacer el amor, y hay que volver a reconstruirlo todas las mañanas antes del desayuno", autor: "Gabriel García Márquez"},
    {cita: "Si quieres ser amado, ama tú.", autor: "Gabriel García Márquez"},
    {cita: "La vida no es sino una continua sucesión de oportunidades para sobrevivir.", autor: "Gabriel García Márquez"},
    {cita: "El amor es tan importante como la comida. Pero no alimenta.", autor: "Gabriel García Márquez"},
    {cita: "Ningún lugar en la vida es más triste que una cama vacía.", autor: "Gabriel García Márquez"}
];


const colores = ["#677D6A", "#9CA986", "#808D7C", "#808D7C", "#5F6F65", "#40534C", "#1A3636"];


const Quote = () => {

    const [quote, setQuote] = useState(citas[0]);
    const [color, setColor] = useState(colores[0]);

    const citaAleatoria = () => {
        const indice = Math.floor(Math.random() * citas.length);
        setQuote(citas[indice]);
        setColor(colores[Math.floor(Math.random() * colores.length)]);
    };

    return (
    <div id='fondo' style={{backgroundColor:color}}>
        <div id='quote-box'>
            <h3 id='text' style={{color:color}}>{quote.cita}</h3>
            <p id='author' style={{color:color}}>{quote.autor}</p>
                <div className='container-btn'>
                    <button className='btn' id='tweet-quote' style={{backgroundColor:color}}>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.cita + " - " + quote.autor)}`} target='_blank'>tuitear</a>
                    </button>
                    <button className='btn' id='new-quote' onClick={citaAleatoria} style={{backgroundColor:color}}>Generar nueva frase</button>
                </div>
        </div>
    </div>
    );
}

export default Quote;
