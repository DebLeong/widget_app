import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Names = [
    "Abba",
    "Barney",
    "Barbara",
    "Jeff",
    "Jenny",
    "Sarah",
    "Sally",
    "Xander"
];

const Panes = [
    {title: 'one', content: "I'm first"},
    {title: 'two', content: "I'm second"},
    {title: 'three', content: "I'm third"},
];

class Root extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <Weather />
                <div className="interactive">
                    <Tabs panes={Panes} />
                    <Autocomplete names={Names} />
                </div>
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root/>, document.getElementById('main'));
});
