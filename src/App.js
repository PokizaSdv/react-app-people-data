// import logo from "./logo.svg";
import "./App.css";

import { peopleData } from "./data";

function App() {
    return (
        <div className="App">
            <h1>People Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Profession</th>
                        <th>Yearly Salary</th>
                        <th>Credit Score</th>
                        <th>Yearly Saving</th>
                        <th>Average Monthly Expense</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person, idx) => {
                        <tr key={idx}>
                            <td>{person.firstName}</td>
                            <td>{person.lastName}</td>
                            <td>{person.age}</td>
                            <td>{person.profession}</td>
                            <td>{person.finance.yearlySalary}</td>
                            <td>{person.finance.yearlyTotalExpenses}</td>
                            <td>{person.finance.creditScore}</td>
                            <td>{person.finance.yearlySalary - person.finance.yearlyTotalExpenses}</td>
                            <td>{person.finance.yearlyTotalExpenses / 12}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export { App };
