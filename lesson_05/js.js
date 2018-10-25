/**
 * Создание строки с подписью колонок
 * @param cols
 * @param row_div
 * @returns {*}
 */
function createColsNameRow(cols, row_div) {
    row_div.append(createDeskCol("desk_col"));
    for (let col of cols) {
        let str_col = createDeskCol("desk_col");
        str_col.innerText = col;
        row_div.append(str_col);
    }
    row_div.append(createDeskCol("desk_col"));
    return row_div;
}

/**
 * создает одну клеточку
 * @param cls_name
 * @returns {HTMLDivElement}
 */
function createDeskCol(cls_name) {
    let el = document.createElement("div");
    el.className = cls_name;
    return el;
}

/**
 * создает строку, в которую потом помещаются клеточки
 * @param cls_name
 * @returns {HTMLDivElement}
 */
function createDeskRow(cls_name) {
    let el = document.createElement("div");
    el.className = cls_name;
    return el;
}

// Создать каркас доски
let desk = document.createElement("div");
desk.className = "desk";
desk.id = "id_desk";

// размерность доски, изменяя размеры массивов можно менять размер доски
let cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
let rows = ["1", "2", "3", "4", "5", "6", "7", "8"];

desk.append(createColsNameRow(cols, createDeskRow("desk_row")));
for (let row of rows) {
    let str = createDeskRow("desk_row");
    str.id = "id_" + row;

    let cn = createDeskCol("desk_col");
    cn.innerHTML = row;
    str.append(cn);

    for (let col of cols) {
        let str_col = createDeskCol("desk_col");
        str_col.id = "id_" + col + row;
        str.append(str_col);
    }

    cn = createDeskCol("desk_col");
    cn.innerHTML = row;
    str.append(cn.cloneNode());
    desk.append(str);
}
desk.append(createColsNameRow(cols, createDeskRow("desk_row")));

document.getElementById("area").appendChild(desk);


