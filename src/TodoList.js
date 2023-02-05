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

    removeItem = (index) => {
        this.setState(prevState => {
            const items = [...prevState.items];
            items.splice(index, 1);
            return { items };
        });
    };
    
    render() { 

        return (
            <div>
                <ul>
                    <li key={index}>
                                {item}
                                <button type="button" onClick={() => this.removeItem(index)}>
                                    Remove
                                </button>
                    </li>
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