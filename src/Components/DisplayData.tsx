interface Items {
    id: number;
}

//create an interface that takes displayData items of type T
interface DisplayDataItem<Type> {
    items: Array<Type>;
}

//to display student list and courses list
//here T means the object can be of any type.
export const DisplayData = <Type extends Items> ({ items }: DisplayDataItem<Type>) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
    )}