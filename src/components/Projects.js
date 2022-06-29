import React from "react";
import Project from "./Project";
import classes from "../styles/Projects.module.css";

const projects = [
  {
    href: "https://besttoolsforstartups.com/",
    title: "Best Tools for Startups",
    subtitle: "A website which deals with IT startup softwares from Appsumo",
  },
  {
    href: "https://ecofriendlyfact.com/",
    title: "Eco Friendly Fact",
    subtitle:
      "A website which publishes eco friendly blog, facts, news and sale products",
  },
  {
    href: "https://ecomarinebd.com/",
    title: "Eco Marine",
    subtitle: "A website for cruise tourism business located in Dhaka",
  },
  {
    href: "https://derbylabourparty.org.uk/",
    title: "Derby Labour Party",
    subtitle:
      "it's an introduction website for Derby Labour Party, A branch of Labour Party, One of the major political party of UK, soon to be launch as their site.",
  },
  {
    href: "https://artistrybysiyah.art/",
    title: "Artistry By Siyah",
    subtitle:
      "This website was designed and developed for an individual who runs a page that sales self made artistic products",
  },
  {
    href: "http://beauty1.webtalkee.art/",
    title: "Budget Beauty Shop",
    subtitle:
      "This website was designed and developed for an individual who runs a business that sales beauty products",
  },
  {
    href: "http://ecom2.webtalkee.art/",
    title: "Aarong",
    subtitle:
      "This website was designed and developed for a company who runs multi product online store",
  },
  {
    href: "http://ecom1.webtalkee.art/",
    title: "Lucrative Garments",
    subtitle:
      "This website was designed and developed for a Garments factory who sells garment related products",
  },
  {
    href: "https://sundarbanpestcontrol.com/",
    title: "Sundarban Pest Control",
    subtitle: "This was designed and developed for a pest control company",
  },

  {
    href: "https://entanish.com/",
    title: "Entanish",
    subtitle:
      "A website of e-commerce focusing on ladies items like bag, shoe etc designed for client",
  },
  {
    href: "http://ahchanel.com/",
    title: "AH Channel",
    subtitle:
      "A website created focusing on the need of a travel vlogger youtuber client",
  },
  {
    href: "https://shaheenreza.com/",
    title: "Shaheen Reza",
    subtitle: "A portfolio for a client who owns agency on digital services",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="container">
        <div className={classes.projects__wrapper}>
          {projects.map((project, index) => (
            <Project project={project} id={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
