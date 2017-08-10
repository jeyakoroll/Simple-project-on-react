'use strict';

const logMixins = {
	_log: function(methodName, args) {
		console.log(this.name + '::' + methodName, args);
	},

	componentWillUpdate: function() {
		this._log('componentWillUpdate', arguments);
	},

	componentDidUpdate: function() {
		this._log('componentDidUpdate', arguments);
	},

	componentWillMount: function() {
		this._log('componentWillMount', arguments);
	},

	componentDidMount: function() {
		this._log('componentDidMount', arguments);
	},

	componentWillUnmount: function() {
		this._log('componentWillUnmount', arguments);
	}
};

const Counter = React.createClass({
	name: 'Counter',
	// mixins: [logMixins],
	propTypes: {
		count: React.PropTypes.number.isRequired,
	},
	render: function() {
		console.log(this.name = '::render()');
		return React.DOM.span(null, this.props.count);
	}
});

const TextAreaCounter = React.createClass({
	name: 'TextAreaCounter',
	// mixins: [logMixins],

	propTypes: {
		defaultValue: React.PropTypes.string,
		text: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			text: '',
		};
	},

	// shouldComponentUpdate(nextProps, nextState_ignore) {
	// 	return nextProps.count !== this.props.count;
	// },

	getInitialState: function() {
		return {
			text: this.props.defaultValue,
			text: this.props.text,
		};
	},

	_textChange: function(ev) {
		this.setState({shouldComponentUpdate(nextProps, nextState_ignore) {
return nextProps.count !== this.props.count;
},
			text: ev.target.value,
		});
	},

  render: function() {
  	console.log(this.name = '::render()');
  	let counter = null;
  	if (this.state.text.length > 0) {
  		counter = React.DOM.h3(null, 
  			React.createElement(Counter, {
  				count: this.state.text.length,
  			})
  		);
  	}
  	return React.DOM.div(null, 
  		React.DOM.textarea({
  			defaultValue: this.state.text,
  			onChange: this._textChange,
  		}),
  		counter
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