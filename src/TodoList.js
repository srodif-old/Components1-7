import React from "react";

export class TodoList extends React.Component {
    
    state = {
        items: [],
        item: ""
    }


    addItem = (event) => {
        this.setState(prevState => ({
            items : [...prevState.items, prevState.item],
            item: ""
        }))
    }

    handleInputChange = (event => {
        this.setState({ item: event.target.value})
    })

    resetList = () => {
        this.setState({ items: [] });
    };
    
    render() { 

        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
                <input value={this.state.item} onChange={this.handleInputChange}/>
                <button type="button" onClick={addItem}>
                    Add
                </button>
                <button type="button" onClick={this.resetList}>
                    Reset
                </button>
            </div>

        )
    }
}