import React from "react";
import styled from "styled-components";
import resume from "../img/avatar-min.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" height="550" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Abdullah al Sakib</span>
        </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem,
          natus quas vero enim praesentium delectus est id fugiat ab libero
          adipisci recusandae at maxime veritatis! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Excepturi, nesciunt.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Abdullah al Sakib</p>
            <p>: 18</p>
            <p>: null </p>
            <p>: English</p>
            <p>: null</p>
            <p>: Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
