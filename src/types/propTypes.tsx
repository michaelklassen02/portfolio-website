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
    onClick: () => void;
}

export interface WorkExperienceModalData {
    jobTitle: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    companyName: string;
    jobDescription: string;
    skills: string[];
}

export interface WorkExperienceModalProps {
    open: boolean;
    openCloseFunction: (status: number) => void;
    data: WorkExperienceModalData|null;
}