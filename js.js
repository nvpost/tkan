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

var order=[]
var discount=0
function setItem(e){
	drowSumm()

	var par=e.parentNode.parentNode
	var price=parseInt($(par).find('.item_price').text())
	var name=$(par).find('.item_name').text()
	var costPlace=$(par).find('.item_cost')
	cVal=parseInt($(e).val())
	cost=price*cVal
	
	setOrder(name, price, cVal)


	costPlace.text(cost+" руб.")
}
//функция блока суммы

function setOrder(name, price, count){
	var rowOrder=[]
	var z=-1;
	rowOrder.push(name, price, count)
			for(i in order){
				if(order[i][0]==name){z=i}	
			}
		if(z>-1){order[i]=rowOrder}	
		else{order.push(rowOrder)}
		drowSumm(discount)		
}
function drowSumm(d){
	var cost=0
	var count=0
	var list=""
	var disc=0

	for( i in order){
		cost=parseFloat((order[i][1]*order[i][2]))
		if(d>0){
			disc=d*parseFloat((order[i][1]*order[i][2]))
			cost-=disc
		}	
			
		list+="<div class='list_item'>"
		list+="<span id='list_item_name'>"+order[i][0]+"</span>"
		list+="<span id='list_item_count'> - "+order[i][2]+"шт. </span>"
		list+="<span id='list_item_cost'>"+cost+"руб. </span>"
		list+="<span id='list_item_del' onclick='delItem(this)'> "+"<i class='fa fa-times'></i>"+" </span>"
		list+="</div>"
	}
	$('.list_order').html(list)
	$(".total_price_dig").text(cost)
	$('.summ').slideDown();
	$('.summ').css('display', 'table-cell');
}
function delItem(e){
	order.splice(i,1)
	drowSumm(discount)
}


$('select').change(function(){
	var disc=$(this).val()
	if(disc==0){
		$('select').prop('disabled', false)
	}else{
		$('select').prop('disabled', true)
		$(this).prop('disabled', false)
	}
	discount = parseFloat(disc)/100
	drowSumm(discount)

})

