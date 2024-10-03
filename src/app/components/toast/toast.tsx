import { CircleCheck, CircleX } from "lucide-react";

interface ToastProps {
    title: string;
    message: string;
    onClose: () => void;
    visible: boolean;
    success: boolean;
}

export default function Toast({
    title,
    message,
    visible,
    onClose,
    success,
}: ToastProps) {
    return (
        <div
            className={`flex rounded-lg justify-between shadow-lg m-3 px-3 py-2 sm:p-5  gap-2 border-2 bg-background border-gray-400 fixed bottom-5 left-0 right-0 md:left-auto lg:right-5 md:w-[600px] ${visible ? "animate-rise" : "animate-fall"}`}
        >
            <div className="flex gap-2">
                <div
                    className={`${success ? "text-green-500" : "text-red-500"} w-1/8 flex justify-center items-center`}
                >
                    {success ? (
                        <CircleCheck size={40} />
                    ) : (
                        <CircleX size={40} />
                    )}
                </div>
                <div className="flex flex-col justify-center h-full">
                    <h4 className="font-semibold xs:text-lg">{title}</h4>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base">
                        {message}
                    </p>
                    <div className="h-1/3"></div>
                </div>
            </div>
            <div className="flex justify-center  items-center">
                <button
                    className="p-3 border-2 text-xs sm:text-base rounded-lg hover:bg-gray-200"
                    onClick={() => onClose()}
                >
                    Okay
                </button>
            </div>
        </div>
    );
}
