export interface HamburgerIconProps {
    open: boolean
    openCloseFunction: () => void;
}

export interface MenuButtonProps {
    name: string;
    link: string;
}

export interface WorkExperienceBoxProps {
    jobTitle: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    companyName: string;
}