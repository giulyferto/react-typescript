import {Sub} from '../../types'

//tsx tiene implementacion de React y ts es solo TypeScript
interface Props {
    //children: (name: string) => React.ReactNode 
    //Se puede tipar para que solo acepte un string por ejemplo
    subs: Array<Sub>
}

const List: React.FC<Props> = ({subs}: Props) => { //FC => FunctionComponenet
    return (
    <ul>
    {
    subs.map((sub) => {
        return (
        <li key={sub.nick}>
            <img src={sub.avatar} alt={"Avatar for "} />
            <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
            </h4>
            <p>{sub.description?.substring(0, 100)}</p>
        </li>
        );
    })}
    </ul>
);
}

export default List;