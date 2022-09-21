export interface ISelect {
	label: string;
	value: number;
}

export interface IData {
	shipment: ISelect;
  payment: ISelect;
  dropshipper_name:string
}
export interface IShipingDict{
  [key:string]:string
}
