var table = $("#tableau");
var tableau = [1,2,3,4,5,6,7,8,9,10];
var adition = $("#adition");
var soustraction = $("#soustraction");
var multiplication = $("#multiplication");
var division = $("#division");

for (i= 0; i<=0; i++){
    var caseX = table.append("<th> x </th>");
}
for (i= 0; i<=9; i++){
    var ligne1 = table.append("<th>" + tableau[i]+ "</th>");
}

for (i= 0; i<=9; i++) {
    var colonne = table.append("<tr></tr>");
        for (j=0; j<=0; j++) {
            var cell = colonne.append("<th>" + tableau[i] + "</th>");
        }

        for (j=0; j<=9; j++) {
            var cellempty = colonne.append("<td>" + tableau[i]*tableau[j] + "</td>");
        }
}