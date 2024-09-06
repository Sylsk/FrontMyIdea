import React from 'react';

function Filters({ onTypeChange, onLevelChange, onPriceOrderChange }) {
    return (
        <div className="filters">
            <label>
                Tipo:
                <select onChange={e => onTypeChange(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="Programación">Programación</option>
                    <option value="Cocina">Cocina</option>
                    <option value="Idiomas">Idiomas</option>
                </select>
            </label>
            <label>
                Nivel:
                <select onChange={e => onLevelChange(e.target.value)}>
                    <option value="">Todos</option>
                    <option value="Principiante">Principiante</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                </select>
            </label>
            <label>
                Ordenar por Precio:
                <select onChange={e => onPriceOrderChange(e.target.value)}>
                    <option value="">Predeterminado</option>
                    <option value="asc">Menor a Mayor</option>
                    <option value="desc">Mayor a Menor</option>
                </select>
            </label>
        </div>
    );
}

export default Filters;
