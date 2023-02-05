import React from "react";
import { Hello } from "./helloWorld";
import { TodoList } from "./TodoList";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    renderTodos = (items, removeItem) => (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button type="button" onClick={() => removeItem(index)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
    
    render() {
        return <div>
            <Hello />
            <Welcome name={<strong>Stavros</strong>} age={28} />

            <TodoList render={this.renderTodos} />
        </div>
    }
}