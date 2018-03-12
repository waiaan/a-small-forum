//全局变量
var loginName="",boardId=1;
//注册页面的显示和关闭
document.querySelector("#register").onclick=function(e){
	document.querySelector("#shelter").style.display="block";
}
document.querySelector("#ureg>a").onclick=function(e){
	e.preventDefault();
	document.querySelector("#shelter").style.display="none";
	regname.value="";
	regpwd.value="";
	document.querySelector("#ureg>span").innerHTML="";
}
//账号重复性检测
document.querySelector("#regname").oninput=function(){
	var n=this.value,
			xhr=new XMLHttpRequest();
	if(!n){
		document.querySelector("#ureg>button").disabled=true;
		document.querySelector("#ureg>span").innerHTML="";
		return;
	} 
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if(xhr.status===200){
				var m=xhr.responseText;
				if(m==="n"){
					document.querySelector("#ureg>span").innerHTML="该账号已被注册";
					document.querySelector("#ureg>button").disabled=true;
				}else if(m==="y"){
					document.querySelector("#ureg>span").innerHTML="";
					document.querySelector("#ureg>button").disabled=false;
				}
			}
		}
	}
	xhr.open("GET","uname_check.php?uname="+n,true);
	xhr.send(null);
}
//注册账号
document.querySelector("#ureg>button").onclick=function(){
	var n=document.querySelector("#regname").value,
			p=document.querySelector("#regpwd").value,
			xhr=new XMLHttpRequest();
	if(!n||!p){
		return;
	} 
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if(xhr.status===200){
				var m=xhr.responseText;
				if(m==="y"){
					document.querySelector("#regname").value="";
					document.querySelector("#regpwd").value="";
					ureg.innerHTML="注册成功，请登录。";
					setTimeout(function(){
						shelter.style.display="none";
						ureg.innerHTML=`							
							<span></span><br>
							账号：<input name="uname" id="regname"><br>
							密码：<input type="password" name="upwd" id="regpwd"><br>
							<button disabled>提交</button>
							<a href="#">×</a>
						`;						
					},1000);
				}
			}
		}
	}
	xhr.open("GET","user_add.php?uname="+n+"&upwd="+p,true);
	xhr.send(null);
}
//登录账号
function loginbtn(){	
	loginCheck.onclick=function(){
		var n=logName.value,
			p=logPwd.value,
			xhr=new XMLHttpRequest();
		if(!n||!p) return;
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					var m=xhr.responseText;
					if(m!="n"){
						loginName=n;
						ulogin.innerHTML=`
							当前账号：${n}
							<br>
							<button id="logoutbtn">退出</button>
						`;
						ulogin.style.height=200+"px";
						document.querySelector("#postCont>button").disabled=false;
						logout();
					}
				}
			}
		}
		xhr.open("GET",`user_login.php?uname=${n}&upwd=${p}`,true);
		xhr.send(null);
		}	
}
loginbtn();
// 退出账号
function logout(){
	logoutbtn.onclick=function(){
		ulogin.innerHTML=`
			账号：<input name="uname" id="logName"><br>
			密码：<input type="password" name="upwd" id="logPwd"><br>
			<button id="loginCheck">登录</button><button id="register">注册</button>
		`;
		document.querySelector("#postCont>button").disabled=true;
		loginbtn();
		document.querySelector("#register").onclick=function(e){
			document.querySelector("#shelter").style.display="block";
		}
		//注册页面的显示和关闭
		document.querySelector("#register").onclick=function(e){
			document.querySelector("#shelter").style.display="block";
		}
		document.querySelector("#ureg>a").onclick=function(e){
			e.preventDefault();
			document.querySelector("#shelter").style.display="none";
			regname.value="";
			regpwd.value="";
			document.querySelector("#ureg>span").innerHTML="";
		}
		//账号重复性检测
		document.querySelector("#regname").oninput=function(){
			var n=this.value,
					xhr=new XMLHttpRequest();
			if(!n){
				document.querySelector("#ureg>button").disabled=true;
				document.querySelector("#ureg>span").innerHTML="";
				return;
			} 
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4){
					if(xhr.status===200){
						var m=xhr.responseText;
						if(m==="n"){
							document.querySelector("#ureg>span").innerHTML="该账号已被注册";
							document.querySelector("#ureg>button").disabled=true;
						}else if(m==="y"){
							document.querySelector("#ureg>span").innerHTML="";
							document.querySelector("#ureg>button").disabled=false;
						}
					}
				}
			}
			xhr.open("GET","uname_check.php?uname="+n,true);
			xhr.send(null);
		}		
		document.querySelector("#ureg>button").onclick=function(){
			var n=document.querySelector("#regname").value,
					p=document.querySelector("#regpwd").value,
					xhr=new XMLHttpRequest();
			if(!n||!p){
				return;
			} 
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4){
					if(xhr.status===200){
						var m=xhr.responseText;
						if(m==="y"){
							document.querySelector("#regname").value="";
							document.querySelector("#regpwd").value="";
							ureg.innerHTML="注册成功，请登录。";
							setTimeout(function(){
								shelter.style.display="none";
								ureg.innerHTML=`							
									<span></span><br>
									账号：<input name="uname" id="regname"><br>
									密码：<input type="password" name="upwd" id="regpwd"><br>
									<button disabled>提交</button>
									<a href="#">×</a>
								`;						
							},1000);
						}
					}
				}
			}
			xhr.open("GET","user_add.php?uname="+n+"&upwd="+p,true);
			xhr.send(null);
		}
	}
}
// 获取帖子列表
function getThreads(){
	var div=document.querySelector("#dis>div");
	var xhr=new XMLHttpRequest();
	var html="";
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if(xhr.status===200){
				var m=JSON.parse(xhr.responseText);
				for(var i=m.length-1;i>=0;i--){
					var s=m[i],t=new Date(Number(s.pubTime)).toLocaleDateString();
					html+=`
						<ul class="disMain">
							<li><a href="${s.tid}">${s.title}</a></li>
							<li>${s.uname}</li>
							<li>${t}</li>
						</ul>
					`;
				}
				div.innerHTML=html;
			}
		}
	}
	xhr.open("GET",`thread_list.php?bid=${boardId}`,true);
	xhr.send(null);
}
getThreads();
document.querySelector("#formList>ul").onclick=function(e){
	e.preventDefault();
	if(e.target.nodeName==="A"){
		boardId=e.target.getAttribute("href");
		getThreads();
		document.querySelector("a.boardSel").className="";
		e.target.className="boardSel";
	}
}
document.querySelector("#postCont>button").onclick=function(){
	var t=document.querySelector("#postCont>input").value,
			c=document.querySelector("#postCont>textarea").value,
			xhr=new XMLHttpRequest();
	if(!t||!c) return;
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if(xhr.status===200){
				getThreads();	
				document.querySelector("#postCont>input").value="";
				document.querySelector("#postCont>textarea").value="";
			}
		}
	}
	xhr.open("GET",`thread_add.php?bid=${boardId}&uname=${loginName}&ttitle=${t}&tcont=${c}`,true);
	xhr.send(null);
}
//帖子内容
document.querySelector("#tcontent").onclick=function(e){
	if(e.target.nodeName==="BUTTON")
	document.querySelector("#tcontent").style.display="none";
}
document.querySelector("#dis>div").onclick=function(e){
	if(e.target.nodeName==="A"){
		e.preventDefault();
		var tid=e.target.getAttribute("href");
		var xhr=new XMLHttpRequest();
		var html="";
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					var m=JSON.parse(xhr.responseText);
					html=`<p>${m.title}</p>
								<div>${m.content}</div>
								<button>关闭</button>`;
					tcontent.innerHTML=html;
					tcontent.style.display="block";
				}
			}
		}
		xhr.open("GET","content_show.php?tid="+tid,true);
		xhr.send(null);
	}
}
// 搜索帖子
document.querySelector("#searchThreads>input").oninput=function(e){
	var txt=document.querySelector("#searchThreads>input").value;
	if(!txt){
		document.querySelector("#searchThreads>ul").style.display="none";
		return;
	}
	var xhr=new XMLHttpRequest();
	var html="";
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if(xhr.status===200){
				if(!xhr.responseText) return;
				var m=JSON.parse(xhr.responseText);
				for(var i=0;i<m.length;i++){
					html+=`<li>
									<a href="${m[i].tid}">
										${m[i].title}
									</a>
								</li>`;
				}
				document.querySelector("#searchThreads>ul").style.display="block";
				document.querySelector("#searchThreads>ul").innerHTML=html;
			}
		}
	}
	xhr.open("GET","content_search.php?tit="+txt,true);
	xhr.send(null);
}
// 查看搜索的帖子的内容
document.querySelector("#searchThreads>ul").onclick=function(e){
	if(e.target.nodeName==="A"){
		e.preventDefault();
		var tid=e.target.getAttribute("href");
		var xhr=new XMLHttpRequest();
		var html="";
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4){
				if(xhr.status===200){
					var m=JSON.parse(xhr.responseText);
					html=`<p>${m.title}</p>
								<div>${m.content}</div>
								<button>关闭</button>`;
					tcontent.innerHTML=html;
					tcontent.style.display="block";
				}
			}
		}
		xhr.open("GET","content_show.php?tid="+tid,true);
		xhr.send(null);
	}
}