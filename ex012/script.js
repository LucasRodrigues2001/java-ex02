var horarios = (prompt("Que são horas ? "))

if(horarios >= 5 && horarios <= 11) {
    alert("manha")
}
else if(horarios >= 12 && horarios <= 17) {
    alert("tarde")
}
else if (horarios >= 18 && horarios <= 23) {
    alert("Noite")
}
else {
    alert("Madrugada")
}
