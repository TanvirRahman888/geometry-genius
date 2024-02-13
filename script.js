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