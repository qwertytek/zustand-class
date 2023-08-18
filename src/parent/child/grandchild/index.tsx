import useCounterStore from '../../../store/counter'

interface GrandchildProps {
    counterValue: number;
}

const Grandchild = ({ counterValue }: GrandchildProps) => {
    const  counterStoreValue= useCounterStore(
        ({ value }) => value
    );

    const a = useCounterStore(
        ({ a }) => a
    );

    return (
      <>
        {'counter value drilled prop: '}
        {counterValue}
        {'counter value from zustand: '}
        {counterStoreValue}
        <p>
            {a}
        </p>
      </>
    )
}
  
export default Grandchild
  