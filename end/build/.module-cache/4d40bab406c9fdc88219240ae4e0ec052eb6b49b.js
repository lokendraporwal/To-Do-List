var Todo = React.createClass({displayName: "Todo",    
    getInitialState: function() {
        return {editing: false}
    },    
    edit: function() {
              
        return {editing: true}
        alert('edit Todo');
      
    },
    remove: function() {

        alert('Todo removed');

    },
    todoDisplay: function() {
        return (
            React.createElement("div", null, 

                React.createElement("ul", null, 
                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", {onClick: this.edit}, 
                            this.props.children
                        ), 

                        React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})


                    )
          
                )

            )
        );
    }, 
    todoForm: function() {
        return (
            React.createElement("div", null, 

                React.createElement("ul", null, 
                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", {onClick: this.edit}, 
                            React.createElement("input", {placeholder: "Edit todo", type: "text", defaultValue: this.props.children})
                        ), 

                        React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})


                    )
          
                )

            )
        );

    },
    render: function() {
      
       if(this.state.editing){
            return this.todoForm();
       } else {
            return this.todoDisplay();
       }
            
    },
      

});


React.render(React.createElement("div", null, 
                React.createElement("h1", null, "Things to DO"), 

                React.createElement("div", {className: "form-inline"}, 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
                        React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
                    )
             
                ), 

                React.createElement(Todo, null, "Call Henry"), 
                React.createElement(Todo, null, "Pay phone bill"), 
                React.createElement(Todo, null, "Make Dentist Appt")

            ), document.getElementById('todo'));
