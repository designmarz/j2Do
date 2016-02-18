/*global console:true */
$(document).ready(function() {

	var listItemHelper = '<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>';
	var todoList = ('#todo-list');



function Create_todo_item(todo, completed, createdAt, dueDate) {
    this.todo = todo;
    this.completed = completed;
    this.createdAt = createdAt;
    this.dueDate = dueDate;
}

 todo_item = new Create_todo_item("string", false, Date(), $( "#datepicker" ).datepicker( "getDate" ) );





	$('#add-btn').click(function(e) {
		e.preventDefault();

		var newTodoVal = $('#todoEnter').val();
		var due = $( "#datepicker" ).val();
		var done = "false";
		if (newTodoVal === "") {
			return false;
		}
		var newItem = listItemHelper.replace("%data%", newTodoVal).replace("%dueDate%", due).replace("%done%", done);
		$(todoList).append(newItem);
		$('#todoEnter').val("");
		refreshClicks();
	});


function refreshClicks() {

	$('.done-btn').click(function(e) {
		e.preventDefault();
		console.log( "Done Button Clicked " );
		$(this).parent().toggleClass( "done-item" );
	});

	$('.del-btn').click(function(e) {
		e.preventDefault();
		console.log( "Delete Button Clicked " );
		$(this).parent().remove();
	});
}


	// $('#add-btn').click(function(e) {
	// 	e.preventDefault();
	// });

	function loadTodo() {
		// TODO: find local storage todo's
		var data = JSON.parse(localStorage.getItem("dashMe_todos"));
		console.log(data);
		// console.log(data.length);
		$.each(function() {

				  $( this );
			});
		}

	function saveTodo() {
		var todos = $('.todo-item');
		for (var i = 0; i < todos.length; i++) {
			console.log(
				$(todos).eq(i).text() + " " +
				$(todos).eq(i).attr('data-due') + " " +
				$(todos).eq(i).attr('data-done')

				);
		}
		// TODO: find local storage todo's
	}

	function pageLoad() {
		loadTodo();
		saveTodo();
		$( "#datepicker" ).datepicker({
		  defaultDate: +7,
		  nextText: "Later"
		});

		console.log(window.localStorage.dashMe_todos);
	}


	function formatedDate() {
		var q = new Date();
		var d = q.getDate();
		var m = q.getMonth() + 01;
		var y = q.getUTCFullYear();
		return ("" + m + "/" + d + "/" + y);
	}


pageLoad();
formatedDate();
// localStorage.setItem("todoData", JSON.stringify(data));
// localStorage.setItem("dashMe_todos", JSON.stringify(testDos) );



});