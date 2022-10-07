const complimentBtn = document.getElementById("complimentButton")
const complimentBtnOne = document.getElementById("complimentButtonOne")
const complimentBtnTwo = document.getElementById("complimentButtonTwo")
const complimentBtnThree = document.getElementById("complimentButtonThree")
const complimentBtnFour = document.getElementById("complimentButtonFour")
const getCompliment = () => {
    axios.get("http://localhost:5006/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getComplimentOne = () => {
    axios.get("http://localhost:5006/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtnOne.addEventListener('click', getComplimentOne)

const createCompliment = evt => {

    axios.post("http://localhost:5006/api/compliment/")
    .then(res => {
        let {data} = res
        data.forEach(comp => {
        createCompliment(comp)            
        });
    })
}

complimentBtnThree.addEventListener('click', createCompliment)