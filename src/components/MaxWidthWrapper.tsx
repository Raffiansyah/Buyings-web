import { ReactNode } from "react";
import { cn } from "~/utils/utils";

export default function MaxWitdthWrapper({
    children,
    className
}: Readonly<{
    children: ReactNode,
    className?: string
}>) {
    return (
        <div className={cn('max-w-screen-xl container', className)}>
            {children}
        </div>
    )
}