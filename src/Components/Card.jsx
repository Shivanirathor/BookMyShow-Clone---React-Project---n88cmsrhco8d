import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import ModalContent from "./ModalContent";
import "../Style/MainContent.css";

const style = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "65%",
  left: "50%",
  right: "10%",
  transform: "translate(-50%, -50%)",
  minWidth: 100,
  minHeight: 100,
  fontSize: 10,
  bgcolor: "background.paper",
  border: "2px solid #000",
};

const Card = ({ imgUrl, title, language, rating, overview, releasedate }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const isUserLoggedIn = localStorage.getItem("loggedIn") || false;

  return (
    <div className="cards" onClick={handleOpen}>
      <img src={imgUrl} alt="img" width={280} height={350} />
      <div className="tags1">Title:- {title}</div>
      <div>Language:- {language}</div>
      <div>Rating:- ⭐{rating}</div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={style}>
          {openModal && (
            <ModalContent
              setOpenModal={setOpenModal}
              imgUrl={imgUrl}
              title={title}
              language={language}
              rating={rating}
              overview={overview}
              releasedate={releasedate}
              isUserLoggedIn={isUserLoggedIn}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
