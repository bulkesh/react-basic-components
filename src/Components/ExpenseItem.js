import './ExpenseItem.css'
import Card from './Shared/Card';
import DateWidgit from './Shared/DateWidgit';
const ExpenseItem = (props) => {
    return (
        <Card className="expense-items">
            <DateWidgit date={props.date}/>
            <div className="expense-item__description">{props.title}</div>
            <div className="expense-item__price">₹{props.amount}</div>
        </Card>
    )
};

export default ExpenseItem;