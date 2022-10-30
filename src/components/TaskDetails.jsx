import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const taskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    // history.push("/");
    history.goBack();
  };

  return (
    <div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          mollitia eveniet aliquam eum incidunt nam dolore dolorem impedit
          totam. Aut nesciunt quod nemo omnis temporibus porro illo quisquam
          autem quis.
        </p>
      </div>
    </div>
  );
};

export default taskDetails;
