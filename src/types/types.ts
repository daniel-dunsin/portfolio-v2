import { Dispatch, SetStateAction } from "react";

export type IContext = {
    sidebarOpened: boolean;
    setSidebarOpened: Dispatch<SetStateAction<boolean>>;
    companies:string[];
    selectCompany: (company:string)=> void;
    experienceInView: myExperienceProps;
}

export type myExperienceProps ={
    company: string;
    start_date: string;
    position: string;
    end_date: string;
    works: string[];
    skillsets: string[];
}