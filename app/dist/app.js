"use strict";

var App = React.createClass({ displayName: "App",

    getInitialState: function getInitialState() {
        return {
            items: []
        };
    },

    updateItems: function updateItems(newItem) {

        var all = this.state.items.concat([newItem]);
        if (newItem && newItem.length > 0) {
            this.setState({
                items: all
            });
        }
    },

    render: function render() {
        return React.createElement("div", null, React.createElement(Banner, null), React.createElement(List, { items: this.state.items }), React.createElement(Form, { onFormSubmit: this.updateItems }));
    }
});

var Banner = React.createClass({ displayName: "Banner",
    render: function render() {
        return React.createElement("h5", null, "Todo in ReactJS");
    }
});

var List = React.createClass({ displayName: "List",

    render: function render() {
        var create = function create(text) {
            return React.createElement(Item, { key: text }, text);
        };
        var name = "";
        this.props.items.length > 0 ? name = "collection" : name = "";

        return React.createElement("ul", { className: name }, this.props.items.map(create));
    }
});

var Item = React.createClass({ displayName: "Item",
    getInitialState: function getInitialState() {
        return {
            show: true
        };
    },
    reverseItem: function reverseItem() {
        this.setState({ show: !this.state.show });
    },
    render: function render() {

        if (this.state.show) {
            var s = "collection-item";
        } else {
            var s = "collection-item cross";
        }
        return React.createElement("li", { onClick: this.reverseItem, className: s }, this.props.children);
    }
});

var Form = React.createClass({ displayName: "Form",
    getInitialState: function getInitialState() {
        return { item: '' };
    },
    handleSubmit: function handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.state.item = "";
        return;
    },

    onChange: function onChange(event) {
        this.setState({
            item: event.target.value
        });
    },

    render: function render() {
        return React.createElement("form", { onSubmit: this.handleSubmit }, React.createElement("input", { onChange: this.onChange, value: this.state.item, ref: "item", placeholder: "Type something todo here", type: "text", className: "validate" }), React.createElement("button", { className: "btn waves-effect waves-light", type: "submit", name: "action" }, "Submit"));
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));