import { IMenuItem } from ".";
const MENU_DATA: IMenuItem[] = [
  {
    label: "My Inbox",
    path: "swat/my-inbox",
    // submenu: [],
  },
  {
    label: "Watchlist",
    path: "swat/watchlist",
    // submenu: [],
  },
  {
    label: "Office Inbox",
    path: "swat/office-inbox",
    submenu: [
      {
        label: "Mining Inbox",
        path: "swat/office-inbox/mining",
        submenu: [
          {
            label: "Mining Role ",
            path: "swat/office-inbox/mining/role",
          },
          {
            label: "Mining User ",
            path: "swat/office-inbox/mining/user",
          },
          {
            label: "Mining Office User ",
            path: "swat/office-inbox/mining/office-user",
          },
        ],
      },
      {
        label: "Oil & Gas Inbox",
        path: "swat/office-inbox/oil-gas",
        submenu: [
          {
            label: "Oil & Gas Role Administration",
            path: "swat/office-inbox/oil-gas/role",
          },
          {
            label: "Oil & Gas User Administration",
            path: "swat/office-inbox/oil-gas/user",
          },
          {
            label: "Oil & Gas Office User Administration",
            path: "swat/office-inbox/oil-gas/office-user",
          },
        ],
      },
      {
        label: "Consolidated Inbox",
        path: "swat/office-inbox/consolidated",
      },
      {
        label: "BSO Inbox",
        path: "swat/office-inbox/bso",
      },
    ],
  },
  {
    label: "Workload",
    path: "swat/workload",
    submenu: [
      {
        label: "Create New Review ",
        path: "swat/workload/new-review",
      },
      {
        label: "View User Inbox",
        path: "swat/workload/view-user",
      },
      {
        label: "View User Open Reviews",
        path: "swat/workload/open-view",
      },
      {
        label: "Bulk Assignment  ",
        path: "swat/workload/bulk-assignment",
      },
    ],
  },
  {
    label: "Dashboards",
    path: undefined,
    submenu: [
      {
        label: "Office Dashboard",
        path: "swat/dashboards/office",
      },
      {
        label: "User Dashboard",
        path: "swat/dashboards//user",
      },
    ],
  },
  {
    label: "Notifications",
    path: "swat/notifications",
    // submenu: [],
  },
  {
    label: "Search",
    path: "swat/search",
    // submenu: [],
  },
  {
    label: "COOP",
    path: "swat/coop",
    // submenu: [],
  },
  {
    label: "Admin",
    path: undefined,
    submenu: [
      {
        label: "Administration",
        path: undefined,
        submenu: [
          {
            label: "Role Administration",
            path: "swat/role-admin",
          },
          {
            label: "User Administration",
            path: "swat/user-admin",
          },
          {
            label: "Office User Administration",
            path: "swat/office-user-admin",
          },
        ],
      },
      {
        label: "Effect",
        path: undefined,
        submenu: [
          { label: "Effectiveness Queue", path: "swat/queue" },
          {
            label: "Effectiveness Transmitted",
            path: "swat/transmitted",
          },
          { label: "PAC Effect / Qualify", path: "pac-quality" },
        ],
      },
      {
        label: "View User Inbox",
        path: "swat/admin/view-user-inbox",
      },
      {
        label: "Term User - Open Tasks",
        path: "swat/admin/term-user-open-tasks",
      },
      {
        label: "Update Owner Org",
        path: "swat/admin/update-owner-org",
      },
      {
        label: "Task Reassignment",
        path: "swat/admin/task-reassign",
      },
      {
        label: "Update DRS/DOS Form Type",
        path: "swat/admin/update-forms",
      },
      {
        label: "User By Role",
        path: "swat/admin/user-by-role",
      },
      {
        label: "Review Actions",
        path: "swat/admin/review-actions",
      },
      {
        label: "Modify SWAT Filing",
        path: "swat/admin/modify-filing",
      },
      {
        label: "Modify Review Data",
        path: "swat/admin/modify-review-data",
      },
      {
        label: "Manage Designations",
        path: "swat/admin/manage-designations",
      },
      {
        label: "Manage Offices",
        path: "swat/admin/manage-offices",
      },
      {
        label: "Manage Roles",
        path: "swat/admin/manage-roles",
      },
      {
        label: "Modify Review Filing Rel",
        path: "swat/admin/modify-review-filing",
      },
      {
        label: "Application Configuration",
        path: "swat/admin/app-config",
      },
      {
        label: "Change Owner Branch",
        path: "swat/admin/change-owner-branch",
      },
      {
        label: "Checklist Configuration",
        path: "swat/admin/checklist-config",
      },
      {
        label: "Monitor Review Rule 418",
        path: "swat/admin/monitor-review-rule-418",
      },
      {
        label: "Change CIFR",
        path: "swat/admin/change-cifr",
      },
      {
        label: "Manage Menus",
        path: "swat/admin/manage-menus",
      },
      {
        label: "Overflow: Route to Other Office",
        path: "swat/admin/overflow-rtoo",
      },
      {
        label: "Modify Additional Info",
        path: "swat/admin/modify-additional-info",
      },
      {
        label: "Modify Review Round  ",
        path: "swat/admin/modify-review-round",
      },
    ],
  },
  {
    label: "Support",
    path: undefined,
    submenu: [
      {
        label: "Create New Document",
        path: "",
      },
      {
        label: "Update Document",
        path: "",
      },
      {
        label: "Add New Company",
        path: "",
      },
      {
        label: "Add New Letter Template",
        path: "",
      },
      {
        label: "Update Letter Template",
        path: "",
      },
      {
        label: "Email Requests and History",
        path: "",
      },
      {
        label: "SWAT Dynamic Labels",
        path: "",
      },
      {
        label: "Manage SWAT LOVs",
        path: "",
      },
      {
        label: "Screening Dynamic Fields",
        path: "",
      },
      {
        label: "SEC Holidays",
        path: "",
      },
    ],
  },
  {
    label: "Reports",
    path: undefined,
    submenu: [
      {
        label: "Dashboard Export",
        path: "",
      },
    ],
  },
];

export default MENU_DATA;
