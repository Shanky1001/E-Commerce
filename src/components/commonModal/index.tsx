"use client";

import { closeDialogBox } from "@/redux/features/dialog";
import { RootState } from "@/redux/store";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

const CommonModal = ({ showButtons, buttonComponent }: any) => {
	const DialogState = useSelector((state: RootState) => state.dialogBox);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(closeDialogBox());
	};
	return (
		<Transition.Root show={DialogState.open} as={Fragment}>
			<Dialog as="div" className={"relative z-10"} onClose={handleClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-900"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-900"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in-out duration-500"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Dialog.Panel className={"w-screen max-w-md"}>
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											{DialogState?.title ? (
												<div className="flex items-start justify-between">
													<Dialog.Title>
														{DialogState.title}
													</Dialog.Title>
												</div>
											) : null}
											<div className="mt-20">
												{DialogState.content}
											</div>
										</div>

										<div className="border-none px-4 py-6 sm:px-6">
											{DialogState.secondaryBtnText && (
												<button
													className="border-none rounded-full  inline-block bg-white px-5 py-3 text-xs font-medium upprcase tracking-wide text-black"
													onClick={
														DialogState.secondaryAction
													}
												>
													{
														DialogState.secondaryBtnText
													}
												</button>
											)}
											{DialogState.primaryBtnText && (
												<button
													className="border-none rounded-full  inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
													onClick={
														DialogState.primaryAction
													}
												>
													{DialogState.primaryBtnText}
												</button>
											)}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default CommonModal;
