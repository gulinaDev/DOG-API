// async/await



// function getUsers(){
//     fetch("https://jsonplaceholder.typicode.com/users/")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//         })


// async function getUsers(){
// const url = await fetch("https://jsonplaceholder.typicode.com/users/")
//     const data = await  url.json()
//     console.log(data)
// }


// const getUsers = async () =>{
// const res = axios("https://jsonplaceholder.typicode.com/users/")
//     const {data}= res
//     console.log(data)
//
// }
// console.log(getUsers())



// TRY-CATCH


const getUsers = async () =>{
    try{
        const res = await axios("https://jsonplaceholder.typicode.com/users/")
        const {data} = await res
        console.log(data)
    }catch (error){
        console.log("Error...",error)
    }
}
console.log(getUsers())