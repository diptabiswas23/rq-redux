// import { useStatesQueryV1, useStatesQueryV2 } from '../query/states/useStatesQueryDeprecated';
import StateDetails from '../components/stateDetails';
import useUpdateStateQuery from '../query/states/useUpdateStateQuery';
import StateDescription from '../components/stateDescription';
import {  StateTypes } from '../api/types';
import useStatesQuery from '../query/states/useStatesQuery';

const StatePage  = () => {
    const {data = []} = useStatesQuery();
    const {update} = useUpdateStateQuery()
    console.log(`RENDER: StatePage(Parent) `)


    const handleClick = () => {
      update()
    }

  return (
    <div style={{display: "flex"}}>
       <div>
        <p>hi states</p>
          {data?.map((state: StateTypes) => <StateDetails key={state.name} state={state}/>)}

          <button onClick={handleClick}>Add Place</button>
       </div>

       <div>
        <StateDescription/>
       </div>
    </div>
  )
}

export default StatePage 