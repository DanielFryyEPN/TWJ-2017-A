/**
 * Created by USRDEL on 9/5/17.
 */
//Sentencias de control
var conHambre = {
    nombre: "Daniel"
};
if(conHambre)
    console.log("Como");
else
    console.log("Trabajar");
switch (null) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "no es nada";
}
console.log(day);