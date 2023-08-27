"use client";

import React from "react";

const DropDown = ({ data, value, onChange }: any) => {
	return (
		<div className="relative">
			<p className=" pt-0 pr-2 absolute pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
				{data.label}
			</p>
			<select
				value={value}
				onChange={(e: any) => onChange(e.target.value, data.id)}
				className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-black block bg-white border-gray-300 rounded-md"
			>
				{data.options && data.options.length ? (
					data.options.map((optionItem: any) => (
						<option
							id={optionItem.id}
							value={optionItem.id}
							key={optionItem.id}
						>
							{optionItem.label}
						</option>
					))
				) : (
					<option id="" value={""}>
						Select
					</option>
				)}
			</select>
		</div>
	);
};

export default DropDown;
