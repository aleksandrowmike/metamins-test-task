function TableItem({ item, fields }) {
    return (
        <tr>
            {fields.map((field, index) => (
                <td className={`item-${field.value}`} key={index + Date.now()}>
                    {item[field.value]}
                </td>
            ))}
       </tr> 
    );
}

export default TableItem;