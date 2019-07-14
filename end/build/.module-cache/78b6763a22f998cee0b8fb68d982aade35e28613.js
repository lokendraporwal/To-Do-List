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
        console.log(this);
    
    },
    save: function() {

        var newValue = this.refs.newValue.getDOMNode().value;     
        console.log(newValue + ' added');
        this.props.onChange(newValue,this.props.index);
            
        this.setState({editing: false});
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
      

});//Todo

var TodoList = React.createClass({displayName: "TodoList",

    getInitialState: function() {
  
        return {
            todos: [
                'Call Amy', 
                'Pay phone bill', 
                'Christmas cards'
            ],
            text: "",      
            placeholder: "Add Todo",
            input_style: "form-control"
        };
    },
    onChange: function(e) {

        this.setState({text: e.target.value});

    },
    add: function(e) {

        var arr = this.state.todos;
        var new_todo = this.refs.new_todo.getDOMNode().value;
     
        if(new_todo && this.state.text) {
          arr.push(new_todo);
          this.setState({todos: arr, text: null, placeholder:"Add Todo", input_style:"form-control"});    
        } else {
          e.preventDefault();
          this.setState({placeholder:"Please Add Todo", input_style:"form-control red"});  
        }
    
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

    }, 

    eachTodo: function(todo, i) {

        return (
            React.createElement(Todo, {key: i, 
                  index: i, 
                  onChange: this.update, 
                  onRemove: this.remove}, 
                  todo
            )
        );
    },
    render: function() {

        var todoCount = this.state.todos.length;

        return (
            React.createElement("div", null, 

                React.createElement("h1", null, "(", todoCount, ") Things to Do "), 

                React.createElement("div", {className: "form-inline"}, 

                    React.createElement("div", {className: "form-group"}, 
                        React.createElement("input", {className: this.state.input_style, placeholder: this.state.placeholder, onChange: this.onChange, value: this.state.text, ref: "new_todo"}), 
                        React.createElement("button", {onClick: this.add, className: "btn btn-sm btn-primary pull-right"}, "+")
                    )
             
                ), 
        
                React.createElement("ul", null, 
                    this.state.todos.map(this.eachTodo)
                )
            
            )
        
        );
    }

});//TodoList

React.render(React.createElement(TodoList, null), document.getElementById('todo'));
