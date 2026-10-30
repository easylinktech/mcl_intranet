export type DirectoryEntry = {
  name: string;
  department: string;
  role: string;
  email: string;
  gualaEmail: string;
  kind: "Person" | "Shared mailbox" | "Distribution list";
  notes?: string;
  initials: string;
};

// Transcribed from the supplied account register. Blank fields are not inferred.
const rows: [
  string,
  string,
  string,
  string,
  DirectoryEntry["kind"],
  string?,
  string?,
][] = [
  [
    "Debra Abwao",
    "Admin",
    "mcladmin@metalcrowns.com",
    "dAbwao@gualaclosures.com",
    "Person",
    "Admin",
  ],
  [
    "Costing team",
    "Costing",
    "costing@metalcrowns.com",
    "bOkello@gualaclosures.com",
    "Shared mailbox",
    undefined,
    "Boniface Okello and Chris Muimi",
  ],
  [
    "Chris Muimi",
    "Costing",
    "costing@metalcrowns.com",
    "cMuimi@gualaclosures.com",
    "Person",
  ],
  [
    "Livingstone Okwisia",
    "Costing",
    "livingstone@metalcrowns.com",
    "lOkwisia@gualaclosures.com",
    "Person",
  ],
  [
    "Dominic Owino",
    "Exports",
    "dominic@metalcrowns.com",
    "dOwino@gualaclosures.com",
    "Person",
  ],
  [
    "Justin Nyukuri",
    "Exports",
    "mclimpex@metalcrowns.com",
    "jNyakuri@gualaclosures.com",
    "Person",
    "Impex",
    "Previously listed as Justine Nyukuri. Name and Guala email reproduced as shown in the register.",
  ],
  [
    "Chike Asoh",
    "Fabrication",
    "chike@metalcrowns.com",
    "cAsoh@gualaclosures.com",
    "Person",
  ],
  [
    "Fabrication team",
    "Fabrication",
    "Fabrication@metalcrowns.com",
    "fabrication.ke@gualaclosures.com",
    "Shared mailbox",
    undefined,
    "Benjamin Mutinda and other team leaders",
  ],
  [
    "Thalamuthu Nadar",
    "Fabrication",
    "thalamuthu@metalcrowns.com",
    "nThalamuthu@gualaclosures.com",
    "Person",
  ],
  [
    "John Mbugua",
    "Finance",
    "accounts@metalcrowns.com",
    "jMbugua@gualaclosures.com",
    "Person",
  ],
  [
    "Brian Okech",
    "Finance",
    "brian@metalcrowns.com",
    "bOkech@gualaclosures.com",
    "Person",
    "Senior Accountant",
  ],
  [
    "Naomi Muthumbi",
    "Finance",
    "naomi@metalcrowns.com",
    "nMuthumbi@gualaclosures.com",
    "Person",
  ],
  [
    "Meshack Mwanja",
    "Finance",
    "dispatch@metalcrowns.com",
    "dispatch.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Benjamin Muli",
    "Human Resources",
    "hrd@metalcrowns.com",
    "hrd.ke@gualaclosures.com",
    "Person",
  ],
  [
    "John Karari",
    "Human Resources",
    "john@metalcrowns.com",
    "jKarari@gualaclosures.com",
    "Person",
    "HR",
  ],
  [
    "ICT Admin",
    "ICT",
    "it@metalcrowns.com",
    "ict.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Meeting Email",
    "Boardroom",
    "meeting@metalcrowns.com",
    "meeting.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Reception",
    "Metal Crowns Kenya",
    "reception@metalcrowns.com",
    "reception.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Nathan Githinji",
    "Maintenance",
    "nathan@metalcrowns.com",
    "nGithinji@gualaclosures.com",
    "Person",
    "Maintenance",
  ],
  [
    "Pravin Karekar",
    "Maintenance",
    "pravin@metalcrowns.com",
    "pKarekar@gualaclosures.com",
    "Person",
    "Maintenance",
  ],
  [
    "Gurdip Singh",
    "Director",
    "gurdip@metalcrowns.com",
    "gurdip@gualaclosures.com",
    "Person",
    "Director",
  ],
  [
    "Tanay Shanbag",
    "Plant Manager Tanzania",
    "tanay@metalcrowns.com",
    "tShanbag@gualaclosures.com",
    "Person",
  ],
  [
    "Dar es Salaam",
    "Tanzania Dar",
    "mclDar@metalcrowns.com",
    "dar.tz@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Suryakant Nirala",
    "Admin Tanzania",
    "suryakant@metalcrowns.com",
    "sNirala@gualaclosures.com",
    "Person",
  ],
  [
    "Quality Tanzania",
    "Quality Control Tanzania",
    "qualitytz@metalcrowns.com",
    "quality.tz@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Robert Wairimu",
    "Plastics",
    "Robert@metalcrowns.com",
    "wRobert@gualaclosures.com",
    "Person",
  ],
  [
    "Siddharth Naik",
    "Plastics",
    "naik@metalcrowns.com",
    "sNaik@gualaclosures.com",
    "Person",
  ],
  [
    "Amit Kumar",
    "Printing",
    "amit@metalcrowns.com",
    "aKumar@gualaclosures.com",
    "Person",
  ],
  [
    "Denis Maingi",
    "Printing",
    "Platemaking@metalcrowns.com",
    "platemaking.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Alex Mwangi",
    "Studio Kenya",
    "studio@metalcrowns.com",
    "Studio.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Myra Minayo",
    "Quality Control Kenya",
    "myra@metalcrowns.com",
    "mMinayo@gualaclosures.com",
    "Person",
    "QC",
  ],
  [
    "Quality",
    "Quality Control Kenya",
    "quality@metalcrowns.com",
    "quality.mc@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Emmanuel Kibet",
    "Engineering Stores",
    "spares@metalcrowns.com",
    "spares.ke@gualaclosures.com",
    "Person",
    "Stores",
  ],
  [
    "Arnold Kipsang",
    "Warehouse",
    "warehouse@metalcrowns.com",
    "warehouse.ke@gualaclosures.com",
    "Person",
    "Warehouse",
    "Previously listed as Kipsang Arnold.",
  ],
  [
    "Gunwant Parmar",
    "",
    "gunwant@metalcrowns.com",
    "gParmar@gualaclosures.com",
    "Person",
  ],
  [
    "Metal Crowns Scanner",
    "",
    "scanner@metalcrowns.com",
    "scanner.mcl@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Contact Us",
    "",
    "contactus@metalcrowns.com",
    "contactus.ke@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contact: Gurdip",
  ],
  [
    "Data Protection",
    "",
    "dpo@metalcrowns.com",
    "dpo.ke@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contacts: ICT, Prescott",
  ],
  [
    "Sales",
    "",
    "sales@metalcrowns.com",
    "sales.mcl@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contacts: Gurdip, Accounts MCL",
  ],
  [
    "Logistics Department",
    "",
    "logistics-dept@metalcrowns.com",
    "",
    "Distribution list",
    undefined,
    "Register contact: Gurdip. No Guala email provided.",
  ],
  [
    "Alice",
    "Administration",
    "",
    "",
    "Person",
    "Receptionist",
    "Retained from the original staff list. No individual email provided.",
  ],
];

function seniority(entry: DirectoryEntry) {
  const preferred = [
    "Gurdip Singh",
    "John Karari",
    "Siddharth Naik",
    "Chike Asoh",
    "Brian Okech",
    "Benjamin Muli",
    "Tanay Shanbag",
    "Debra Abwao",
  ];
  const index = preferred.indexOf(entry.name);
  if (index !== -1) return index;
  return entry.kind === "Person"
    ? 10
    : entry.kind === "Shared mailbox"
      ? 11
      : 12;
}

export const directory: DirectoryEntry[] = rows
  .map(([name, department, email, gualaEmail, kind, role, notes]) => ({
    name,
    department,
    email,
    gualaEmail,
    kind,
    role: role || "",
    notes,
    initials: name
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join(""),
  }))
  .sort(
    (a, b) =>
      seniority(a) - seniority(b) ||
      a.department.localeCompare(b.department) ||
      a.name.localeCompare(b.name),
  );

export function matchesContact(entry: DirectoryEntry, query: string) {
  return [
    entry.name,
    entry.department,
    entry.role,
    entry.email,
    entry.gualaEmail,
    entry.notes || "",
    entry.kind,
  ]
    .join(" ")
    .toLowerCase()
    .includes(query.toLowerCase().trim());
}
