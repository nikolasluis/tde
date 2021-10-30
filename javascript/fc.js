storage = window.localStorage;
var dadosDoStorageGames = JSON.parse(storage.getItem("data"))||"[]";
var gamesData = dadosDoStorageGames;

function enviar(){

    var aux = [];

    var nome = document.getElementById("nome").value;
    aux.push(nome);
    var email= document.getElementById("email").value;
    aux.push(email);
    var game= document.getElementById("game").value;
    aux.push(game);
    var plataforma= document.getElementById("plataforma").value;
    aux.push(plataforma);
    var nota = document.getElementById("nota").value;
    aux.push(nota);
    var review= document.getElementById("review").value;
    aux.push(review);

    
    if(!(gamesData instanceof Array)){
    	gamesData = [gamesData]; 
	}

    gamesData.push(aux);

    storage.setItem("data",JSON.stringify(gamesData));
    
    console.log(gamesData);
}


function notasValorant(){

    var nota = 0;
    var aux = 0;

    for(var i = 0; i<gamesData.length; i++){
        if(gamesData[i][2]==2){
            nota = nota + Number(gamesData[i][4])
            aux++;
        }
    }

    nota_final = nota/aux;

    document.getElementById("nota_jogo").innerHTML = "<div> Nota: " + nota_final + "</div>";

    tabelita();

}

function tabelita(){
     //Recupera as informações do campo dos formulários

     //Encontra o elemento tabela
     var tabela = document.getElementById("revValorant");
 
     //Inclui uma linha no elemento tabela <tr></tr>
     //informei -1 para criar a linha no final da tabela

     for(var i = 0; i<gamesData.length; i++){
        if(gamesData[i][2]==2){
            
            var linha = tabela.insertRow(-1);
            var coluna1 = linha.insertCell(0);
            var coluna2 = linha.insertCell(1);
            var coluna3 = linha.insertCell(2);
            var coluna4 = linha.insertCell(3);

            coluna1.innerHTML = gamesData[i][0];
            coluna2.innerHTML = plataformaConversion(gamesData[i][3]);
            coluna3.innerHTML = gamesData[i][5];
            coluna4.innerHTML = gamesData[i][4];

        }
    }
     
}

function plataformaConversion(plataforma){

    if (plataforma==1){
        return "Xbox One Slim";
    }
    if (plataforma==2){
        return "Xbox One Pro";
    }
    if (plataforma==3){
        return "Xbox Series S";
    }
    if (plataforma==4){
        return "Xbos Series X";
    }
    if (plataforma==5){
        return "Playstation 4 Slim";
    }
    if (plataforma==6){
        return "Playstation 4 Pro";
    }
    if (plataforma==7){
        return "Playstation 5";
    }
    if (plataforma==8){
        return "Nintendo Switch";
    }
    if (plataforma==9){
        return "PC";
    }
}