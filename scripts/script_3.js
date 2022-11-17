
count = 1
select = prompt("Salut, Combien d'étages veux-tu pour ta super pyramide ! ?");
let x = "#";
select = select - 1
for (a = 0; a <= select; a += 1) {
    console.log(x.repeat(count));
    count += 1;
}