'use strict';

// var Component = React.createClass({
// 	render: function() {
// 	return React.DOM.span(null, "I'm so custom");
// }
// });

// ReactDOM.render(
// 	React.createElement(Component),
// 	document.getElementById("app")
// );



// const HiMan = React.createClass({
// 	displayName: "Hi, how are you man",
// 	render: function() {
// 		return (
// 			<div>
// 				<h1>I wait for you</h1>
// 				<p>Where have you been?</p>
// 			</div>
// 		);
// 	}
// });

// ReactDOM.render(
// 	<HiMan />, document.getElementById('app')
// );


// var Component = React.createClass({
// 	render: function() {
// 		console.log(this);
// 		return React.DOM.span(null, "My name is " +
// 		this.props.name);
// 	}
// });

// ReactDOM.render(
// 	React.createElement(Component, {
// 		name: "Bob",
// 	}),
// 	document.getElementById("app")
// );

const TextAreaCounter = React.createClass({
	propTypes: {
		defaultValue: React.PropTypes.string,
		text: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			text: '',
		};
	},

	getInitialState: function() {
		return {
			text: this.props.defaultValue,
			text: this.props.text,
		};
	},

	_textChange: function(ev) {
		this.setState({
			text: ev.target.value,
		});
	},

  render: function() {
  	return React.DOM.div(null, 
  		React.DOM.textarea({
  			defaultValue: this.state.text,
  			onChange: this._textChange,
  		}),
  		React.DOM.h3(null, this.state.text.length)
  	);
  }
});

// let ComponentFactory = React.createFactory(Component);

const myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: "Bob",
  }),
  // React.createElement(Component),
  document.getElementById('app')
);