let btn = document.querySelector("button");
let content = document.querySelector("p");
let author = document.querySelector("h3");
 
btn.addEventListener('click', () => {
   content.textContent ="Loading....."
   author.textContent =''
   async function quotes() {
      try {
         let request = await fetch('./quotes.json')
         if (!request.ok) throw Error("couldn't fetch")
         let data = await request.json()
         console.log(data)

         setTimeout(()=>{
              let index = Math.floor(Math.random() * data.length);
         content.textContent = `${data[index].quote}💖✔`
         author.textContent = `${data[index].author}`

         },1500)

        
      }

      catch (Error) {
         console.log(Error);


      }

   }
 quotes()
})
