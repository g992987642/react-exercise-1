import React, { Component } from 'react';
import HeadPortrait from './components/HeadPortrait';
import Introducation from './components/Introducation';
import AboutMe from './components/AboutMe';
import EducationList from './components/EducationList';
import Person from './class/Persion';
import avator from './assets/avatar.jpg';
import Education from './class/Education';
import './App.scss';
class App extends Component {
  render() {
    return (
      <main className={'app'}>
        <HeadPortrait
          src={person.headPortrait}
          alt={person.name}
        ></HeadPortrait>
        <Introducation content={person.introduce()}></Introducation>
        <AboutMe content={person.aboutMe}></AboutMe>
        <EducationList educations={person.educations}></EducationList>
      </main>
    );
  }
}

const person = new Person(
  'kamil',
  24,
  avator,
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
    'Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet ' +
    'faceretempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.',
  [
    new Education(
      1990,
      'I was born in Katowice',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.'
    ),
    new Education(
      2005,
      'Secondary school specializing in artistic',
      'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.'
    ),
    new Education(
      2009,
      'First level graduation in Graphic Design',
      'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores underepellat.'
    ),
    new Education(
      2012,
      'Second level graduation in Graphic Design',
      'Ducimus, aliquam tempore autem itaque et accusantium!'
    ),
  ]
);

export default App;
