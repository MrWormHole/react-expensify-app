import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseHelpPage from "../components/ExpenseHelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
  
  const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/"  exact={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={ExpenseHelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default AppRouter;