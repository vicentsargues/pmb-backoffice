

const promise=axios.get("https://localhost:44379/api/Apuesta",{headers: {'Access-Control-Allow-Origin': '*'}})
const promiseResult = promise.then((resolveResult) => {
    const result = resolveResult.data;

    console.log(result)
},(rejectedResult)=> {
    console.error(rejectedResult.statusText)
});