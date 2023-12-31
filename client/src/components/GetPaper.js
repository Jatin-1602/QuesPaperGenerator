import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {Link, Redirect} from 'react-router-dom'

const GetPaper = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    difficult: "",
    medium: "",
    easy: "",
    score: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);

    setDetails({ ...details, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { difficult, medium, easy, score } = details;
    try {
      const res = await fetch("/getPaper", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          difficult,
          medium,
          easy,
          score,
        }),
      });

      let questions = await res.json();
      // console.log(questions);

      navigate("/displayPaper", {state: {questions}});
      
    } catch (error) {
      console.log("Error in getting ques from database", error);
    }
  };

  return (
    <>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="difficult">Difficult Percentage</label>
          <input
            type="text"
            className="form-control"
            id="difficult"
            name="difficult"
            value={details.difficult}
            placeholder="Difficult Percentage"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="medium">Medium Percentage</label>
          <input
            type="text"
            className="form-control"
            id="medium"
            name="medium"
            value={details.medium}
            placeholder="Medium Percentage"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="easy">Easy Percentage</label>
          <input
            type="text"
            className="form-control"
            id="easy"
            name="easy"
            value={details.easy}
            placeholder="Easy Percentage"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Total Score</label>
          <input
            type="text"
            className="form-control"
            id="score"
            name="score"
            value={details.score}
            placeholder="Score Percentage"
            onChange={handleInputs}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={PostData}>
          GET Paper
        </button>
      </form>
    </>
  );
};

export default GetPaper;
