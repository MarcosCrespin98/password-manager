import { LucideIcon } from "lucide-react";

export interface SingleItemProps {
    label: string;
    icon: LucideIcon;
    href: string;
    onClick?: () => void;
}