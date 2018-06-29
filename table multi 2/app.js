$("#table").hide();
/////////////////////////////
$("#restar").click(function operation()
{
	location.reload();
	$("#table").hide();

});
////////////////////////////////
$("#division").click(function operation()
{
	$("#table").show();

var table = $("#table");
var tableau = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



table.append("<th>x</th>");
// console.log(table);


for (i= 0; i<tableau.length ; i++){
    var ligne1 = table.append("<th>" + tableau[i]+ "</th>");
}

//table.append("</tr></thead>");
for(x1=0 ; x1<tableau.length ; x1++){
	
	var colonne = table.append("<tr></tr>");
	
	colonne.append("<th>"+ tableau[x1]+"</th>");
	for(x=0 ; x<tableau.length ; x++){
		var cell1 = colonne.append("<td>"+tableau[x]/tableau[x1]+"</td>");
	}
}
});
//////////////////////////////////////
$("#addition").click(function operation(){

$("#table").show();

var table = $("#table");
var tableau = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



table.append("<th>x</th>");
// console.log(table);


for (i= 0; i<tableau.length ; i++){
    var ligne1 = table.append("<th>" + tableau[i]+ "</th>");
}

//table.append("</tr></thead>");
for(x1=0 ; x1<tableau.length ; x1++){
	
	var colonne = table.append("<tr></tr>");
	
	colonne.append("<th>"+ tableau[x1]+"</th>");
	for(x=0 ; x<tableau.length ; x++){
		var cell1 = colonne.append("<td>"+tableau[x]*tableau[x1]+"</td>");
	}
}
});
//////////////////////////////////////////////////////////////
$("#soustraction").click(function operation(){

$("#table").show();

var table = $("#table");
var tableau = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



table.append("<th>x</th>");
// console.log(table);


for (i= 0; i<tableau.length ; i++){
    var ligne1 = table.append("<th>" + tableau[i]+ "</th>");
}

//table.append("</tr></thead>");
for(x1=0 ; x1<tableau.length ; x1++){
	
	var colonne = table.append("<tr></tr>");
	
	colonne.append("<th>"+ tableau[x1]+"</th>");
	for(x=0 ; x<tableau.length ; x++){
		var cell1 = colonne.append("<td>"+tableau[x]-tableau[x1]+"</td>");
	}
}
});
//////////////////////////////////////////////////////////
$("#multiplication").click(function operation(){

$("#table").show();
parseInt(tableau)
var table = $("#table");
var tableau1 = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tableau;
for (i= 0; i<tableau1.length ; i++)
{
	tableau[i]=parseInt(tableau1[i])
}


table.append("<th>x</th>");
// console.log(table);


for (i= 0; i<tableau.length ; i++){
    var ligne1 = table.append("<th>" + tableau[i]+ "</th>");
}

//table.append("</tr></thead>");
for(x1=0 ; x1<tableau.length ; x1++){
	
	var colonne = table.append("<tr></tr>");
	
	colonne.append("<th>"+ tableau[x1]+"</th>");
	for(x=0 ; x<tableau.length ; x++){
		var cell1 = colonne.append("<td>"+tableau[x]+tableau[x1]+"</td>");
	}
}
});