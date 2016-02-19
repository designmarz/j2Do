/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
$(document).ready(function() {

var storageEnv = 'dashMe_todos_dev';

	var listItemHelper = '<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>';
	var todoList = ('#todo-list');
	// var todo_item = new Create_todo_item();
	// console.log( todo_item );
	$('#todoEnter').val("SET VALUE");
	testData = "";

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
			console.log($(this).parent());
			console.log( 'Done Button Clicked ' );
			$(this).parent().toggleClass( 'done-item' );
		});

		$('.del-btn').click(function(e) {
			e.preventDefault();
			console.log( 'Delete Button Clicked ' );
			$(this).parent().remove();
		});
	}

	function addItem(arg) {
		console.log(" addItem function")
		var newItem = listItemHelper.replace('%data%', arg.todo)
			.replace('%dueDate%', arg.dueDate)
			.replace('%done%', arg.completed);
		$(todoList).append(newItem);
		refreshClicks();
		logItems(arg);
	}

	$('#add-btn').click(function(e) {
		e.preventDefault();
		var newTodoVal = $('#todoEnter').val();
		if (newTodoVal === '') { return false; }
		var todo_item = new Create_todo_item(newTodoVal);
		addItem(todo_item);
		// saveTodo(todo_item);
		$('#todoEnter').val("");
		refreshClicks();
	});

	// $('#add-btn').click(function(e) {
	// 	e.preventDefault();
	// });

	function loadTodo() {
		console.log("loadTodo");
		// var itemArray = [];
		// TODO: find local storage todo's
		// var todo_itemTest1 = new Create_todo_item('Test todo item 1');
		// var todo_itemTest2 = new Create_todo_item('Test todo item 2');
		// var todo_itemTest3 = new Create_todo_item('Test todo item 3');
		// itemArray.push(todo_itemTest1,todo_itemTest2,todo_itemTest3);

		// logItems(itemArray);
		var getItems = JSON.parse(localStorage.getItem(storageEnv) );
		for (var i = 0; i < getItems.length; i++) {
			addItem(getItems[i]);
		}
		return getItems;
	}

	function saveTodo(newToDo) {
		console.log("saveTodo");
		var localData = loadTodo();

		if (localData.length === 0) {
			localData = [];
		}
		// logItems(localData);
		localData.push( newToDo );
		localStorage.setItem(storageEnv, JSON.stringify(localData) );
		console.log("SaveTodo load: ---------->\n" + localStorage.getItem(storageEnv)  );
	}

	function pageLoad() {
		// var blnk = $('#todoEnter').val();
		// saveTodo("Deveolpment");
		testData = loadTodo();

		$( '#datepicker' ).datepicker({
		  defaultDate: +7,
		  nextText: 'Later'
		});
		console.log('Page Load');
		// console.log(localStorage.getItem(storageEnv)  );
	}



pageLoad();
// localStorage.setItem("todoData", JSON.stringify(data));
// localStorage.setItem('dashMe_todos', JSON.stringify(todo_item) );
});