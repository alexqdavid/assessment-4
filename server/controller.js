module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

    
    // getComplimentOne: (req, res) => {
    //     const complimentOne = ["A beautiful, smart, and loving person will be coming into your life.",'A dubious friend may be an enemy in camouflage.','A faithful friend is a strong defense.','A fresh start will put you on your way.','A friend is a present you give yourself.'];
    //     let randomIndex = Math.floor(Math.random() * complimentOne.length);
    //     let randomCompliment = complimentOne[randomIndex];
      
    //     res.status(200).send(randomCompliment);
    // }

}
    