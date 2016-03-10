var Counter = React.createClass({
    render: function() {
        return (
            <div className="my-component" onClick={this.incrementCount} title="Click me">
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    },
    incrementCount: function() {
        this.setState({
            count: this.state.count + 1
        });
    },
    getInitialState: function() {
        return {
            count : 0
        }
    }
});
React.render(
    <Counter />,
    document.getElementById('click_div')
);
