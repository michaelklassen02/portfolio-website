export interface HamburgerIconProps {
    open: boolean
    openCloseFunction: () => void;
}

export interface MenuButtonProps {
    name: string;
    link: string;
}

export interface ContactButtonProps {
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

export interface GenericBoxProps {
    title: string;
    description: string;
    onClick: () => void;
}

export interface QualificationsModalData {
    title: string;
    description: string[];
}

export interface QualificationsModalProps {
    open: boolean;
    openCloseFunction: (status: number) => void;
    data: QualificationsModalData|null;
}

export interface GenericModalProps {
    open: boolean;
    openCloseFunction: (status: number) => void;
}

export interface TechnicalDemoModalProps {
    open: boolean;
    openCloseFunction: (status: number) => void;
    modalTitle: string;
}