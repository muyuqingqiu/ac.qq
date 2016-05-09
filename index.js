// JavaScript Document
$(function(){
var domNode = domNode();
var oMain = document.getElementById('main');
topHeader();
mainTTags();
topBanner();
strong();
vip();
//top-header的所有效果的封装函数。
function topHeader(){
	var oTopHeader = getClassIn(document,'top-header')[0]
	var oTfText = document.getElementById('tf-text');
	var oLabel = domNode.prev(oTfText);
	var oWrap = getClassIn(oTopHeader,'tf-search-list-wrap')[0];
	var oList = getClassIn(oWrap,'tf-input-list')[0];
	var aLiList = oList.children;
	var aEpiList = getClassIn(oWrap,'tf-list-text-r-epi'); 
	var timer = null;	
	bindEvent(document,'mousedown',function(){
		timer = setTimeout(function(){
			oWrap.style.display = 'none';
		},50)
	})
	oTfText.onfocus = function(){
		clearTimeout(timer);
		oWrap.style.display = 'block';
		oLabel.style.display = 'none';		
	};
	oWrap.onmousedown = function(ev){
		var ev = ev || window.event;
		clearTimeout(timer);
		ev.cancelBubble = true;
	};
	oTfText.onblur = function(){
		if(this.value == ''){
			oLabel.style.display = 'block';
		}
	};
	oTfText.oninput = function(){
		if(this.value != ''){
			oWrap.style.display = 'none';
		}
		getData(oTfText.value);
	};
	for(var i=0;i<aLiList.length;i++){	
		aLiList[i].onmouseover = function(){
			var aLiEpi = this.getElementsByTagName('li');
			for(var i=0;i<aLiList.length;i++){
				aLiList[i].className = '';
				aLiList[i].children[0].className = 'tf-list-title';
				aLiList[i].children[1].className = 'tf-list-text';
			}
			this.className = 'active-li';	
			this.children[0].className = 'tf-list-title ti-hidden';
			this.children[1].className = 'tf-list-text te-active';
			for(var i=0;i<aLiEpi.length;i++){
				aLiEpi[i].index = i;
				aLiEpi[i].onmouseover = function(){
					for(var i=0;i<aLiEpi.length;i++){
						aLiEpi[i].className = '';
					}
					if(this.index == 0){
						this.className = 'active new';
					}
					else{
						aLiEpi[0].className = 'new';
						this.className = 'active';
					}	
				};
			}
		};
	}	
}
//main 顶部的漫画分类和独家动画的封装函数。
function mainTTags(){
	var oAniList = getClassIn(oMain,'animate-list')[0];
	var aLiAniList = oAniList.children;
	for(var i=1;i<aLiAniList.length;i++){
		aLiAniList[i].onmouseover = function(){
			var oInfo = getClassIn(this,'ani-info')[0];		
			oInfo.style.display = 'block';
		};
		aLiAniList[i].onmouseout = function(){
			for(var i=1;i<aLiAniList.length;i++){
				aLiAniList[i].children[1].style.display = 'none';
			}
		};
	}	
}
//顶部导航条整体封装函数
function topBanner(){
	var topBn = document.getElementById('top-banner');
	var aBnLi = getClassIn(topBn,'banner-li');
	var topBnPage = document.getElementById('top-banner-page');
	var aLiTBnPage = topBnPage.getElementsByTagName('li');
	var aloadingBar = getClassIn(topBnPage,'loading-bar');
	var aEgg = topBnPage.getElementsByTagName('span');
	var oLeft = getClassIn(topBn,'bn-aw-left')[0];
	var oRight = getClassIn(topBn,'bn-aw-right')[0];
	var egTimer = null;
	var colorLastArr = ['#ffb025','#a8d105','#ffb025']
	var colorArr = ['#f17d00','#85a503','#f17d00'];
	var bnPageStart = bnStart();  //闭包
	bnPageStart();
	rank();
	//轮播图的封装函数
	function bnStart(){		
		var iNow = 0;
		var disInow = 1;
		var onoff = true;
		oLeft.onoff = true;
		oRight.onoff = true;
		//移入取消下面时间条的运动
		topBn.onmouseenter = function(){
			onoff = false;
			if(egTimer){
				clearInterval(egTimer);
				egTimer = null;
			}
			if(topBn.timer){
				clearTimeout(topBn.timer);
				topBn.timer = null;
			}
			for(var i=0;i<aloadingBar.length;i++){
				aloadingBar[i].style.width = 0;
				aloadingBar[i].style.display = 'none';
			}
			clearInterval(aloadingBar[iNow].timer);
			aloadingBar[iNow].timer = null;			
		};
		//移出开启下面时间条的运动
		topBn.onmouseleave = function(){
			bnPageStart();
		};
		//左右箭头点击切换页面
		oLeft.onclick = function(){
			if(oLeft.onoff){			
				oLeft.onoff = false;
				iNow--;
				disInow = 1;
				aBnLiTurn();
			}
		};
		oRight.onclick = function(){
			if(oRight.onoff){
				oRight.onoff = false;
				iNow++;
				disInow = -1;
				aBnLiTurn();
			}
		};
		//下面的时间条点击切换到对应的页面
		for(var i=0;i<aLiTBnPage.length;i++){
			aLiTBnPage[i].index = i;
			aLiTBnPage[i].onclick = function(){
				if(egTimer){
					clearInterval(egTimer);
					egTimer = null;
				}
				if(this.index == iNow){
					return;
				}
				aLiTBnPage[iNow].style.backgroundColor = colorLastArr[iNow];
				for(var i=0;i<aBnLi.length;i++){
					aBnLi[i].style.zIndex = 0;
				}			
				startMove(aBnLi[iNow],{opacity:0},300,'linear',function(){
					this.style.display = 'none';
				},true)		
				aBnLi[this.index].style.display = 'block';
				aBnLi[this.index].style.zIndex = 1;
				aBnLi[this.index].style.opacity = 0;		
				this.style.backgroundColor = colorArr[this.index];			
				startMove(aBnLi[this.index],{opacity:1},300,'linear',function(){
					if(onoff){
						bnPageStart();
					}
				},true)
				iNow = this.index;
			};
		}
		//时间条开启运动		
		function bnPageStart(){
			onoff = true;		
			topBn.timer = setTimeout(function(){
				for(var i=0;i<aloadingBar.length;i++){
					aloadingBar[i].style.width = 0;
					aloadingBar[i].style.display = 'none';
				}
				aloadingBar[iNow].style.display = 'block';
				barMove(aloadingBar[iNow]);
				eggMove(aEgg[iNow]);		
			},300)
		}
		//时间条里面的loading运动	
		function barMove(obj){
			var oLiPage = obj.parentNode;		
			oLiPage.style.backgroundColor = colorArr[iNow];
			startMove(obj,{width:304},7000,'easeBoth',function(){
				iNow++;
				disInow = -1;
				oLiPage.style.backgroundColor = colorLastArr[iNow + disInow];				
				aBnLiTurn();
			},true)
		}
		//页面的淡入淡出
		function aBnLiTurn(){																				
			for(var i=0;i<aBnLi.length;i++){
				aBnLi[i].style.zIndex = 0;
			}
			aLiTBnPage[iNow + disInow].style.backgroundColor = colorLastArr[iNow + disInow];
			startMove(aBnLi[iNow + disInow],{opacity:0},300,'linear',function(){
				this.style.display = 'none';
			},true)
			if(iNow == aBnLi.length){
				iNow = 0;
			}
			else if(iNow == -1){
				iNow = aBnLi.length - 1;
			}
			aBnLi[iNow].style.display = 'block';
			aBnLi[iNow].style.zIndex = 1;
			aBnLi[iNow].style.opacity = 0;		
			aLiTBnPage[iNow].style.backgroundColor = colorArr[iNow];			
			startMove(aBnLi[iNow],{opacity:1},300,'linear',function(){
				oLeft.onoff = true;
				oRight.onoff = true;
				if(onoff){
					bnPageStart();
				}
			},true)
		}	
		return bnPageStart;
	}
	//小鸡蛋的走路效果
	function eggMove(obj){
		obj.iNow = 0;
		if(egTimer){
			clearInterval(egTimer);
			egTimer = null;
		}
		egTimer = setInterval(function(){
			if(obj.iNow == 8){
				obj.iNow = 0;
			}
			obj.style.backgroundPosition = -48 * obj.iNow + 'px 0';
			obj.iNow++;
		},200)
	}
	//轮播图右边排行的封装函数
	function rank(){
		var oRankTitle = getClassIn(oMain,'rank-title')[0];
		var aSpanRt = oRankTitle.getElementsByTagName('span');
		var aRankCon = getClassIn(oMain,'rank-con');
		getAjax('topBnRank.php','type=0',function(data){
			var aOlRankCon = aRankCon[0].getElementsByTagName('ol');
			var aLiOl0 = aOlRankCon[0].getElementsByTagName('li');
			var aLiOl1 = aOlRankCon[1].getElementsByTagName('li');
			data = JSON.parse(data);
			for(var i=0;i<aLiOl0.length;i++){
				var oA = aLiOl0[i].getElementsByTagName('a')[0];
				var oIcon = aLiOl0[i].getElementsByTagName('i')[0];		
				oA.innerHTML = data[i].name;
				oIcon.className = data[i].trend;
			}
			for(var i=0;i<aLiOl1.length;i++){
				var oA = aLiOl1[i].getElementsByTagName('a')[0];
				var oIcon = aLiOl1[i].getElementsByTagName('i')[0];
				oA.innerHTML = data[15 - i].name;
				oIcon.className = data[15 - i].trend;
			}
		})
		for(var i=0;i<aSpanRt.length;i++){
			aSpanRt[i].index = i;
			aSpanRt[i].onmouseover = function(){
				var This = this;
				var aOlRankCon = aRankCon[this.index].getElementsByTagName('ol');
				var aLiOl0 = aOlRankCon[0].getElementsByTagName('li');
				var aLiOl1 = aOlRankCon[1].getElementsByTagName('li');
				getAjax('topBnRank.php','type=' + this.index,addData)
				for(var i=0;i<aSpanRt.length;i++){
					aSpanRt[i].parentNode.className = '';
					aRankCon[i].style.display = 'none';
				}
				this.parentNode.className = 'active';
				aRankCon[this.index].style.display = 'block';
				function addData(data){
					console.log(data)
					data = JSON.parse(data)
					for(var i=0;i<aLiOl0.length;i++){			
						var oA = aLiOl0[i].getElementsByTagName('a')[0];
						var oIcon = aLiOl0[i].getElementsByTagName('i')[0];
						oA.innerHTML = data[i].name;
						oIcon.className = data[i].trend;
					}
					for(var i=0;i<aLiOl1.length;i++){
						var oA = aLiOl1[i].getElementsByTagName('a')[0];
						var oIcon = aLiOl1[i].getElementsByTagName('i')[0];
						oA.innerHTML = data[15 - i].name;
						oIcon.className = data[15 - i].trend;
					}
				}
			};
			
		}		
	}
}
//强档推荐封装函数
function strong(){
	var oStrongWrap = getClassIn(oMain,'main-strong-wrap')[0];
	var oBar = getClassIn(oStrongWrap,'strong-title-bar')[0];
	var aLiBar = oBar.getElementsByTagName('li');
	var oStrongCon = getClassIn(oStrongWrap,'strong-con')[0];
	var oRight = getClassIn(oStrongCon,'strong-arrwo-right')[0];
	var oUl = oStrongCon.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var iNow = 0;
	var oLiX = aLi[0].offsetWidth;
	oRight.onclick = function(){
		iNow++;
		var iNowBar = Math.floor(iNow/2);
		for(var i=0;i<aLiBar.length;i++){
			aLiBar[i].className = '';
		}
		if(iNow >= aLi.length/4){
			iNowBar = 0;		
		}
		aLiBar[iNowBar].className = 'active';
		move();
	};
	for(var i=0;i<aLiBar.length;i++){
		aLiBar[i].index = i;
		aLiBar[i].onclick = function(){		
			for(var i=0;i<aLiBar.length;i++){
				aLiBar[i].className = '';
			}
			this.className = 'active';
			iNow = this.index*2;
			move();
		};
	}
	function move(){			
		if(iNow == aLi.length/4 - 1){
			for(var i=0;i<8;i++){
				aLi[i].style.position = 'relative';
				aLi[i].style.left = (oLiX + 22)*24 + 'px';
			}
		}		
		if(iNow == aLi.length/4 + 1){
			for(var i=0;i<8;i++){
				aLi[i].style.position = 'static';		
			}
			oUl.style.left = 0;
			iNow = 1;	
		}
		startMove(oUl,{left:-(oLiX + 22)*4*iNow},350,'easeBoth',true);
	}		
}
//vip动漫社的封装函数
function vip(){
	var oVip = getClassIn(oMain,'main-vip')[0];
	var oStrongLinks = getClassIn(oVip,'vip-strong-L-title-links')[0];
	var aLink = oStrongLinks.getElementsByTagName('a');
	var aStrLCon = getClassIn(oVip,'vip-strong-L-con');
	var oStrLCon = aStrLCon[0];
	var oStrArrows = getClassIn(oStrLCon,'vip-strong-L-arrow')[0];
	var oLast = getClassIn(oStrArrows,'last')[0];
	var oNext = getClassIn(oStrArrows,'next')[0];
	var aUl = oStrLCon.getElementsByTagName('ul');
	var oRankCon = getClassIn(oVip,'vip-strong-rank-con')[0];
	var aLiRank = oRankCon.getElementsByTagName('li');
	var oVipLz = getClassIn(oVip,'vip-lz')[0];
	var oLzLTitle = getClassIn(oVipLz,'vip-lz-L-title')[0];
	var oDate = getClassIn(oLzLTitle,'date')[0];
	var aLiDate = oDate.getElementsByTagName('li');
	var aLzLCon = getClassIn(oVipLz,'vip-lz-L-con');
	//轮播图的面向对象写法
	function Ban(sClass){
		this.oParent = getClassIn(oMain,sClass)[0];
		this.aCon = getClassIn(this.oParent,'banner-con');
		this.oBar = getClassIn(this.oParent,'bar')[0];
		this.aLiBar = this.oBar.getElementsByTagName('li');
		this.oLeft = getClassIn(this.oParent,'left')[0];
		this.oRight = getClassIn(this.oParent,'right')[0];
		this.iNow = 0;
	}
	Ban.prototype.init = function(){
		var This = this;
		this.arrow();
		this.bar();
		this.timeGo();
		this.oParent.onmouseenter = function(){
			clearInterval(This.timer);
		}
		this.oParent.onmouseleave = function(){
			This.timeGo();
		}
	};
	Ban.prototype.timeGo = function(){
		var This = this;
		this.timer = setInterval(function(){
			This.iNow++;
			this.elemBar = null;
			This.turn();
		},2000)
	}
	Ban.prototype.arrow = function(){
		var This = this;
		this.oLeft.onclick = function(){
			This.iNow--;
			This.show();
		};
		this.oRight.onclick = function(){
			This.iNow++;
			This.show();
		};
	};
	Ban.prototype.bar = function(){
		var This = this;
		for(var i=0;i<this.aLiBar.length;i++){
			this.aLiBar[i].onclick = function(){
				This.elemBar = this;
				This.turn();
			};
		}
	}
	Ban.prototype.show = function(){
		for(var i=0;i<this.aCon.length;i++){
			this.aCon[i].className = 'banner-con';
			this.aLiBar[i].className = '';
		}
		if(this.iNow == this.aCon.length){
			this.iNow = 0;
		}
		if(this.iNow == -1){
			this.iNow = this.aCon.length - 1;
		}
		this.aCon[this.iNow].className = 'banner-con show';
		this.aLiBar[this.iNow].className = 'active';
	};
	Ban.prototype.turn = function(This){
		for(var i=0;i<this.aLiBar.length;i++){
			this.aLiBar[i].index = i;
			this.aLiBar[i].className = '';
		}
		if(this.elemBar){
			this.elemBar.className = 'active';
			this.iNow = this.elemBar.index;
		}
		else{
			if(this.iNow == this.aCon.length){
				this.iNow = 0;
			}
			this.aLiBar[this.iNow].className = 'active';
		}
		this.show();
	};
	var T1 = new Ban('vip-lz-mshd-banner');
	T1.init();
	//强推作品点击切换
	for(var i=0;i<aUl.length;i++){
		aUl[i].style.opacity = 0;
		aUl[i].style.zIndex = 0;
	}
	aUl[0].style.opacity = 1;
	aUl[0].style.zIndex = 1;
	aLink[0].iNow = 0;
	for(var i=0;i<aLink.length;i++){
		aLink[i].index = i;
		aLink[i].iNow = 0;
		aLink[i].onmouseover = function(){
			var This = this;
			var oStrArrows = getClassIn(aStrLCon[this.index],'vip-strong-L-arrow')[0];	
			var oLast = getClassIn(oStrArrows,'last')[0];
			var oNext = getClassIn(oStrArrows,'next')[0];
			var aUl = aStrLCon[this.index].getElementsByTagName('ul');
			for(var i=0;i<aLink.length;i++){
				aLink[i].className = '';
				aStrLCon[i].className = 'vip-strong-L-con';
			}
			this.className = 'active';
			aStrLCon[this.index].className = 'vip-strong-L-con show';
			for(var i=0;i<aUl.length;i++){
				aUl[i].style.opacity = 0;
				aUl[i].style.zIndex = 0;
			}
			aUl[This.iNow].style.opacity = 1;
			aUl[This.iNow].style.zIndex = 1;
			arrows(This,oNext,oLast,aUl)
		};	
	}
	arrows(aLink[0],oNext,oLast,aUl);
	function arrows(This,oNext,oLast,aUl){
		var oPage = domNode.next(oLast).children[0];
		oNext.onclick = function(){
			aUl[This.iNow].style.zIndex = 0;
			startMove(aUl[This.iNow],{opacity:0},400,'linear',true);
			This.iNow++;		
			if(This.iNow == aUl.length){
				This.iNow = 0;
			}
			oPage.innerHTML = This.iNow + 1;
			aUl[This.iNow].style.zIndex = 1;
			startMove(aUl[This.iNow],{opacity:1},400,'linear',true);
		};
		oLast.onclick = function(){
			aUl[This.iNow].style.zIndex = 0;
			startMove(aUl[This.iNow],{opacity:0},400,'linear',true);
			This.iNow--;
			if(This.iNow == -1){
				This.iNow = aUl.length -1;
			}
			oPage.innerHTML = This.iNow + 1;
			aUl[This.iNow].style.zIndex = 1;
			startMove(aUl[This.iNow],{opacity:1},400,'linear',true);
		};
	}
	//付费人气榜ajax
	getAjax('vipRank.php','',function(data){
		var data = JSON.parse(data);
		for(var i=0;i<aLiRank.length;i++){
			var oName = aLiRank[i].children[1];
			var oTrend = aLiRank[i].children[2];
			oName.innerHTML = data[i].name;
			oTrend.className = data[i].trend;
		}
	})
	//连载表切换
	for(var i=0;i<aLiDate.length;i++){
		aLiDate[i].index = i;
		aLiDate[i].onmouseover = function(){
			for(var i=0;i<aLiDate.length;i++){
				aLiDate[i].className = '';
				aLzLCon[i].className = 'vip-lz-L-con';
			}
			this.className = 'active';
			aLzLCon[this.index].className = 'vip-lz-L-con show';
		};	
	}
}
//jsonP的封装函数
function getJSON(url,fn){
	var oNewJS = document.createElement('script');
	var re = /callback=([^&]+)/;
	oNewJS.src = url;
	document.body.appendChild(oNewJS);
	var fnName = url.match(re)[1];
	window[fnName] = fn;
	oNewJS.onload = function(){
		document.body.removeChild(oNewJS);
	}
}
//绑定事件的兼容函数
function  bindEvent(obj,events,fn){
	if(obj.addEventListener){
		obj.addEventListener(events,fn,false);
	}
	else{
		obj['my' + events] = function(){
			fn.call(obj);
		}
		obj.attachEvent('on' + events,obj['my' + events]);
	}
}
//ajax 封装函数
function getAjax(url,strData,success){
	var xhr = new XMLHttpRequest();
	var url = strData ? url + '?' + strData : url;
	xhr.open('GET',url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				success(xhr.responseText);
			}
		}
	};
	xhr.send(null);
}
//dom节点的获取兼容函数集合闭包
function domNode(){
	var domNode = {
		first : function(obj){
					return obj. firstElementChild || obj. firstChild;
				},
		last : function(obj){
				   return obj. lastElementChild || obj. lastChild;
			   },
		prev : function(obj){
				   return obj.previousElementSibling || obj.previousSibling; 
			   },
		next : function(obj){
				   return obj.nextElementSibling || obj.nextSibling;
			   }
	}
	return domNode;
}
//获得最终样式的兼容函数
function getStyle(obj,style){
	var str = '';
	if(obj.currentStyle){
		str = obj.currentStyle[style];
	}
	else{
		str = getComputedStyle(obj)[style];
	}
	return str;
}
//通过class获取元素的兼容函数
function getClassIn(oParent,sClass){
	var aChild = oParent.getElementsByTagName('*');
	var arr = [];
	var re = RegExp('(^|\\s)'+sClass+'(\\s|$)','g');
	for(var i=0;i<aChild.length;i++){
		if(re.test(aChild[i].className)){
			arr.push(aChild[i]);
		}
	}
	return arr;
}

})