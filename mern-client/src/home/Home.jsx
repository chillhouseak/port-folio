import React from 'react'
import Hero from '../components/Hero'
import Education from '../components/Education'
import Skill from '../components/Skill'
import ExWork from '../components/ExWork'

function Home() {
  return (
    <div>
        <Hero/>
        <Education/>
        <ExWork/>
        <Skill/>
    </div>
  )
}

export default Home