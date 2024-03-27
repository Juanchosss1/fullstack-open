
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({course}) => {
    return (      
      <h1>{course}</h1>
      )
    }
    const Part  = ({parts, part}) => {      
      return(
        <>
        Course:  {parts[part].name} - Excercises: {parts[part].exercises}
        </>
      )
    }
    const Content = ({parts}) => {
      return (  
        <>
        <p>
        <Part parts={parts} part={0} />      
        <br/>
        <Part parts={parts} part={1} />      
        <br/>
        <Part parts={parts} part={2} />      
        <br/>
        </p>      
        </>    
        )
      }

      const Total = ({parts}) => {
        let total = parts[0].exercises + parts[1].exercises + parts[2].exercises
        return (      
          <p>Number of exercises {total}</p>
          )
        }
    

  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

{/* <div>
      <Header course={course}/>
      <Part>
      <Content course={course.parts} />      
      <Total course={course}/>
    </div> */}
   
export default App
