$(document).ready(function(){function e(e){this.todo=e,this.completed=!1,this.createdAt=Date(),this.dueDate=$("#datepicker").datepicker("getDate")}function t(e){for(var t=0;t<e.length;t++)console.log(e[t].todo),console.log(e[t].dueDate),console.log(e[t].completed),console.log(e[t].createdAt)}function o(){$(".done-btn").click(function(e){e.preventDefault(),console.log($(this).parent()),console.log("Done Button Clicked "),$(this).parent().toggleClass("done-item")}),$(".del-btn").click(function(e){e.preventDefault(),console.log("Delete Button Clicked "),$(this).parent().remove()})}function a(e){console.log(" addItem function");var a=r.replace("%data%",e.todo).replace("%dueDate%",e.dueDate).replace("%done%",e.completed);$(s).append(a),o(),t(e)}function n(){console.log("loadTodo");for(var e=JSON.parse(localStorage.getItem(c)),t=0;t<e.length;t++)a(e[t]);return e}function l(e){console.log("saveTodo");var t=n();0===t.length&&(t=[]),t.push(e),localStorage.setItem(c,JSON.stringify(t)),console.log("SaveTodo load: ---------->\n"+localStorage.getItem(c))}function d(){testData=n(),$("#datepicker").datepicker({defaultDate:7,nextText:"Later"}),console.log("Page Load")}var c="dashMe_todos_dev",r='<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>',s="#todo-list";$("#todoEnter").val("SET VALUE"),testData="",$("#add-btn").click(function(t){t.preventDefault();var n=$("#todoEnter").val();if(""===n)return!1;var l=new e(n);a(l),$("#todoEnter").val(""),o()}),d()});