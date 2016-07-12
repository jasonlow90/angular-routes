angular
	.module("todoApp")
	.controller("TodosController", TodosController);

	function TodosController(){

		var self = this;

		this.todo = {};

		this.todoList = [
			{task: "build an awesome todo app", done: false},
			{task: "get super good at Angular", done: false},
			{task: "party on code", done: false},
			{task: "tackle the bonus challenges for this lesson", done: false},
			{task: "take a nap", done: false}
		];

		self.addTodo = addTodo;
		self.deleteTodo = deleteTodo;
		self.completedTodos = completedTodos;
		self.remainingTodos = remainingTodos;
		this.editTodo = editTodo;

		//function that allows us to add new todos to our todoList
		function addTodo(){
			if (self.todo.index != undefined){
				self.todoList[self.todo.index].task = self.todo.text;
				self.todo = {};

			} else {
				self.todoList.push({task: self.todo.text, done: false});
				self.todo = {};
			}
		}

		function editTodo($index){
			console.log($index);
			self.todo.text = self.todoList[$index].task;
			self.todo.index = $index;
		}

		//function that allows us to delete specific todos from our todoList
		function deleteTodo($index){
			self.todoList.splice($index, 1);
		}

		//returns a count of the tasks that have been marked as done
		function completedTodos(){
			return self.todoList.filter(function(x){
				return x.done == true;
			});
		}

		//returns a count of the tasks that have not been marked as done
		function remainingTodos(){
			return self.todoList.filter(function(x){ return x.done == false; })
		}


	}
