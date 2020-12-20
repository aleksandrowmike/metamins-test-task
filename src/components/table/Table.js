import TableItem from "./tableItem/TableItem";
import './Table.scss';
import Pagination from "../pagination/Pagination";

function Table({ data, fields }) {
    return (
        <>
        <div className="table-responsive">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        {fields.map((field, index) => (
                            <th scope="col" key={field.label}>
                                {field.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <TableItem item={item} fields={fields} key={index + Math.random()} />
                    ))}
                </tbody>
            </table>
        </div>
        <Pagination />
        </>
    );
}

export default Table;