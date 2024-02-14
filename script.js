document.getElementById('btn-Triangle-Calculate').addEventListener('click', function () {
    //Base 
    const triangle_Input_base = document.getElementById('triangleBaseInput').value;
    const triangle_base = parseFloat(triangle_Input_base);
    console.log(triangle_base, typeof triangle_base);
    //Height 
    const triangle_Input_Height = document.getElementById('triangleHeightInput').value;
    const triangle_Height = parseFloat(triangle_Input_Height);
    console.log(triangle_Height, typeof triangle_Height);
    //Area
    const TriangleArea=0.5*triangle_base*triangle_Height;
    console.log(TriangleArea);
    document.getElementById('Triangle_Area').innerText=TriangleArea;
})

// Rectangle Area Calculation
function RectangleAreaCalculation(){
    const weight=getValueByID('rectangle_Weight_Input');
    console.log(weight, typeof weight);
    
    const height=getValueByID('rectangle_Height_Input');
    console.log(height, typeof height);

    const area=weight*height;
    console.log(area);

    setArea('Rectangle_Area',area);

    return  area;
}

function getValueByID(inputValue){
    const value=document.getElementById(inputValue).value;
    const  floatValue=parseFloat(value);
    console.log(floatValue);
    return floatValue;
}
function setArea(element,area){
    document.getElementById(element).innerText=area;
}

