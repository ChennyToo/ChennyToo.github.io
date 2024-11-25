const LoginButton = () => {

    const buttonStyle = {
        backgroundColor: '#FFA500',
        color: 'white',
        fontSize: '16px',
        height: '60px',
        width: '50%',
        outline: '1px solid black',
        borderRadius: '12px',
      };
  return (
    <button style={buttonStyle}>
      Log In
    </button>
  );
};

export default LoginButton;