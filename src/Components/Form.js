import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    nameEventRef =  React.createRef();
    categoryRef = React.createRef();
    searchEvent = (e) => {
        e.preventDefault();
        //Create the object
        const dataSearch = {
            name: this.nameEventRef.current.value,
            category: this.categoryRef.current.value
        }
        // Pass it by props
        this.props.getEvents(dataSearch);
    }

    showOptions = (key) => {
        const category = this.props.categories[key];
        const {id, name_localized} = category;

        if(!id || !name_localized) return null;
        return (
            <option key={id} value={id}>{name_localized}</option>
        )
    }
    render() {
        const categories = Object.keys(this.props.categories);
        return (
            <form onSubmit={this.searchEvent}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                    </legend>
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.nameEventRef}
                                className="uk-input"
                                type="text"
                                placeholder="Nombre del evento o ciudad"></input>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.categoryRef} className="uk-select">
                                {categories.map(this.showOptions)}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}
Form.propTypes = {
    getEvents: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
export default Form;