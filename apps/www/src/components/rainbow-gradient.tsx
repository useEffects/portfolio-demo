import { cn } from "cn-func";

export const RainbowGradient = ({ className }: { className: string }) => {
    return (
        <div
            className={cn("rainbow-animation", className)}
        ></div>
    );
};
