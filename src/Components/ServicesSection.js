import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import serverStorage from "../img/server-storage.svg";
import backend from "../img/backend.svg";
import webDesign from "../img/web-design.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={webDesign}
            title={"Front-End Developer"}
            paragraph={
              "Over 2.5+ years of IT experience which includes 2+ years of Extensive experience as a React JS Developer . Experienced in React JS and working with React Flux architecture. Worked on responsive design and developed a single ISOMORPHIC responsive website that could be served to desktop, Tablets and mobile users using Reactjs. Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the website. Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX, React Native concepts. Familiar with creating Custom Reusable React Components Library."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={backend}
              title={"Back-End Developer"}
              paragraph={
                "Experienced in MERN stack development Mongo dB, Express, Node, and React.Strong in using the Node.js, and Require.js and MVC Frameworks in the development of the web application. Expertise in RESTful, GraphQL to integrate between Application to Application"
              }
            />
          </div>
          <ServiceCard
            image={serverStorage}
            title={"Database Designer"}
            paragraph={
              "Expertise in writing SQL, MySQL, PostgreSQL and MongoDB"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
