let dado1 = 0
let dado2 = 0
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let soma = 0
 
 function Resultado(resul){
	let caixa = document.createElement("div")
	let texto = document.createTextNode(resul)
	caixa.appendChild(texto)
	document.body.appendChild(caixa)
 }
	for(let i = 0; i < 1000; i++) {
		dado1 = Math.floor(Math.random() * 6) + 1;
		dado2 = Math.floor(Math.random() * 6) + 1;

		soma = (dado1 + dado2);

		count[soma - 2] ++;
		
	}
	
	for(let i = 0; i <= 10; i++){
		Resultado(( (`${i+2} : ${count[i]}`)))

	}

	for (let i = 0; i <= 10; i++){
		let tamanho = count[i]/6
		let elemento = document.createElement('div')
		document.body.appendChild(elemento)
		elemento.style.width = tamanho + '%'
		elemento.style.height = '15px'
		elemento.style.backgroundColor = '#ff00ff'
		elemento.style.margin = '3px'
		
	     }

