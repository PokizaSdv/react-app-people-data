import { peopleData } from "./data";
import { Table } from "./design-system/Table/Table";

const flattenPeopleData = (data) => {
    return data.map((item) => {
        const finance = { ...item.finance };
        const person = {
            firstName: item.firstName,
            lastName: item.lastName,
            age: item.age,
            profession: item.profession,
            ...finance
        }

        return person;
    });
};

function calculateYearlySaving(person) {
    return person.finance.yearlySalary - person.finance.yearlyTotalExpenses;
}
function calculateAverageMonthlyExpense(person) {
    return person.finance.yearlyTotalExpenses / 12;
}
function findPersonWithMaxSalary(data) {
    let maxSalaryPerson = data[0];

    for (let i = 1; i < data.length; i++) {
        if (
            data[i].finance.yearlySalary > maxSalaryPerson.finance.yearlySalary
        ) {
            maxSalaryPerson = data[i];
        }
    }

    return maxSalaryPerson;
}

function findPersonWithMinSalary(data) {
    let minSalaryPerson = data[0];

    for (let i = 1; i < data.length; i++) {
        if (
            data[i].finance.yearlySalary < minSalaryPerson.finance.yearlySalary
        ) {
            minSalaryPerson = data[i];
        }
    }

    return minSalaryPerson;
}

export const FinanceData = () => {
    const maxSalaryPerson = findPersonWithMaxSalary(peopleData);
    const minSalaryPerson = findPersonWithMinSalary(peopleData);

    return (
        <>
            <Table
                columnNames={[
                    "FirstName",
                    "LastName",
                    "Age",
                    "Profession",
                    "Salary",
                    "Expenses",
                    "CreditScore"
                ]}
                data={flattenPeopleData(peopleData)}
            />
            <div className="App">
                <h1>People Finance Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Profession</th>
                            <th>Yearly Salary</th>
                            <th>Yearly Expenses</th>
                            <th>Credit Score</th>
                            <th>Yearly Saving</th>
                            <th>Average Monthly Expense</th>
                        </tr>
                    </thead>
                    <tbody>
                        {peopleData.map((person, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.age}</td>
                                    <td>{person.profession}</td>
                                    <td>{person.finance.yearlySalary}</td>
                                    <td>
                                        {person.finance.yearlyTotalExpenses}
                                    </td>
                                    <td>{person.finance.creditScore}</td>
                                    <td>{calculateYearlySaving(person)}</td>
                                    <td>
                                        {calculateAverageMonthlyExpense(person)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div>
                    <h3>Person who made the most:</h3>
                    <p>
                        Name: {maxSalaryPerson.firstName}{" "}
                        {maxSalaryPerson.lastName}
                    </p>
                    <p>Age: {maxSalaryPerson.age}</p>
                    <p>Amount made: {maxSalaryPerson.finance.yearlySalary}</p>
                </div>
                <div>
                    <h3>Person who made the least:</h3>
                    <p>
                        Name: {minSalaryPerson.firstName}{" "}
                        {minSalaryPerson.lastName}
                    </p>
                    <p>Age: {minSalaryPerson.age}</p>
                    <p>Amount made: {minSalaryPerson.finance.yearlySalary}</p>
                </div>
            </div>
        </>
    );
};
