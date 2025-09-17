function hisobla(nomi,narxi){
    const nechta=+prompt(nomi+" dan nechta zakaz qilmoqchisiz!!");
    const javob=confirm(nechta+ " ta " +nomi+"jami narxi : " +nechta*narxi+" so'm boladi \n Zakaz qilasizmi ");
}
if(javob==true){
    alert("Zakaz qabul qilindi")
}else{
    alert("Zakaz bekor qilindi")
}