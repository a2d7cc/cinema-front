import { TypeMaterialiconName } from "@/shared/types/icons.types";

export interface IMenuItem {
	icon: TypeMaterialiconName
	title: string
	link: string
}

export interface IMenu {
	title: string;
	items: IMenuItem[];

}