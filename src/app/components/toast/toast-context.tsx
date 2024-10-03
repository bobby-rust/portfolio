"use client";

import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import Toast from "./toast";

type ToastContext = (
    title: string,
    message: string,
    success: boolean,
    duration?: number,
) => void;
const ToastContext = createContext<ToastContext | undefined>(undefined);

interface ToastContent {
    title: string;
    message: string;
    success: boolean;
    duration: number;
}

interface ToastProviderProps {
    children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
    const [toastContent, setToastContent] = useState<ToastContent | null>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    function renderToast(
        title: string,
        message: string,
        success: boolean,
        duration: number = 5000,
    ) {
        setToastContent({ title, message, success, duration });
        setVisible(true);

        const timer = setTimeout(() => {
            onClose();
        }, duration); // Adjust duration as needed

        setTimeoutId(timer);
    }

    function onClose() {
        clearTimeout(
            setTimeout(() => {
                setToastContent(null); // Clear toast after some time
            }, 200),
        );

        setVisible(false);
    }

    // Clean up the timeout if the component unmounts or if a new toast is shown
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (
        <ToastContext.Provider value={renderToast}>
            {children}
            {toastContent && (
                <Toast
                    title={toastContent?.title ?? ""}
                    message={toastContent?.message ?? ""}
                    visible={visible}
                    onClose={onClose}
                    success={toastContent.success}
                />
            )}
        </ToastContext.Provider>
    );
}

// Hook to use the toast function
export const useToast = () => {
    const context = useContext(ToastContext);
    if (typeof context === "undefined") {
        throw new Error("useToast must be used within a ToastProvider");
    }

    return context;
};
