//// 1. make API call and grab data
////2. apppend data 

async function getData(url){

    try{

        let res = await fetch(url)

        let data = await res.json(); 
        return data

    }

    catch(err){
        console.log("err:",  err);
    }

   
}



function appendData(data, location){                       //// location is where we want's to append data

    data.forEach(({strMeal,strMealThumb,strInstructions})=>{

        let  div = document.createElement("div")

        let name = document.createElement("h3");
        name.innerText = strMeal

        let instruct = document.createElement("p");
        instruct.innerText = strInstructions

        let img = document.createElement("img");
        img.src = strMealThumb

        div.append(img,name,instruct)

        location.append(div)

    })


}


export {getData, appendData}