let nouns = ["семга", "форель", "треска", "комбала", "пикша"];
let adjectives = ["золотистая", "серебристая", "серая", "медленная", "испуганная"]; 
let verbs = ["плавала", "прячется", "выныривает", "извиливается", "умерла"];

function rnd(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
let ul = document.querySelector("#list");    
let class_arr = ['cl1', 'cl2', 'cl3'];
 
let timer = setInterval(function(){ 
 let phrase = adjectives[rnd(0, 4)] + ' ' + nouns[rnd(0, 4)] + ' ' + verbs[rnd(0, 4)] + '<br>';
 var span = document.createElement('span');
 span.innerHTML = phrase;
 
 cur_cl = class_arr[rnd(0, 2)];
 span.classList.add(cur_cl);
 ul.append(span);
 
}, 1000);