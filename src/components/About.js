import React, { Component } from 'react';

const About = ({ content }) => (
  <div id='about-container'>
    <h1>{content.header}</h1>
    {content.content.map((p, i)=> (
      <p key={i}>{p}</p>
    ))}
  </div>
)

export default About