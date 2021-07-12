import React from 'react'

export default ({ max, min }) => {
    const num = Math.round((Math.random() * (max - min) + min))
    return (
        <h2><strong>Número Selecionado:</strong> {num}</h2>
    )
}