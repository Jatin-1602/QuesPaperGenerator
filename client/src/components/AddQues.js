import React, { useState } from "react";

const AddQues = () => {
  //   const [data, setData] = useState({});

  const [details, setDetails] = useState({
    ques: "",
    difficulty: "",
    score: "",
    addedBy: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);

    setDetails({ ...details, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { ques, difficulty, score, addedBy } = details;

    const res = await fetch("/addQues", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ques,
        difficulty,
        score,
        addedBy,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 500 || !data) {
      window.alert("Failed to add");
      console.log("Failed to add");
    } else {
      console.log("Successfully Added");
      window.alert("Successfully Added");
    }
  };

  return (
    <>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="ques">Question</label>
          <input
            type="text"
            className="form-control"
            id="ques"
            name="ques"
            value={details.ques}
            placeholder="Enter Ques"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty</label>
          <input
            type="text"
            className="form-control"
            id="difficulty"
            name="difficulty"
            value={details.difficulty}
            placeholder="Difficulty"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="score">Score</label>
          <input
            type="text"
            className="form-control"
            id="score"
            name="score"
            value={details.score}
            placeholder="Score"
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="addedBy">Added By</label>
          <input
            type="text"
            className="form-control"
            id="addedBy"
            name="addedBy"
            value={details.addedBy}
            placeholder="Added By"
            onChange={handleInputs}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={PostData}>
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default AddQues;
