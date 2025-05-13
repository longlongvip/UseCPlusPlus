export interface NavItem {
    title: string;
    description?: string;
    link: string;
    image?: string;
    bdcolor?: string;
    bgcolor?: string;
    feature?: string;
    proxy?: string;
}

export interface NavList {
    items: NavItem[];
}
