import './App.css';
import ExpenseItem from './Components/ExpenseItem';
import Card from './Components/Shared/Card';
import data from './utils/data.json';

const App = () => {
  console.log(data);
  return (
    <div className="App">
      <h2>App Component loaded</h2>
      <Card className="expenses">
        <ExpenseItem date={data[0].date} title={data[0].title} amount={data[0].amount}/>
        <ExpenseItem date={data[1].date} title={data[1].title} amount={data[1].amount}/>
        <ExpenseItem date={data[2].date} title={data[2].title} amount={data[2].amount}/>
        <ExpenseItem date={data[3].date} title={data[3].title} amount={data[3].amount}/>
      </Card>
    </div>
  );
}

export default App;
