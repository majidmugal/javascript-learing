async function getData() {

    let response = await fetch("https://fakestoreapi.com/products/category/electronics");

    let data = await response.json()

    console.log(data);

} getData()





