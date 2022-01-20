import React from 'react';
import '../../App.css';
import profile from '../../assets/images/profile.jpg'

export default function Home() {
  return (
    <div className='home'>
      <h1 class="section__title section__title--intro">
        Hi, I am <strong>Charlie Ding</strong>
      </h1>
      <p class="section__subtitle section__subtitle--intro">SOFTWARE DEV</p>
      <img src={profile} alt="a pic of Charlie Ding smiling" class="intro__img"></img>
    </div>  
  );
}