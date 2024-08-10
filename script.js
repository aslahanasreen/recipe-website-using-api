const res=fetch("https://dummyjson.com/recipe")
e=''
console.log(res)
res.then((resolve)=> resolve.json()).then((val)=>{

    val.recipes.forEach(element => {
       e+=`
            <div class="row my-4 ms-2">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src="${element.image}" style="width:100%">
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <h1 style="  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ">${element.name}</h1>
                    <h4 style="  font-family:'Times New Roman', Times, serif; color:purple;">Ingredients:</h4>
                    <p style="  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.ingredients}</p>
                    <h4 style="  font-family:'Times New Roman', Times, serif; color:purple;">Instructions:</h4>
                    <p style="  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">${element.instructions}</p>
                    <p style="  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Servings: ${element.servings}</p>
                    <p style="  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Cuisine: ${element.cuisine}</p>
                </div>
            </div>
            <hr>
       ` 
    });

    recipe.innerHTML=e
}).catch((err)=>console.log(err))