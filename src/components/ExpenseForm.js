import React from "react";
import moment from "moment";
import { SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            };
        });
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            };
        });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount
                };
            });
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => {
                return {
                    createdAt
                };
            });
        }
    };

    onCalendarFocusChange = ({focused}) => {
        this.setState(() => {
            return {
                calendarFocused: focused
            };
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    
        console.log("do i even submit here?")
        if(!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: "Please provide description and amount"
                };
            });
            console.log("couldn't submit due to empty fields");
        }
        else {
            this.setState(() => {
                return {
                    error: ""
                };
            });
            this.props.onSubmit({
                    description: this.state.description,
                    amount: (parseFloat(this.state.amount, 10) * 100),
                    createdAt: this.state.createdAt.valueOf(),
                    note: this.state.note
            });
            console.log("submitted");
            console.log(`${this.state.description}`);
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p> {this.state.error} </p>}
		        <form onSubmit={this.handleSubmit}>    
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker 
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat={() => "DD/MM/YYYY"}
                    />
                    <textarea placeholder="Add a note for your expense (OPTIONAL)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        );
    }
}
