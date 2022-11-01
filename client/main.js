const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:5006/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

let fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:5006/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

document.querySelector(".submit".addEventListener)('submit', (e) => {
    e.preventDefult();
    let newGame = document.querySelector('.sumbit-input').value;
    let newGenre =  document.querySelector('.sumbit-input').value;
    let game = {
        gameName : newGame,
        type : newGenre
    }
    axios.get("http://localhost:5006/api/compliment/", game)
    .then(res => {
        const data = res.data;
        alert(data);
});

})