import './App.css'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part =>
        <Part
          key={part.name}
          name={part.name}
          exercises={part.exercises}
        />
      )}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.courseCode} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'CSIT321 - Applications Development and Emerging Technologies'

  const parts = [
    {
      name: 'CSIT321 - Applications Development and Emerging Technologies',
      exercises: 2.0
    },
    {
      name: 'CSIT340 - Industry Elective 1',
      exercises: 2.0
    },
    {
      name: 'CSIT327 - Information Management 2',
      exercises: 2.0
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        name="Nicole Angela P. Galan"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App
