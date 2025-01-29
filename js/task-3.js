function getElementWidth(content, padding, border) {
    const numBorder = Number.parseFloat(border);
    // console.log(numBorder);
    const numContent = Number.parseInt(content);
    // console.log(numContent);
    const numPadding = Number.parseInt(padding);
    // console.log(numPadding);

    const totalWidth = numContent + (numPadding * 2) + (numBorder * 2);
    return totalWidth;

}

getElementWidth("50px", "8px", "4px");
getElementWidth("60px", "12px", "8.5px");
getElementWidth("200px", "0px", "0px");

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200