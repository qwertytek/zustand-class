import Child from './child';

interface ParentProps {
    counterValue: number
}

const Parent = ({ counterValue }: ParentProps) => {
    return (
      <>
          <Child  counterValue={counterValue} />
      </>
    );
}
  
export default Parent