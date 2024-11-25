import PlanDropdowns from "./MainBodyComponents/PlanDropdowns";

const MainBody = () => {
    const mainBodyStyle = {
      backgroundColor: 'black',
      height: '100vh',
    };
  
    return (
      <div style={mainBodyStyle}>
        <PlanDropdowns></PlanDropdowns>
      </div>
    );
  };
  
  export default MainBody;