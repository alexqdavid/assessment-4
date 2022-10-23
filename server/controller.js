let game = [
    {'id': 1, 'newGame': 'Val'},
    {'id': 2, 'newGame': 'LOL'},
    {'id': 3, 'newGame': 'Apex'}
]



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);

    },
    
    getGames: (res, req) => {
        res.status(200).json(game);
    },


    postGames: (req, res) => {
        console.log(req.body);

        const addGames = {
            id: req.body.id,
            gameName: req.body.gameName
           
        }

        game.push(addGames);
        res.status(200).json({message: "successful", addGames});
    },

    editGames: (req, res) => {
        const {id}= req.params;
        const updateGame = game.find((objGame)=> objGame.id === parseInt(id))
        updateGame.gameName=req.body.gameName;
        res.status(200).json({message: "successful", game});

    },

    deleteGames: (req, res) => {
        
        const deleteGames = game.find((objGame) => objGame.id === parseInt(req.params.id));
        game.splice(req.params.id -1, 1);
        res.status(200).json({message: "successful", game});
    }
}
    
