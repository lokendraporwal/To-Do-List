var Todo = React.createClass({displayName: "Todo",    

    render: function() {
      
         return (
            React.createElement("div", null, 

                React.createElement("li", {className: "todo"}, 
      
                    React.createElement("span", {onClick: this.edit}, 
                        this.props.children
                    ), 

                    React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm remove glyphicon glyphicon-trash pull-right"})
          
                )

            )
        );
    },    

});


React.render(React.createElement(Todo, null), document.getElementById('todo'));
