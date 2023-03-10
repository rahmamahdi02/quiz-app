const Header = (props) => {

  let message;

  if (props.user) {

    message = `${props.user}! Are You Smarter Than A 5th Grader?
    `;

  } else {
    
    message = `Are You Smarter Than A 5th Grader? Prove It!`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;