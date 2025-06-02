
export interface NavigationItem {
  label: string;
  path?: string;
  hasDropdown?: boolean;
  items?: { label: string; path: string; }[];
}

export const mainNavItems: NavigationItem[] = [
  { 
    label: "Solutions", 
    hasDropdown: true,
    items: [
      { label: "For Law Firms", path: "/solutions/law-firms" },
      { label: "For Corporate Legal", path: "/solutions/corporate-legal" },
      { label: "For Individual Attorneys", path: "/solutions/individual-attorneys" },
      { label: "All Solutions", path: "/solutions" }
    ]
  },
  { label: "Platform", path: "/platform" },
  { label: "Trust & Security", path: "/trust-security" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];
