/*global console:true */
$(document).ready(function() {

	// localStorage.setItem("todoData", JSON.stringify(data));
var testDos = {
	"todos" : [

			{ "todo" : "Something to do","createdAT" : "date", "completed" : false },
			{ "todo" : "do this","createdAT" : "date", "completed" : false },
			{ "todo" : "do Something","createdAT" : "date", "completed" : true }
		]
};



	var listItemHelper = '<li class="todo-item">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>';
	var todoList = ('#todo-list');

	$('#add-btn').click(function(e) {
		e.preventDefault();
		var newTodoVal = $('#todoEnter').val();
		if (newTodoVal === "") {
			return false;
		}
		var newItem = listItemHelper.replace("%data%", newTodoVal);
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
		console.log(data.length);
		$.each(function() {

				  $( this );
			});
		}

	function saveTodo() {
		// TODO: find local storage todo's
	}

	function pageLoad() {
		loadTodo();
		saveTodo();
		console.log(window.localStorage.dashMe_todos);
	}



pageLoad();
localStorage.setItem("dashMe_todos", JSON.stringify(testDos) );



});