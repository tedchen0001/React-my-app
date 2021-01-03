import React from "react";
import { useTable } from 'react-table'
import axios from 'axios';

class PlanetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };

    }
    callStateService = async() => {
        //alert('test');
        const res = await axios.get('https://swapi.dev/api/planets/')
        const data = res.data
        this.setState({
            todos: data.results
        });

        //console.log(res.data);
        //const data = res.data

    }

    render() {
        const { todos = [] } = this.state;
        return (
            <div>
                <label htmlFor="planet-talbe">星球資料</label>
                <table id="planet-table"><thead><tr><th>自轉週期</th></tr></thead>
                    <tbody>
                        {todos.length ?
                            todos.filter(v => v.name === this.props.planet_name).map((todo) => (



                                <tr>
                                    <td>{todo.rotation_period}</td>
                                </tr>
                            ))
                            :
                            (<tr>
                                <td>-</td>
                            </tr>)
                        }
                    </tbody></table>




            </div >
        );

    }
}

export default PlanetData;