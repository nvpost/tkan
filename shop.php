<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="tovar.js"></script>

<link rel="stylesheet" href="css.css">
<body>
	<div class="goods-container">
		<h2>Каталог товаров</h2>
		<div class="catalog">
			<div class="cat1">
			</div>
			<div class="sub-catalog">
			</div>
			<div class="summ">
				<div class="list_order">
					
				</div>
				<div class="total_block">

					<div id="total_price">
					<span class="total_price_word">Сумма: </span><span class="total_price_dig">10520</span><span class="total_price_rub"> руб.</span>
					</div>
					<div id="button_place">
						<p class="btn">Отправить заказ в корзину</p>
					</div>
				</div>
				<div class="disc_block">
					<div class = "disc">
					<h3>Скидка</h3>
						<select name="disc" id="disc" class="disc_select">
							<option value="0">0%</option>
							<option value="5">5%</option>
							<option value="10">10%</option>
						</select> <i class="fa fa-question" aria-hidden="true"></i>
					</div>

					<div class = "disc">
					<h3>Уценка</h3>
						<select name="off" id="off" class="disc_select">
							<option value="0">0%</option>
							<option value="3">3%</option>
							<option value="5">5%</option>
							<option value="7">7%</option>
							<option value="10">10%</option>
							<option value="15">15%</option>
						</select> <i class="fa fa-question" aria-hidden="true"></i>
					</div>
				</div>	
			</div>

			<div class="items">
			</div>
			
		</div>
	</div>
<script src="js.js"></script>	


</body>