const LoginPage = () => {
    const stripStyle = {
        position: 'absolute',
        top: '-100%',
        width: '30px',
        height: '300%',
        backgroundColor: '#f5c453',
        transform: 'rotate(45deg)',
      };

      const stripSeries = [
        { marginLeft: '30%' },
        { marginLeft: '50%' },
        { marginLeft: '70%' },
      ];

    return (
      <div style={{ backgroundColor: '#292322', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ backgroundColor: 'orange', width: '40%', height: '50%', marginBottom:'10%',borderRadius: '12px', overflow: 'hidden', position:'relative' }}>
      {stripSeries.map((strip, index) => (
        <div key={index} style={{ ...stripStyle, marginLeft: strip.marginLeft }}></div>
      ))} 
        </div>
      </div>
    );
  };

export default LoginPage;