//columnNames = ["First Name", "Last Name"]
//data = [{firstName: "A", lastName: "B"}]

export const Table = ({ columnNames, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columnNames.map((column, idx) => {
                        return <th key={idx}>{column}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            {Object.values(item).map((value, i) => {
                                return <td key={i}>{value}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
