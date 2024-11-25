import homeIcon from '../../assets/homebutton.png';


const HomeButton = () => {
  const buttonStyle = {
    height: '80%',
    aspectRatio: '1',
    borderRadius: '50%',
    outline: '1px solid black',
    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button style={buttonStyle}>
      <img style={{ objectFit: 'scale-down',    width: '60%',
    height: '60%',filter: 'invert(1)',}} src={homeIcon}/>
    </button>
  );
};

export default HomeButton;