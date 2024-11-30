import PlanDropdowns from "./MainBodyComponents/PlanDropdowns";
//Currently not used
const MainBody = () => {
    const mainBodyStyle = {
      backgroundColor: '#292322',
      height: '100vh',
    };
  
    return (
      <div style={mainBodyStyle}>
        <PlanDropdowns></PlanDropdowns>
      </div>
    );
  };
  
  export default MainBody;