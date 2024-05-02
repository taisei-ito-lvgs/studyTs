type Shape = "circle" | "sqare" | "triangle";

function handleShapes(shape: Shape){
    switch (shape) {
        case "circle":
            //円を処理
            break;
        case "sqare":
            //正方形を処理
            break;
        case "triangle":
            //三角形を処理
            break;
        default:
            const exhaustiveCheck: never = shape;
            throw new Error('未処理の形状: ${exhaustiveCheck}');
    }
}

handleShapes("circle"); //OK
handleShapes("hexagon"); //NG
//3-11e.ts:21:14 - error TS2345: Argument of type '"hexagon"' is not assignable to parameter of type 'Shape'.
//21 handleShapes("hexagon"); //NG
