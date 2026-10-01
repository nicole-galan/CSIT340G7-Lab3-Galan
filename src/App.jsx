const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
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
      <Part
        name={props.course.part1}
        exercises={props.course.exercises1}
      />
      <Part
        name={props.course.part2}
        exercises={props.course.exercises2}
      />
      <Part
        name={props.course.part3}
        exercises={props.course.exercises3}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {
        props.course.exercises1 +
        props.course.exercises2 +
        props.course.exercises3
      }
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App