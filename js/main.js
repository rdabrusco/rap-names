const button = document.querySelector('button')
const born = document.querySelector('h2')
const pic = document.querySelector('img')

button.addEventListener('click', getName )
document.querySelector('input').addEventListener('keypress', e=>{
    if(e.key === 'Enter'){
        e.preventDefault()
        getName()
    }
})

async function getName(){
    const rapperName = document.querySelector('input').value
    try{
         fetch(`https://rap-names-api.herokuapp.com/api/${rapperName}`)
         .then(res => res.json())
         .then(data => {
             console.log(data)
             born.textContent = `Birth Name: ${data.birthName}`
             pic.src = data.img
         })
    }
    catch(err){
        console.error(err)
    }
   

}