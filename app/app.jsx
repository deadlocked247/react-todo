var App = React.createClass({

    getInitialState: function() {
        return {
            items: []
        }
    },

    updateItems: function(newItem) {

        var all = this.state.items.concat([newItem]);
        if(newItem && newItem.length > 0) {
            this.setState({
                items: all
            })
        }
    },

    render: function() {
        return (
            <div>
                <Banner/>
                <List items={this.state.items}/>
                <Form onFormSubmit={this.updateItems}/>
            </div>
        )
    }
})

var Banner = React.createClass({
    render: function() {
        return (
            <h5>Todo in ReactJS</h5>
        );
    }
})

var List = React.createClass({

        render: function() {
            var create = function(text) {
                return (
                    <Item key={text}>{text}</Item>
                );
            };
            var name = "";
            this.props.items.length > 0 ? name = "collection" : name = "";

            return <ul className={name}>{this.props.items.map(create)}</ul>;
        }
})

var Item = React.createClass({
    getInitialState: function() {
        return {
            show: true
        };
    },
    reverseItem: function() {
        this.setState({show:!this.state.show});
    },
    render: function() {

        if(this.state.show) {
            var s = "collection-item";
        }
        else {
            var s = "collection-item cross";
        }
        return (
            <li onClick={this.reverseItem} className={s}>{this.props.children}</li>
        )
    }
})

var Form = React.createClass({
    getInitialState: function() {
        return {item: ''};
    },
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.state.item = "";
        return ;
    },

    onChange: function(event) {
        this.setState({
            item: event.target.value
        });
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.item} ref='item' placeholder="Type something todo here" type="text" className="validate"/>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                </button>
            </form>
        )
    }
})

ReactDOM.render(
  <App/>,
  document.getElementById("main")
);
