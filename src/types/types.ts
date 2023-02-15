import { Dispatch, SetStateAction } from "react";

export type IContext = {
    sidebarOpened: boolean;
    setSidebarOpened: Dispatch<SetStateAction<boolean>>;

}