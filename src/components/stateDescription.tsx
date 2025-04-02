import { memo } from 'react'
import useStateFromRedux from '../query/states/useStatefromRedux';
import useStatesQuery from '../query/states/useStatesQuery';
// import useStateFromRedux from '../query/states/useStatefromRedux';


const StateDescription = () => {
  // isFetching Should not render
  const {isFetching } = useStatesQuery(
    {select : (state) => state[0]?.children[0].name}
  );

  // const data = useStateFromRedux({select : (state) => state.stateReducer?.states[0].name})

  // const data = useStateFromRedux()
  console.log(`RENDER: StateDescription(Child) `)


  return (
    <div>oneState</div>
  )
}

export default memo(StateDescription)