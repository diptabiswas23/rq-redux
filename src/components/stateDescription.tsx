import { memo } from 'react'
import  { useStatesQueryV1, useStatesQueryV2 } from '../query/states/useStatesQuery';


const StateDescription = () => {
  // isFetching Should not render
  const {isFetching} = useStatesQueryV2(
    // {select : (state) => state[0]?.children[0].name}
  );
  console.log(`RENDER: StateDescription(Child) `)


  return (
    <div>oneState</div>
  )
}

export default memo(StateDescription)