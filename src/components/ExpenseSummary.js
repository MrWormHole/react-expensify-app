import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

const ExpenseSummary = ( { expenseCount, expenseTotal} ) => {
	const expenseWord = expenseCount == 1 ? "expense" : "expenses";
	const formattedTotal = numeral(expenseTotal).format("£0,0.0")
    return  (
        <div>
            <h1> Viewing {expenseCount} {expenseWord} totalling {formattedTotal} </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	
	return {
		expenseCount: visibleExpenses.length,
		expenseTotal: selectExpensesTotal(visibleExpenses)
	};
};


export default connect(mapStateToProps)(ExpenseSummary);
