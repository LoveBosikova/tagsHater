//*** Задание под звездочкой
//Напишите функцию deleteTags(str), которая возвращает строку str, очищенную от всех тегов (<br>, <col> <embed>, <hr>, <img> и другие).

const tagHater = (str) => {
    let result = str;

    result = result.replace(/<(.|\n)*?>/g, '');
    
    return result.trim();
};

const checkStr = ('<!DOCTYPE> <a> </a> zgdbsbf <abbr> xdgfhbxfgn zdfvfbzb </abbr><address> ');

const check =  tagHater(checkStr);

console.log(check);