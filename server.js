const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'img': 'https://media.pitchfork.com/photos/5c5c555fb343c831c1730802/4:3/w_524,h_393,c_limit/21%20Savage%202.png'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois',
        'img': 'https://www.biography.com/.image/t_share/MTQ3Mzg3OTQyMTQ5NTYzNTg1/chance_the_rapper_photo_by_matthew_eisman_getty_images_entertainment_getty_170863100.jpg'
    },
    'dylan':{
        'age': 'Dylan',
        'birthName': 'Dylan',
        'birthLocation': 'Dylan',
        'img': 'https://miro.medium.com/max/1024/1*p_axiPYUOkeYY0usKNhd_A.png'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=> {
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
    
})




app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}, you better go catch it!`)
})