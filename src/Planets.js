import React from "react";
import axios from 'axios';
import Select from 'react-select';

class Planets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectOptions: [],
            id: "",
            name: '',

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });

        console.log(`Option selected:`, selectedOption);
    };

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }



    componentDidMount() {
        this.getOptions()
    }


    async getOptions() {
        const res = await axios.get('https://swapi.dev/api/planets/')
        const data = res.data

        const options = data.results.map(d => ({
            "value": d.name,
            "label": d.name
        }))


        this.setState({ selectOptions: options })
    }

    onDateChange(dateValue) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('dateCommenced', dateValue.value);
    }
    render() {

        return (
            <div>
                <label htmlFor="planet-select">星球</label>

                <div>
                    <Select id="planet-select" options={this.state.selectOptions} onChange={this.onDateChange.bind(this)}/>
                </div>

            </div >


        );
    }
}

export default Planets;