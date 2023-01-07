interface Items {
    id: number;
}

//create an interface that takes displayData items of type T
interface DisplayDataItem<T> {
    items: Array<T>;
}

//to display student list and courses list
//here T means the object can be of any type.
export const DisplayData = <T extends Items> ({ items }: DisplayDataItem<T>) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    )}