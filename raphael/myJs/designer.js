// JavaScript Document
//@Autor:Medivh
//@ firefox无法直接获取event事件所以有Bug
var paper;
$(function()
{
paper = new Raphael(document.getElementById("flow"),1800, 600);
$(".tool_part").each(function()
{
	$(this).draggable({helper:"clone",cursor:'move'})
});

$("#flow").droppable({
	accept:".tool_part",
	drop:function(event,ui)
	{
		drawSvg(ui.helper.attr("type"),event.clientX,event.clientY);
	}
});
})

function drawSvg(tool_type,x,y)
{
	/*
	**绘制start
	*/
	
	if("start"==tool_type)
	{
		console.log(tool_type)
		var start = paper.image("js/designer/images/48/start_event_empty.png",x-184,y-75,48,48)
		.attr({cursor:'pointer'})
		.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
		
		var moveX,moveY;
		var startId = start.id;
			showStart(startId);
		var myStart = function()
		{
			showStart(startId);
		}
		var myMove = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			start.attr({x:moveX});
			start.attr({y:moveY});	
		}
		var myEnd = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			start.attr({x:moveX});
			start.attr({y:moveY});	
		}
		
		start.dblclick(function()
		{
			if(confirm("确定删除此元素？"))
			{
				
				console.log(start.id)
				var id = start.id;
				if(document.getElementById(id+"start"))
				{
						$("#"+id+"start").css('display','none');
						$("#"+id+"start").remove();	
				}
				this.remove();	
			}
			else{}
		});	
	}
	/*
	*绘制end
	*/
	if("end"==tool_type)
	{
		console.log(tool_type)
		var end = paper.image("js/designer/images/48/end_event_terminate.png",x-184,y-75,48,48)
		.attr({cursor:'pointer'})
		.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
		
		var moveX,moveY;
		var endId = end.id;
			showEnd(endId);
		var myStart = function()
		{
			showEnd(endId);
		}
		var myMove = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			end.attr({x:moveX});
			end.attr({y:moveY});	
		}
		var myEnd = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			end.attr({x:moveX});
			end.attr({y:moveY});	
		}
		
		end.dblclick(function()
		{
			if(confirm("确定删除此元素？"))
			{
				
				console.log(end.id)
				var id = end.id;
				if(document.getElementById(id+"end"))
				{
						$("#"+id+"end").css('display','none');
						$("#"+id+"end").remove();	
				}
				this.remove();	
			}
			else{}
		});	
	}
	/*
	**绘制task1
	*/
	if("task1"==tool_type)
	{
			var task1 = paper.image("js/designer/images/48/task_empty.png",x-184,y-75,100,50)
			.attr({cursor:'pointer'})
			.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
			
			var realText = paper.text(x-140,y-50,'Task1').attr({'font-size':14,cursor:'pointer','font-family':'微软雅黑'}).click(function(){showTask1(task1Id,realTextId);});
			var moveX,moveY;
			
			var task1Id = task1.id;
			var realTextId = realText.id;
			showTask1(task1Id,realTextId);	
			
			var myMove = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task1.attr({x:moveX});
				task1.attr({y:moveY});
				realText.attr({x:(moveX+task1.attr("width")/2)});
				realText.attr({y:(moveY+task1.attr("height")/2)});
			}
			var myStart = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				showTask1(task1Id,realTextId);
			}
			var myEnd = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task1.attr({x:moveX});
				task1.attr({y:moveY});	
			}	
	 }
	 /*
	**绘制task2
	*/
	if("task2"==tool_type)
	{
			var task2 = paper.image("js/designer/images/48/task_empty_green.png",x-184,y-75,100,50)
			.attr({cursor:'pointer'})
			.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
			
			var realText = paper.text(x-140,y-50,'Task2').attr({'font-size':14,cursor:'pointer','font-family':'微软雅黑'}).click(function(){showTask2(task2Id,realTextId);});
			var moveX,moveY;
			
			var task2Id = task2.id;
			var realTextId = realText.id;
			showTask2(task2Id,realTextId);	
			
			var myMove = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task2.attr({x:moveX});
				task2.attr({y:moveY});
				realText.attr({x:(moveX+task2.attr("width")/2)});
				realText.attr({y:(moveY+task2.attr("height")/2)});
			}
			var myStart = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				showTask2(task2Id,realTextId);
			}
			var myEnd = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task2.attr({x:moveX});
				task2.attr({y:moveY});	
			}	
	 }
	 /*
	 *绘制task3
	 */
	 if("task3"==tool_type)
	{
			var task3 = paper.image("js/designer/images/48/task_empty_yellow.png",x-184,y-75,100,50)
			.attr({cursor:'pointer'})
			.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
			
			var realText = paper.text(x-140,y-50,'Task3').attr({'font-size':14,cursor:'pointer','font-family':'微软雅黑'}).click(function(){showTask3(task3Id,realTextId);});
			var moveX,moveY;
			
			var task3Id = task3.id;
			var realTextId = realText.id;
			showTask3(task3Id,realTextId);	
			
			var myMove = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task3.attr({x:moveX});
				task3.attr({y:moveY});
				realText.attr({x:(moveX+task3.attr("width")/2)});
				realText.attr({y:(moveY+task3.attr("height")/2)});
			}
			var myStart = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				showTask3(task3Id,realTextId);
			}
			var myEnd = function()
			{
				moveX = event.clientX-184;
				moveY = event.clientY-75;
				task3.attr({x:moveX});
				task3.attr({y:moveY});	
			}	
	 }
	 /*
	*绘制judge
	*/
	if("judge"==tool_type)
	{
		console.log(tool_type)
		var judge = paper.image("js/designer/images/48/task_wait.png",x-184,y-75,48,48)
		.attr({cursor:'pointer'})
		.drag(function(){myMove()},function(){myStart()},function(){myEnd()});
		
		var moveX,moveY;
		var judgeId = judge.id;
			showJudge(judgeId);
		var myStart = function()
		{
			showJudge(judgeId);
		}
		var myMove = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			judge.attr({x:moveX});
			judge.attr({y:moveY});	
		}
		var myEnd = function()
		{
			moveX = event.clientX-184;
			moveY = event.clientY-75;
			judge.attr({x:moveX});
			judge.attr({y:moveY});	
		}
		
		judge.dblclick(function()
		{
			if(confirm("确定删除此元素？"))
			{
				
				console.log(judge.id)
				var id = judge.id;
				if(document.getElementById(id+"judge"))
				{
						$("#"+id+"judge").css('display','none');
						$("#"+id+"judge").remove();	
				}
				this.remove();	
			}
			else{}
		});	
	}
}





/**
*显示下方表单
**/
var newTime = (new Date).getTime();
//start文本
function showStart(startId)
{
	
	
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(startId+"start"))
	{
		$("#"+startId+"start").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+startId+"start ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+startId+"start readOnly /></td><td>注解：<input type=text value='' /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+startId+"start").css('display','block');
	}
}
//end文本
function showEnd(endId)
{
	
	
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(endId+"end"))
	{
		$("#"+endId+"end").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+endId+"end ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+endId+"end readOnly /></td><td>注解：<input type=text value='' /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+endId+"end").css('display','block');
	}
}
//task1文本
function showTask1(task1Id,textId)
{
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(task1Id+"task1"))
	{
		$("#"+task1Id+"task1").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+task1Id+"task1 ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+task1Id+"task1 readOnly /></td><td>显示名称：<input type=text value='' onblur=javascript:changeText('"+textId+"') id="+textId+"text /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+task1Id+"task1").css('display','block');
	}
}
//task2
//task1文本
function showTask2(task2Id,textId)
{
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(task2Id+"task2"))
	{
		$("#"+task2Id+"task2").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+task2Id+"task2 ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+task2Id+"task2 readOnly /></td><td>显示名称：<input type=text value='' onblur=javascript:changeText('"+textId+"') id="+textId+"text /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+task2Id+"task2").css('display','block');
	}
}
//task3文本
function showTask3(task3Id,textId)
{
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(task3Id+"task3"))
	{
		$("#"+task3Id+"task3").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+task3Id+"task3 ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+task3Id+"task3 readOnly /></td><td>显示名称：<input type=text value='' onblur=javascript:changeText('"+textId+"') id="+textId+"text /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+task3Id+"task3").css('display','block');
	}
}
//judge文本
function showJudge(judgeId)
{
	
	
	$("#info div").each(function()
	{
	       $(this).css('display','none');
    });
	
	if(document.getElementById(judgeId+"judge"))
	{
		$("#"+judgeId+"judge").css('display',"block"); 
	}	
	else
	{
		var htmlStr = "<div id="+judgeId+"judge ><table style=text-align:center>"+
		"<tr><td >&nbsp;属性：&nbsp;</td><td>权限设置</td></tr>"+
		"<tr><td>开始编号：<input type=text value="+judgeId+"judge readOnly /></td><td>注解：<input type=text value='' /></td></tr>"+
		"</table></div>";
		$("#info").append(htmlStr);
		$("#"+judgeId+"judge").css('display','block');
	}
}




/*
*修改文本域内容
*/
function changeText(text_id)
{
	var text_value = document.getElementById(text_id+"text").value;
	var element = paper.getById(text_id);
	element.attr({text:text_value});
}