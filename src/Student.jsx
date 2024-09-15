 import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div className="studnet">
      <p>Name: {props.name}</p>      
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.prototype = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
}

Student.defaultProps = {
  name: "Unknown",
  isStudent: false,
}

export default Student;