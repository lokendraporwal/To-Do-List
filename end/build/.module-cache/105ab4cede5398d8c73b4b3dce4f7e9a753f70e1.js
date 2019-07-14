var Todo = React.createClass({displayName: "Todo",    
    getInitialState: function() {
        return {editing: false}
    },    
    edit: function() {
              
        this.setState({editing:true});
        console.log(this);
        console.log('Editing todo#' + this.props.index);
      
    },
    remove: function() {

        alert('Todo removed');
        this.props.onRemove(this.props.index);
        console.log('Todo#' + this.props.index + ' removed');

    },
    save: function() {
        var val = this.refs.newValue.getDOMNode().value;
        alert('Todo: '+ val + ' saved!');
        this.setState({editing:false});
    },
    todoDisplay: function() {
        return (
            React.createElement("div", null, 

                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", {onClick: this.edit}, 
                            this.props.children
                        ), 

                        React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})


                    )

            )
        );
    }, 
    todoForm: function() {
        return (
            React.createElement("div", null, 

                    React.createElement("li", {className: "todo"}, 

                        React.createElement("span", null, 
                            React.createElement("input", {placeholder: "Edit todo", type: "text", ref: "newValue", defaultValue: this.props.children})
                        ), 

                        React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right"})


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

var TodoList = React.createClass({displayName: "TodoList",

    getInitialState: function() {
  
        return {
            todos: [
                'Call Amy', 
                'Pay phone bill', 
                'Christmas cards'
            ]
        };
    },
    update: function(newTodo, i) {

        var arr = this.state.todos;
    
        arr[i] = newTodo;
        this.setState({todos:arr});
        

    },
    remove: function(i) {

        var arr = this.state.todos
    
        arr.splice(i,1);
        this.setState({todos: arr})
         console.log('Todo#' + i +' removed');

    },
    render: function() {

        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Things to DO"), 

                React.createElement("div", {className: "form-inline"}, 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
                        React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
                    )
             
                ), 

                React.createElement("ul", null, 

                    this.state.todos.map(function(todo,i) {

                        return React.createElement(Todo, {index: i, 
                                index: i, 
                                onChange: this.update, 
                                onRemove: this.remove}, 
                               todo
                        )

                    })
                 
                )

            )
        );
    }
});
React.render(React.createElement(TodoList, null), document.getElementById('todo'));
