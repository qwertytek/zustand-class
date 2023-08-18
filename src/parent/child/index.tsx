import Grandchild from "./grandchild"

interface ChildProps {
    counterValue: number
}

const Child = ({ counterValue }: ChildProps) => {
  return (
    <>
        <Grandchild counterValue={counterValue} />
    </>
  )
}

export default Child
