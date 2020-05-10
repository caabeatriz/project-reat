import React, { Component } from 'react';

class Tabela extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Autores </th>
                        <th>Livros</th>
                        <th>Preços</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Paulo</td>
                        <td>React</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Caroline</td>
                        <td>React</td>
                        <td>10000</td>
                    </tr>
                    <tr>
                        <td>Beatriz</td>
                        <td>React</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </table>
        );
    };
}


export default Tabela;