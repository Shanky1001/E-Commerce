import React from "react";
import { ThreeDots, InfinitySpin } from "react-loader-spinner";

export const ThreeDotsLoader = ({ text = "", color = "#4fa94d" }: any) => {
	return (
		<span className="flex gap-1 items-center">
			{text}
			<ThreeDots
				height="30"
				width="80"
				radius="9"
				color={color}
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				visible={true}
			/>
		</span>
	);
};

export const InfiniteLoading = ({ width = "200", color = "#4fa94d" }: any) => {
	return <InfinitySpin width={width} color={color} />;
};
