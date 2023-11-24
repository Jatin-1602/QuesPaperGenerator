import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DisplayPaper = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;

  const dwldPdf = async () => {
    try {
      const capture = document.querySelector(".quesPaper");
      const canvas = await html2canvas(capture);
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      doc.save("paper.pdf");
    } catch (error) {
      console.log("Eroor", error);
    }
  };

  console.log(state);

  if (state) {
    const { dques, mques, eques } = state.questions;
    return (
      <>
        <div className="quesPaper">
          <div>
            <h1>Easy Question</h1>
            {eques.map((q) => {
              return (
                <>
                  <div className="d-flex flex-row justify-content-between px-5">
                    <h5>{q.ques}</h5>
                    <h5>{q.score}</h5>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <h1>Medium Question</h1>
            {mques.map((q) => {
              return (
                <>
                  <div className="d-flex flex-row justify-content-between px-5">
                    <h5>{q.ques}</h5>
                    <h5>{q.score}</h5>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <h1>Difficult Question</h1>
            {dques.map((q) => {
              return (
                <>
                  <div className="d-flex flex-row justify-content-between px-5">
                    <h5>{q.ques}</h5>
                    <h5>{q.score}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div>
          <button onClick={dwldPdf}>DOWNLOAD PDF</button>
        </div>
      </>
    );
  } else {
    navigate("/");
  }
};

export default DisplayPaper;
