import { StateTypes } from "../query/states/types";

type Props = {
  state: StateTypes;
};

const StateDetails = ({ state }: Props) => {

  // console.log(`RENDER: StateDetails(Child) for ${state.name}`)
  // console.log(`RENDER: Child`, render++)

  return (
    <details style={{ paddingLeft: "10px" }}>
      <summary>{state.name}</summary>
      <p style={{ paddingLeft: "15px", margin: "0" }}>
        <p style={{ margin: "0" }}>{state.details.famousFor}</p>
        {state?.children?.length > 0 &&
          state?.children.map((_state) => <StateDetails key={_state.name} state={_state} />)}
      </p>
    </details>
  );
};

export default StateDetails;
