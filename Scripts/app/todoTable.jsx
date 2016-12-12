'use strict';

import React from 'React';

class TodoTable extends React.Component {
    constructor (props) {
        super(props);

        const list = props.list;
        const row = list.map((obj) =>
            <tr>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>
                    <button className="btn btn-danger" onClick={`openModal(${obj.name}')`}>
                        Eliminar
                    </button>
                </td>
            </tr> 
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
}