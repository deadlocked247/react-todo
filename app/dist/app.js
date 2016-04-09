"use strict";

var App = React.createClass({ displayName: "App",

    getInitialState: function getInitialState() {
        return {
            items: []
        };
    },

    updateItems: function updateItems(newItem) {
        var all = this.state.items.concat([newItem]);
        this.setState({
            items: all
        });
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
        return React.createElement("ul", null, this.props.items.map(create));
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
        var style = {
            position: "relative",
            opacity: 1,
            left: 0,
            marginRight: 10
        };
        if (this.state.show) {
            var s = "";
        } else {
            var s = "cross";
        }
        return React.createElement("li", { className: s }, React.createElement("input", { onClick: this.reverseItem, style: style, type: "checkbox" }), this.props.children);
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
        return React.createElement("form", { onSubmit: this.handleSubmit }, React.createElement("input", { onChange: this.onChange, value: this.state.item, ref: "item", placeholder: "Type something todo here", type: "text", className: "validate" }), React.createElement("button", { className: "btn waves-effect waves-light", type: "submit", name: "action" }, "Submit", React.createElement("i", { className: "material-icons right" }, "send")));
    }
});

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));