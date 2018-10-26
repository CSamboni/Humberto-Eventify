import React, {Component} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Events from './Components/Events';
import Footer from './Components/Footer';

class App extends Component {
    token = 'JEJATZWZKLMWKBNBWPJH';
    orderByDate = 'date';
    localeTo = 'es_Es';

    state = {
        categories: [],
        events: []
    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories = async() => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=${this.localeTo}`;

        await fetch(url).then(res => {
            return res.json();
        }).then(categories => {
            this.setState({categories: categories.categories})
        })
    }
    getEvents = async(search) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.orderByDate}&token=${this.token}&locale=${this.localeTo}`;

        await fetch(url).then(res => {
            return res.json();
        }).then(events => {
            this.setState({events: events.events})
        })
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="uk-container">
                    <Form categories={this.state.categories} getEvents={this.getEvents}/>
                    <Events 
                    events={this.state.events}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
