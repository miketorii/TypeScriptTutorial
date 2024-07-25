console.log("---template literal----");

var say = "one bird < \' \" & > 2 birds";
var html = `<div> I would like to say : ${say}</div>`;

console.log(html);

console.log("---template literal function----");

function htmlEscape(lit : TemplateStringsArray, ...place: string[]){
    let result = "";

    for (let i=0; i<place.length;i++){
        result +=lit[i];
        result += place[i]
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        ;
    }   

    result += lit[lit.length-1];
    return result;
}

var html2 = htmlEscape `<div> I would like to say : ${say}</div>`;
console.log(html2);
