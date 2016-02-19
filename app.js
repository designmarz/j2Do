/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {

 var storageEnv = 'dashMe_todos_dev';

	var listItemHelper = '<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>';
	var todoList = ('#todo-list');
	// var todo_item = new Create_todo_item();
	// console.log( todo_item );
	// $('#todoEnter').val("SET VALUE");


	function Create_todo_item(todo) {
		this.todo 		= todo;
		this.completed 	= false;
		this.createdAt 	= Date();
		this.dueDate 	= $( '#datepicker' ).datepicker( 'getDate' );
	}

	function logItems(arg) {
	for (var i = 0; i < arg.length; i++) {
		console.log(arg[i].todo);
		console.log(arg[i].dueDate);
		console.log(arg[i].completed);
		console.log(arg[i].createdAt);
		}
	}

	function refreshClicks() {

		$('.done-btn').click(function(e) {
			e.preventDefault();
			// console.log($(this).parent());
			// console.log( 'Done Button Clicked ' );
			$(this).parent().toggleClass( 'done-item' );
		});

		$('.del-btn').click(function(e) {
			e.preventDefault();
			console.log( 'Delete Button Clicked ' );
			deleteItem($(this).parent().index());
			$(this).parent().remove();
		});
	}

	function addItem(arg) {
		console.log(" addItem function");
		var newItem = listItemHelper.replace('%data%', arg.todo)
			.replace('%dueDate%', arg.dueDate)
			.replace('%done%', arg.completed);
		$(todoList).prepend(newItem);

		// logItems(arg);
	}

	function deleteItem(arg) {
		console.log(" Delete function");
		var getItems = JSON.parse(localStorage.getItem(storageEnv) );
		getItems.splice(arg, 1);
		localStorage.setItem(storageEnv, JSON.stringify(getItems) );

	}

	$('#add-btn').click(function(e) {
		e.preventDefault();
		var newTodoVal = $('#todoEnter').val();
		if (newTodoVal === '') { return false; }
		var todo_item = new Create_todo_item(newTodoVal);

		$(todoList).children().remove();
		addItem(todo_item);
		saveTodo(todo_item);
		$('#todoEnter').val("");
		refreshClicks();
	});

	function loadTodo() {
		console.log("loadTodo");
		var getItems = JSON.parse(localStorage.getItem(storageEnv) );
		// for (var i = 0; i < getItems.length; i++) {
		// 	addItem(getItems[i]);
		// }
		for (var i = getItems.length - 1; i >= 0; i--) {
			addItem(getItems[i]);
		}
		refreshClicks();
		return getItems;
	}

	function saveTodo(itemArg) {
		console.log("saveTodo");
		var localData = loadTodo();
		if (localData.length === 0) { localData = []; }

		localData.push( itemArg );
		localStorage.setItem(storageEnv, JSON.stringify(localData) );
	}

	function pageLoad() {
		var pageLoadData = loadTodo();
		$( '#datepicker' ).datepicker({
		  defaultDate: +7,
		  nextText: 'Later'
		});
		console.log('Page Load');
		console.log( pageLoadData  );
	}

pageLoad();

	// $('#add-btn').click(function(e) {
	// 	e.preventDefault();
	// });

});