import React from "react";
import { SummaryWrapper } from "../style";

export default function Summary() {
	return (
		<SummaryWrapper>
			<div className="header">
				<h3 className="header-title">Summary</h3>
				<p className="item-purchased">10 items purchased</p>
			</div>
			<div className="footer">
				<div className="cost-item">
					<p className="cost-label">Cost of goods</p>
					<p className="cost-price">500,000</p>
				</div>
				<div className="cost-item">
					<p className="cost-label">Dropshipping Fee</p>
					<p className="cost-price">5,900</p>
				</div>
			</div>
		</SummaryWrapper>
	);
}
