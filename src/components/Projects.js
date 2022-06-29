import React from 'react';
import Project from './Project';
import classes from '../styles/Projects.module.css';

const projects = [
  {
    href: 'https://derbylabourparty.org.uk/',
    title: 'Derby Labour Party',
    subtitle:
      'its a introduction website for Derby Labour Party, A political party of UK, soon to be launch as their official one.',
  },
  {
    href: 'https://besttoolsforstartups.com/',
    title: 'Best Tools for Startups',
    subtitle: 'A website which deals with IT startup softwares from Appsumo',
  },
  {
    href: 'https://ecofriendlyfact.com/',
    title: 'Eco Friendly Fact',
    subtitle:
      'A website which publishes eco friendly blog, facts, news and sale products',
  },
  {
    href: 'https://ecomarinebd.com/',
    title: 'Eco Marine',
    subtitle: 'A website for cruise tourism business located in Dhaka',
  },
  {
    href: 'https://sundarbanpestcontrol.com/',
    title: 'Sundarban Pest Control',
    subtitle: 'This was designed and developed for a pest control company',
  },
  
  {
    href: 'https://entanish.com/',
    title: 'Entanish',
    subtitle:
    'A website of e-commerce focusing on ladies items like bag, shoe etc designed for client',
  },
  {
    href: 'https://tehrindecor.com/',
    title: 'Tehrin Decor',
    subtitle:
    'A website designed for decorating services with minimal UI experience',
  },
  {
    href: 'https://the-azad.com/',
    title: 'The Azad',
    subtitle:
      'A newspaper website for a client who wanted a friendly experience',
  },
  {
    href: 'https://pcandservices.com/',
    title: 'Pc and Services',
    subtitle:
      'This was designed and developed to ensure user experience easier and functional with PC product selling purposes',
  },
  {
    href: 'https://courses.nataliash.art/',
    title: 'Docent',
    subtitle: 'A website created for practice on learning management system',
  },
  {
    href: 'https://blogs.nataliash.art/',
    title: 'Healthy Life',
    subtitle: 'A website created for practice on blogging related purpose',
  },
  {
    href: 'https://foods.nataliash.art/',
    title: 'Gloria Food',
    subtitle: 'A website created for practice on Resturant Business',
  },
  {
    href: 'https://store.nataliash.art/',
    title: 'Shop Mila',
    subtitle: 'A website created for practice on E-commerce functionality',
  },
  {
    href: 'http://achanel.com/',
    title: 'AHchanel',
    subtitle:
      'A website created focusing on the need of a travel vlogger youtuber client',
  },
  {
    href: 'https://shaheenreza.com/',
    title: 'Shaheen Reza',
    subtitle: 'A portfolio for a client who owns agency on digital services',
  },
  {
    href: 'https://milascorner.com/',
    title: 'Milas Corner',
    subtitle:
      'This website was designed for client who was interested in e-commerce startup',
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
