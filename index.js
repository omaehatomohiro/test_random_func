"use strict";

const countArr = [10,100,500,1000,1500, 2000,3000, 3500, 4000, 5000,5500,6000,6500,7000,7500,8000,8500,9000,9500,10000];

renderTable(countArr);

/**
 * 表示する
 * @param {array} countArr 結果の配列
 */
function renderTable(countArr){
    const tableBody = document.getElementById('table-body');
    const result = aggregateData(countArr);
    const fr = document.createDocumentFragment();
    result.forEach( obj => {
        console.log(obj);
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.textContent = obj.count;
        td2.textContent = obj.row;
        td3.textContent = obj.high;
        td4.textContent = obj.row - obj.high;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        fr.appendChild(tr);
    });
    tableBody.appendChild(fr);
}

/**
 * 実行結果をまとめる
 * @param {array} countArr 計測する回数を配列で渡す
 * @returns {array} オブジェクトの配列
 */
function aggregateData(countArr){
    const  resultArr = [];
    countArr.forEach( c => {
        const r = execAbtest(c);
        const result = {};
        result.count = c;
        result.row = r.rowCount;
        result.high = r.highCount;
        resultArr.push(result);
    });
    return resultArr;
}


/**
 * 
 * @param {number} loopCount  計測する回数を配列で渡す
 * @returns {object} 結果をオブジェクトで返す
 */
function execAbtest(loopCount){
    let rowCount = 0;
    let highCount = 0;
    for(var n=0;n<loopCount;n++){
        let num = Math.floor(Math.random() * 10000);
        if(num < 5000){
            rowCount++;
        }else{
            highCount++;
        }
    }
    return {
        rowCount: rowCount,
        highCount: highCount
    }
}
