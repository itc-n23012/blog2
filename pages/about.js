import Hero from 'components/hero'
const About = () => {
  const props2 = { title: 'About', subtitle: 'About development activities' }
  return (
    <>
      <Hero {...props2} />
    </>
  )
}

export default About
