var games = [[],[],[],[],[],[],[],[]];
var grades = [0,0,0,0,0,0,0,0];

function notas(game){

    var nota = 0;

    for(var i in games[game-1]){
        nota = nota + Number(games[game-1][i][4])
    }

    nota_final = nota/games[game-1].length;

    grades.splice(game-1,1,nota_final);
    console.log(grades);
}

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
    

    for(var i = 0; i < 8;i++){
        if(game==i+1){
            games[i].push(aux);
        }
    }
    
    console.log(games);
    notas(game);
};

function showNotaValorant(){
    document.getElementById("nota_jogo").innerHTML = "<div> Nota: " + grades[1] + "</div>";
}