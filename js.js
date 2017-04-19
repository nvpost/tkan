var cat1=''
for(i in res){
	i=parseInt(i)
	cat1+=drowMenu(i,0)
}
$('.cat1').html(cat1)

//показ подменю

var subMenu='';
function drowSubmenu(e){
	subMenu=""
	what=$(e).attr("data-show")
	for (i in res){
		i=parseInt(i)
		if(res[i][0]==what){
			subMenu+=drowMenu(i,1)
		}		
	}		 	
$('.sub-catalog').html(subMenu)			
}
//Рисуем меню
function drowMenu(i,j){
	var menuItem=""
	try{
		if(res[i][j]!==res[i+1][j]){
			menuItem+=drowRow(i,j)
			}
		}
	catch(err) {
		menuItem+=drowRow(i,j)
		}
	return menuItem
}
//Рисуем строку меню
function drowRow(i,j){
	var row=''
	row+='<div  class="menu-item"'
	if(j==1){
		row+=' onclick="showGoods(this)" '
	}else{
		row+=' onclick="drowSubmenu(this)" '
	}
	row+=' data-show="'+res[i][j]+'">'
	row+=res[i][j]
	row+='</div>'
	return row
}
//Показываем товары
//Если будут сущестовать несколько одинковых подкатегорий, нужно будет переписывать и добавлять проверку по 2м группам
var goods=""
function showGoods(e){
	what=$(e).attr('data-show')
	goods=""
	for(i in res){
		if(res[i][1]==what){
			goods+="<div class='goodItem'>"
			goods+="<span class='item_name'>"+res[i][2]+"</span>"
			goods+="<span class='item_price'>"+res[i][4]+"</span>"
			goods+="<span class='item_rub'>руб. х </span>"
			goods+="<span class='item_input'><input type='number' value=0 onchange='setItem(this)'></span>"
			goods+="<span class='item_cost'></span>"
			//goods+="<span class='item_cart' onclick='addItem(this)'><i class='fa fa-cart-plus fa-lg' aria-hidden='true'></i></span>"
			goods+="</div>"
		}

	}
$(".items").html(goods)	

}

//элементы магазина
function setItem(e){
	var price=$(e).parent().find('.item_price').val()
	var costPlace=$(e).parent().find('.item_cost')
	cVal=$(e).val()
	cost=price*cVal
	costPlace.text()
}



