
export type StatesTypes = StateTypes[]

export interface StateTypes {
  name: string
  type: string
  details: DetailsType
  children: StateTypes[]
}

export interface DetailsType {
  age?: string
  style?: string
  history?: string
  altitude?: string
  festival?: string
  location?: string
  builtBy?: string
  material?: string
  activities?: string[]
  importance?: string
  reconstructedBy?: string
  famousFor?: string
  founded?: string
  buddhistSect?: string,
  capital?: string
}
