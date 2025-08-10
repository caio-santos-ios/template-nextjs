import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Menu = {
    name: string;
    key: string;
    router: string;
    icon: IconDefinition;
}