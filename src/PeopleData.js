import { peopleData1 } from "./data";
import { Table } from "./design-system/Table/Table";

export const PeopleData1 = () => {
    return (
        <Table columnNames={["ID", "Name", "Age", "City"]} data={peopleData1}/>
    );
};
