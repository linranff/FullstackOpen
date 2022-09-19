const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  return (
    <h4>
      Total of {parts.reduce((sum, item) => sum + item.exercises, 0)} exercises
    </h4>
  );
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => {
  return parts.map((item) => (
    <Part key={item.id} name={item.name} exercises={item.exercises} />
  ));
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
