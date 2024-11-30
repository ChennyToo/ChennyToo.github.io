import React, { useEffect, useState } from 'react';

const MealPlan = () => {
  const [plan, setPlan] = useState('');
  const [dollarsLeft, setDollarsLeft] = useState(0);
  const [dailySpending, setDailySpending] = useState(0);
  const [dateStart, setDateStart] = useState(new Date().toISOString().split('T')[0]);
  const [dateEnd, setDateEnd] = useState('2024-12-09');
  const [onTrack, setOnTrack] = useState(true);
  const [results, setResults] = useState({ daily: '', weekly: '', monthly: '' });

  useEffect(() => {
    handleCalculate();
  }, [onTrack])

  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    setPlan(selectedPlan);
    if (selectedPlan === 'roar') {
    setDollarsLeft(2500);
    } else if (selectedPlan === 'roarPlus') {
    setDollarsLeft(3000);
    } else if (selectedPlan === 'custom') {
    setDollarsLeft(0);
    }
  };

  const calculateDays = (start, end) => {
    const timeDiff = Math.abs(end - start);
    console.log(start)
    console.log(end)
    console.log(timeDiff)
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  const calculateSpending = (daysLeft) => {
    const dailySpend = (dollarsLeft) / daysLeft;
    const dailyAverage = dailySpending * 1;
    const weeklySpend = 7 * dailySpend;
    const weeklyAverage = 7 * dailyAverage;
    const monthlySpend = 4 * weeklySpend;
    const monthlyAverage = 4 * weeklyAverage;

    return { dailySpend, dailyAverage, weeklySpend, weeklyAverage, monthlySpend, monthlyAverage };
  };

  const handleCalculate = () => {
    const currentDate = new Date(dateStart);
    const endDate = new Date(dateEnd);
    const daysLeft = calculateDays(currentDate, endDate);
    const { dailySpend, dailyAverage, weeklySpend, weeklyAverage, monthlySpend, monthlyAverage } = calculateSpending(daysLeft);
    setResults({
        daily: `Daily Spending Goal: $${dailySpend.toFixed(2)}\nDaily Spending Average: $${dailyAverage.toFixed(2)}${onTrack ? `\nTry to spend $${Math.abs(dailySpend - dailyAverage).toFixed(2)} ${dailySpend - dailyAverage >= 0 ? 'more' : 'less'} each day.` : ''}`,
        weekly: `Weekly Spending Goal: $${weeklySpend.toFixed(2)}\nWeekly Spending Average: $${weeklyAverage.toFixed(2)}${onTrack ? `\nTry to spend $${Math.abs(weeklySpend - weeklyAverage).toFixed(2)} ${weeklySpend - weeklyAverage >= 0 ? 'more' : 'less'} each week.` : ''}`,
        monthly: `Monthly Spending Goal: $${monthlySpend.toFixed(2)}\nMonthly Spending Average: $${monthlyAverage.toFixed(2)}${onTrack ? `\nTry to spend $${Math.abs(monthlySpend - monthlyAverage).toFixed(2)} ${monthlySpend - monthlyAverage >= 0 ? 'more' : 'less'} each month.` : ''}`
      });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#292322', height: '100vh', display:'flex', justifyContent:'space-between' }}>

        <div className='leftSide' style={{width:'20%'}}>
        <select name="meal_plan" id="meal_plan" onChange={handlePlanChange} style={{ backgroundColor: '#FFB172', padding: '10px 12px', margin: '4px 0', borderColor: 'black' }}>
        <option disabled selected>Select Meal Plan</option>
        <option value="roar">Roar</option>
        <option value="roarPlus">Roar Plus</option>
        <option value="custom">Custom Amount</option>
      </select><br />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
      <h1 style={{ color: 'white', textAlign: 'center', marginTop:'20px', padding: '6px', borderRadius: '3px',backgroundColor:'#6e6565', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height:'5%', fontSize:'20px' }}>
    Current Dining Dollars
    </h1>
      <input type="text" id="dollars_spent" value={dollarsLeft} onChange={(e) => setDollarsLeft(e.target.value)} required style={{ width:'100%',height: '7%', padding: '8px 10px', boxSizing: 'border-box', backgroundColor: '#FD8532', color: 'black' }} /><br />
      <h1 style={{ color: 'white', textAlign: 'center', marginTop:'20px', padding: '6px', borderRadius: '3px',backgroundColor:'#6e6565', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height:'5%', fontSize:'20px' }}>
    Daily Spending Goal
    </h1>
      <input type="text" id="dollars_spent" value={dailySpending} onChange={(e) => setDailySpending(e.target.value)} required style={{ width:'100%',height: '7%', padding: '8px 10px', boxSizing: 'border-box', backgroundColor: '#FD8532', color: 'black' }} /><br />

</div>



      <button onClick={handleCalculate} style={{ width: '80px', height: '30px', backgroundColor: '#FFB172', margin: '4px 0' }}>Calculate</button><br />
        </div>

        
        <div className='rightSide' style={{ width: '50%', height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h3 style={{ textAlign: 'center', borderRadius: '6px', background: '#FFB172', padding: '8px', width: '20%', height: '5%' }}>Daily</h3>
  <div style={{ width: '60%', height: '20%', border: '1px solid black', padding: '5px', margin: '0px', backgroundColor: '#FD8532' }}>{results.daily}</div>

  <h3 style={{ textAlign: 'center', borderRadius: '6px', background: '#FFB172', padding: '8px', width: '20%', height: '5%' }}>Weekly</h3>
  <div style={{ width: '60%', height: '20%', border: '1px solid black', padding: '5px', margin: '0px', backgroundColor: '#FD8532' }}>{results.weekly}</div>

  <h3 style={{ textAlign: 'center', borderRadius: '6px', background: '#FFB172', padding: '8px', width: '20%', height: '5%' }}>Monthly</h3>
  <div style={{ width: '60%', height: '20%', border: '1px solid black', padding: '5px', margin: '0px', backgroundColor: '#FD8532' }}>{results.monthly}</div>

  <label htmlFor="dateStart" style={{ color: 'white' }}>Date Range</label>
  <input type="date" id="dateStart" value={dateStart} onChange={(e) => setDateStart(e.target.value)} style={{ width: '25%', height: '10%', padding: '8px 10px', margin: '4px 0', boxSizing: 'border-box', backgroundColor: '#FD8532', color: 'black' }} />
  <input type="date" id="dateLate" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} style={{ width: '25%', height: '10%', padding: '8px 10px', margin: '4px 0', boxSizing: 'border-box', backgroundColor: '#FD8532', color: 'black' }} />


  <label htmlFor="onTrack" style={{ color: 'white' }}>Show Recommendation</label>
  <input type="checkbox" id="onTrack" checked={onTrack} onChange={(e) => setOnTrack(e.target.checked)} />
</div>


    </div>
  );
};

export default MealPlan;