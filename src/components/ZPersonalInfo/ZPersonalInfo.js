import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ZPersonalInfo.css';

class ZPersonalInfo extends React.Component {
    constructor (props) {
        super();
        this.state = {
            name: props.name,
            email: props.email,
            phone: props.phone
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    async handleSubmit () {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h3>Profile</h3>
                <form>
                    <label>Name </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    <label>Email </label>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                    <label>Phone </label>
                    <input type="text" value={this.state.phone} name="phone" onChange={this.handleChange} />
                    <input type="submit" value="Save" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    };
};

ZPersonalInfo.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
};

export default withStyles(s)(ZPersonalInfo);
