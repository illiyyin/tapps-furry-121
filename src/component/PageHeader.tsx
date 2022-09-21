import React from "react";
import { ILabel } from "../model";
import { Header } from "../style";

export default function PageHeader({label}:ILabel) {
	return <Header>{label}</Header>;
}
