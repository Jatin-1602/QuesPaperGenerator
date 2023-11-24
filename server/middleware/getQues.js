const Ques = require("../model/ques");
const _ = require("underscore");

const getRandom = (arr, n) => {
    // let idx = Math.floor(Math.random() * arr.length);
    // const randomElement = arr[idx];  
    console.log(n);
    let b = _.shuffle(arr).slice(0,n);
    // console.log(b);
    return b;
}

const GetQuestion = async (req, res, next) => {
    const {difficult, medium, easy, score} = req.body;
    console.log(difficult, medium, easy, score);

    // no. of ques = (level * TotalScore * 0.01) / scoreOfLevel

    // Difficult ques set
    const diffQues = await Ques.find({difficulty: "difficult"});
    const dques = getRandom(diffQues, Math.floor(difficult*score*0.01 / diffQues[0].score));
    // console.log(dques);

    // Medium ques set
    const mediumQues = await Ques.find({difficulty: "medium"});
    const mques = getRandom(mediumQues, Math.floor(medium*score*0.01 / parseInt(mediumQues[0].score)));
    // console.log(mques.length);

    // Easy ques set
    const easyQues = await Ques.find({difficulty: "easy"});
    const eques = getRandom(easyQues, Math.floor(easy*score*0.01 / parseInt(easyQues[0].score)));
    // console.log(eques.length);

    req.data = {dques, mques, eques};
    console.log("Middleware");
    next();
}

module.exports = GetQuestion;