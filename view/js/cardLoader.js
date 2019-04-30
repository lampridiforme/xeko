/* 
	Tests if JSON can be used to load views and if callbacks can recall internal state 
	You MUST load in a deck before importing this script in the page!
*/

let deck = deckMadagascar;

Object.keys(deck).map(function(objectKey, index) {
    var cardContent = deck[objectKey];
    console.log(cardContent);

    let cardView = document.createElement('div');
    cardView.className = 'card-wrapper';
    let cardView2 = document.createElement('div');
    cardView2.className = 'card-content';
    let innerCardView = "";

    cardView.appendChild(cardView2);

    // fill template for internal divs
    // TODO: make them all elements?
    if (cardContent.cardType === 'Species') {
    	innerCardView = `
			<div class="card-name">
				${cardContent.name}
			</div>
			<div class="card-eco">
				Eco-Points: ${cardContent.points}
			</div>	
			<div class="card-energy">
				Energy: ${cardContent.energy}
			</div>	
			<div class="card-image"></div>			
			<div class="card-text">
				${cardContent.rulesText}
			</div>	
			<div class="card-trophic">
				Trophic Level: ${JSON.stringify(cardContent.level)}
			</div>
			<div class="card-type">
				${cardContent.speciesType}
			</div>
		`;
	}
	else if (cardContent.cardType === 'Boost') {
    	innerCardView = `
			<div class="card-name">
				${cardContent.name}
			</div>
			<div class="card-image"></div>			
			<div class="card-text">
				${cardContent.rulesText}
			</div>	
			<div class="card-type">
				Boost
			</div>
		`;
	}
	else if (cardContent.cardType === 'Xeko') {
    	innerCardView = `
			<div class="card-name">
				${cardContent.name}
			</div>
			<div class="card-image"></div>			
			<div class="card-text">
				${cardContent.rulesText}
			</div>	
			<div class="card-type">
				Xeko
			</div>
		`;
	}
	else if (cardContent.cardType === 'Hotspot') {
    	innerCardView = `
			<div class="card-name">
				${cardContent.name}
			</div>
		`;
	}

	// update border css
	cardView.style['border-left-color'] = cardContent.borders.left[0];
	cardView.style['border-right-color'] = cardContent.borders.right[0];
	cardView.style['border-top-color'] = cardContent.borders.top[0];
	cardView.style['border-bottom-color'] = cardContent.borders.bottom[0];

	cardView2.style['border-left-color'] = cardContent.borders.left[1];
	cardView2.style['border-right-color'] = cardContent.borders.right[1];
	cardView2.style['border-top-color'] = cardContent.borders.top[1];
	cardView2.style['border-bottom-color'] = cardContent.borders.bottom[1];

	// callback
	cardView.addEventListener('click', function() {
		alert("complete data: " + JSON.stringify(cardContent));
	});

	cardView2.innerHTML = innerCardView;
	document.body.appendChild(cardView);
});