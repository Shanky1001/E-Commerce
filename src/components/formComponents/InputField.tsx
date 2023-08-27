// "use client"
const InputField = ({ data, onChange, value}: any) => {
	return (
		<div className="relative">
			<p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
				{data.label}
			</p>
			<input
				placeholder={data.placeholder}
				type={data.type || "text"}
				value={value}
				onChange={(e:any) =>onChange(e.target.value,data.id)}
				className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-black block bg-white border-gray-300 rounded-md"
			/>
		</div>
	);
};

export default InputField;
