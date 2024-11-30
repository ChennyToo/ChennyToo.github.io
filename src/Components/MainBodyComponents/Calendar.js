
//Not in use
const Calendar = () => {
  const tableStyle = {
    width: "20%",
    borderCollapse: "collapse",
  };

  const headerStyle = {
    border: "1px solid black",
    textAlign: "center",
    colSpan: 7,
  };

  const cellStyle = {
    border: "1px solid black",
    textAlign: "center",
    width: "14%",
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th colSpan={7} style={headerStyle}>
            August 2024
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}></td>
          <td style={cellStyle}>1</td>
          <td style={cellStyle}>2</td>
          <td style={cellStyle}>3</td>
        </tr>
        <tr>
          <td style={cellStyle}>4</td>
          <td style={cellStyle}>5</td>
          <td style={cellStyle}>6</td>
          <td style={cellStyle}>7</td>
          <td style={cellStyle}>8</td>
          <td style={cellStyle}>9</td>
          <td style={cellStyle}>10</td>
        </tr>
        <tr>
          <td style={cellStyle}>11</td>
          <td style={cellStyle}>12</td>
          <td style={cellStyle}>13</td>
          <td style={cellStyle}>14</td>
          <td style={cellStyle}>15</td>
          <td style={cellStyle}>16</td>
          <td style={cellStyle}>17</td>
        </tr>
        <tr>
          <td style={cellStyle}>18</td>
          <td style={cellStyle}>19</td>
          <td style={cellStyle}>20</td>
          <td style={cellStyle}>21</td>
          <td style={cellStyle}>22</td>
          <td style={cellStyle}>23</td>
          <td style={cellStyle}>24</td>
        </tr>
        <tr>
          <td style={cellStyle}>25</td>
          <td style={cellStyle}>26</td>
          <td style={cellStyle}>27</td>
          <td style={cellStyle}>28</td>
          <td style={cellStyle}>29</td>
          <td style={cellStyle}>30</td>
          <td style={cellStyle}>31</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Calendar;
