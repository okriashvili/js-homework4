// ჯავასკრიპტის 4 დავალება
document.write("--დავალება 1" + "<br>")
// დავალება 1: დაწერეთ პროგრამა, რომელიც დაითვლის რიცხვებს 5 დან 30-მდე ჩთვლით 2-ის ბიჯით
var number = 5
while(number <= 30){
    document.write(number + "<br>")
    number+=2
}

document.write("--დავალება 2" + "<br>")
// დავალება 2 : 2.	დაწერეტ პროგრამა, რომელიც 1-დან 100-ის ჩთვლით დაითვლის რიცხვებს. აქედან ლუწი რიცხვები დაიბეჭდება მუქად დანარჩენი დახრილი ხაზით.
var num = 1
while(num <= 100){
    if(num % 2 == 0){
        document.write("<h3 style='font-style:bold'>" + num + "</h3>")
    }else if(num % 2 == 1){
        document.write("<h3 style='font-style:italic'>" + num + "</h3>")
    }
    num++
}

document.write("--დავალება 3" + "<br>")
// 3 დან 60მდე დაითვლის ციფრებს/ როცა 50ს გადააჭარბებს გაჩერდება
for(x = 3; x <= 60; x++){
    if(x >= 51){
        break;
    }
    document.write(x + "<br>")
}



