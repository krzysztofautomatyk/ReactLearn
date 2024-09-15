import PropTypes from 'prop-types';

function UserGreeting(props) {

    const isLoggedIn = <h1 className="welcome-message">Welcome back, {props.username}!</h1>

    const isNotLoggedIn = <h1 className="sign-up">Please sign up.</h1>

    return props.isLoggedIn ? isLoggedIn : isNotLoggedIn


/*
  if (props.isLoggedIn) {
    return <h1 className="welcome-message">Welcome back, {props.username}!</h1>;
  } else {
    return <h1 className="sign-up">Please sign up.</h1>;
  }
*/
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Geust",
};

export default UserGreeting;
