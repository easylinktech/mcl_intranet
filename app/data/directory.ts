export type DirectoryEntry = {
  name: string;
  department: string;
  role: string;
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
  DirectoryEntry["kind"],
  string?,
  string?,
][] = [
  [
    "Debra Abwao",
    "Admin",
    "dAbwao@gualaclosures.com",
    "Person",
    "Admin",
  ],
  [
    "Costing team",
    "Costing",
    "bOkello@gualaclosures.com",
    "Shared mailbox",
    undefined,
    "Boniface Okello and Chris Muimi",
  ],
  [
    "Chris Muimi",
    "Costing",
    "cMuimi@gualaclosures.com",
    "Person",
  ],
  [
    "Livingstone Okwisia",
    "Costing",
    "lOkwisia@gualaclosures.com",
    "Person",
  ],
  [
    "Dominic Owino",
    "Exports",
    "dOwino@gualaclosures.com",
    "Person",
  ],
  [
    "Justin Nyukuri",
    "Exports",
    "jNyakuri@gualaclosures.com",
    "Person",
    "Impex",
    "Previously listed as Justine Nyukuri. Name and Guala email reproduced as shown in the register.",
  ],
  [
    "Chike Asoh",
    "Fabrication",
    "cAsoh@gualaclosures.com",
    "Person",
  ],
  [
    "Fabrication team",
    "Fabrication",
    "fabrication.ke@gualaclosures.com",
    "Shared mailbox",
    undefined,
    "Benjamin Mutinda and other team leaders",
  ],
  [
    "Thalamuthu Nadar",
    "Fabrication",
    "nThalamuthu@gualaclosures.com",
    "Person",
  ],
  [
    "John Mbugua",
    "Finance",
    "jMbugua@gualaclosures.com",
    "Person",
  ],
  [
    "Brian Okech",
    "Finance",
    "bOkech@gualaclosures.com",
    "Person",
    "Senior Accountant",
  ],
  [
    "Naomi Muthumbi",
    "Finance",
    "nMuthumbi@gualaclosures.com",
    "Person",
  ],
  [
    "Meshack Mwanja",
    "Finance",
    "dispatch.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Benjamin Muli",
    "Human Resources",
    "hrd.ke@gualaclosures.com",
    "Person",
  ],
  [
    "John Karari",
    "Human Resources",
    "jKarari@gualaclosures.com",
    "Person",
    "HR",
  ],
  [
    "ICT Admin",
    "ICT",
    "ict.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Meeting Email",
    "Boardroom",
    "meeting.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Reception",
    "Metal Crowns Kenya",
    "reception.ke@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Nathan Githinji",
    "Maintenance",
    "nGithinji@gualaclosures.com",
    "Person",
    "Maintenance",
  ],
  [
    "Pravin Karekar",
    "Maintenance",
    "pKarekar@gualaclosures.com",
    "Person",
    "Maintenance",
  ],
  [
    "Gurdip Singh",
    "Director",
    "gurdip@gualaclosures.com",
    "Person",
    "Director",
  ],
  [
    "Tanay Shanbag",
    "Plant Manager Tanzania",
    "tShanbag@gualaclosures.com",
    "Person",
  ],
  [
    "Dar es Salaam",
    "Tanzania Dar",
    "dar.tz@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Suryakant Nirala",
    "Admin Tanzania",
    "sNirala@gualaclosures.com",
    "Person",
  ],
  [
    "Quality Tanzania",
    "Quality Control Tanzania",
    "quality.tz@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Robert Wairimu",
    "Plastics",
    "wRobert@gualaclosures.com",
    "Person",
  ],
  [
    "Siddharth Naik",
    "Plastics",
    "sNaik@gualaclosures.com",
    "Person",
  ],
  [
    "Amit Kumar",
    "Printing",
    "aKumar@gualaclosures.com",
    "Person",
  ],
  [
    "Denis Maingi",
    "Printing",
    "platemaking.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Alex Mwangi",
    "Studio Kenya",
    "Studio.ke@gualaclosures.com",
    "Person",
  ],
  [
    "Myra Minayo",
    "Quality Control Kenya",
    "mMinayo@gualaclosures.com",
    "Person",
    "QC",
  ],
  [
    "Quality",
    "Quality Control Kenya",
    "quality.mc@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Emmanuel Kibet",
    "Engineering Stores",
    "spares.ke@gualaclosures.com",
    "Person",
    "Stores",
  ],
  [
    "Arnold Kipsang",
    "Warehouse",
    "warehouse.ke@gualaclosures.com",
    "Person",
    "Warehouse",
    "Previously listed as Kipsang Arnold.",
  ],
  [
    "Gunwant Parmar",
    "",
    "gParmar@gualaclosures.com",
    "Person",
  ],
  [
    "Metal Crowns Scanner",
    "",
    "scanner.mcl@gualaclosures.com",
    "Shared mailbox",
  ],
  [
    "Contact Us",
    "",
    "contactus.ke@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contact: Gurdip",
  ],
  [
    "Data Protection",
    "",
    "dpo.ke@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contacts: ICT, Prescott",
  ],
  [
    "Sales",
    "",
    "sales.mcl@gualaclosures.com",
    "Distribution list",
    undefined,
    "Register contacts: Gurdip, Accounts MCL",
  ],
  [
    "Logistics Department",
    "",
    "",
    "Distribution list",
    undefined,
    "Register contact: Gurdip. No Guala email provided.",
  ],
  [
    "Alice",
    "Administration",
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
  .map(([name, department, gualaEmail, kind, role, notes]) => ({
    name,
    department,
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
    entry.gualaEmail,
    entry.notes || "",
    entry.kind,
  ]
    .join(" ")
    .toLowerCase()
    .includes(query.toLowerCase().trim());
}
