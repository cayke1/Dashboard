import {IconProps} from "phosphor-react";
interface NavbarButtonProps {
    icon: IconProps;
    title: string;
}

export function NavbarButton({icon, title}: NavbarButtonProps) {
    return(
        <button className="p-4 font-bold flex flex-row gap-2 bg-purple-600 opacity-50">
            {icon} {title}
        </button>
    )
}