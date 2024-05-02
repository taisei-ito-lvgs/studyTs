function addNumbers(a: number | string, b: number | string) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
        return a.toString() + b.toLocaleString();
    }
}

let result = addNumbers("1", "2");
result.includes("1");
