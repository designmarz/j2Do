/*global console:true */
$(document).ready(function() {

	var listItemHelper = '<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>';
	// var todoList = ('#todo-list');



function Create_todo_item(todo) {
    this.todo 		= todo;
    this.completed 	= false;
    this.createdAt 	= Date();
    this.dueDate 	= $( '#datepicker' ).datepicker( 'getDate' );
}

// var todo_item = new Create_todo_item();

// console.log( todo_item );
$('#todoEnter').val("SET VALUE");



	$('#add-btn').click(function(e) {
		e.preventDefault();
		var newTodoVal = $('#todoEnter').val();
		if (newTodoVal === '') {
			return false;
		}

		var todo_item = new Create_todo_item(newTodoVal);

		var newItem = listItemHelper.replace('%data%', todo_item.todo)
							.replace('%dueDate%', todo_item.dueDate)
							.replace('%done%', todo_item.completed);

							// console.log( newItem );
		// loadTodo()
		saveTodo(newItem);
		$('#todoEnter').val("");
		refreshClicks();
	});


function refreshClicks() {
	$('.done-btn').click(function(e) {
		e.preventDefault();
		console.log( 'Done Button Clicked ' );
		$(this).parent().toggleClass( 'done-item' );
	});

	$('.del-btn').click(function(e) {
		e.preventDefault();
		console.log( 'Delete Button Clicked ' );
		$(this).parent().remove();
	});
}


	// $('#add-btn').click(function(e) {
	// 	e.preventDefault();
	// });

	function loadTodo() {
		// TODO: find local storage todo's
		var oldData = function() {
			var getItem = localStorage.getItem('dashMe_todos_dev');
			var itemArray = [];
			return	itemArray;
			if (getItem === "undefined" ) {
				return	itemArray;
			} else {
				itemArray.push( JSON.parse(getItem) );
				return itemArray;
			}

		};

		// $.each(oldData, function(i) {
			// console.log( oldData[i] );
		// });

		// $(todoList).append();

		console.log("Old Data: " +  oldData() );
		return oldData();
		}

	function saveTodo(newToDo) {
		var oldData = loadTodo();
		console.log(oldData.length);
		console.log(" ---------------------------> " + newToDo);
		var newData = oldData.push( newToDo );

		console.log(" --------------------------- ");
		console.log("  ");
		console.log("save todo: load Old Data: " +  newData);
		console.log("  ");
		console.log(" --------------------------- ");

		// localStorage.setItem('dashMe_todos_dev', JSON.stringify(newData) );
		for (var i = 0; i < newData.length; i++) {
			console.log(newData[i]);
		}

	}






	function pageLoad() {
		var blnk = $('#todoEnter').val();
		// loadTodo();
		// saveTodo(blnk);
		$( '#datepicker' ).datepicker({
		  defaultDate: +7,
		  nextText: 'Later'
		});
		// console.log(window.localStorage.dashMe_todos);
	}

pageLoad();
// localStorage.setItem("todoData", JSON.stringify(data));


// localStorage.setItem('dashMe_todos', JSON.stringify(todo_item) );



});