export type LibraryItem = {
  title: string;
  body: string;
  type?: "guide" | "logo" | "card";
};
export const library: Record<string, LibraryItem[]> = {
  policies: [
    {
      title: "Workplace safety guidelines",
      body: "Prepare for your shift by checking the protective equipment required for your work area. Follow approved machine procedures, keep emergency access clear and report hazards to your supervisor. Refer to the approved site safety policy for specific requirements.",
    },
    {
      title: "IT acceptable use policy",
      body: "Protect your credentials, lock unattended workstations and use company systems responsibly. Check unexpected links and attachments before opening them. Contact ICT if you suspect an account or device has been compromised.",
    },
    {
      title: "Employee handbook",
      body: "Use your employee handbook for approved workplace policies and benefits. Speak with Human Resources about employment questions, leave eligibility and the most recent approved handbook.",
    },
  ],
  "hr-forms": [
    {
      title: "Leave application guide",
      body: "Record your name, department, proposed dates, leave type and handover arrangements. Discuss your plans with your line manager and confirm the approved process with Human Resources before making commitments.",
    },
    {
      title: "Employee details update",
      body: "Employee name:\nDepartment:\nContact details to update:\nEffective date:\nSupporting information:\n\nSubmit sensitive changes through the approved HR channel.",
    },
  ],
  "finance-forms": [
    {
      title: "Expense claim worksheet",
      body: "Employee name:\nDepartment:\nDate of expense:\nBusiness purpose:\nAmount and currency:\nReceipt reference:\nApprover:\n\nConfirm the current claim requirements with Finance.",
    },
    {
      title: "Payment request checklist",
      body: "Supplier or payee:\nPurchase reference:\nInvoice date and number:\nAmount and currency:\nSupporting documents:\nApproval reference:\n\nVerify payment instructions using the approved Finance process.",
    },
  ],
  marketing: [
    {
      title: "Company introduction",
      body: "Metal Crowns Limited manufactures metal crown caps and plastic closure products for beverage packaging. Since 1978, the company has focused on quality and innovation. Tailor customer communications to approved product specifications and capabilities.",
    },
    {
      title: "Campaign planning worksheet",
      body: "Campaign objective:\nAudience:\nProduct focus:\nKey message:\nChannels:\nRequired assets:\nReview owner:\nTarget date:",
    },
  ],
  operations: [
    {
      title: "Quality assurance checklist",
      body: "Product and batch reference:\nInspection date:\nApproved specification reference:\nObservations:\nNon-conformities:\nEscalation owner:\nRelease approval:\n\nUse the approved production checklist for operational sign-off.",
    },
    {
      title: "Shift handover template",
      body: "Shift and department:\nProduction status:\nOutstanding work:\nEquipment observations:\nSafety concerns:\nQuality concerns:\nIncoming shift contact:",
    },
    {
      title: "Maintenance request worksheet",
      body: "Equipment reference:\nLocation:\nObserved issue:\nTime first observed:\nOperational impact:\nReported by:\n\nFor an immediate hazard, follow site safety procedures and notify your supervisor.",
    },
  ],
  templates: [
    {
      title: "Meeting notes",
      body: "Meeting title:\nDate:\nParticipants:\nAgenda:\nDecisions:\nActions, owners and due dates:",
    },
    {
      title: "Project brief",
      body: "Project name:\nPurpose:\nScope:\nKey stakeholders:\nMilestones:\nDependencies:\nSuccess measures:",
    },
  ],
  "brand-assets": [
    {
      title: "MCL company logo",
      type: "logo",
      body: "Download the supplied Metal Crowns Limited logo. Preserve its proportions and allow clear space around the mark.",
    },
    {
      title: "Brand colour reference",
      body: "Primary MCL blue: #1c4587\n\nUse MCL blue as the main identity colour. Maintain readable contrast and preserve the original company logo. Confirm external artwork with the designated brand owner before release.",
    },
  ],
  "business-cards": [
    {
      title: "Business card details",
      type: "card",
      body: "Select a colleague to prepare a contact details sheet for your approved business card artwork.",
    },
  ],
  "client-onboarding": [
    {
      title: "New client checklist",
      body: "Confirm the customer organisation and primary contact. Record the beverage product, closure requirements, intended market, volumes and proposed timeline. Involve the relevant sales, quality, finance and operations contacts before confirming specifications or delivery commitments.",
    },
    {
      title: "Customer requirements brief",
      body: "Organisation:\nContact:\nProduct application:\nClosure specification:\nArtwork requirements:\nExpected volume:\nDelivery location:\nQuality and compliance questions:\nInternal owner:",
    },
  ],
  "product-knowledge": [
    {
      title: "Metal crown caps",
      body: "Metal crown caps are closures used in beverage packaging. Customer requirements may cover dimensions, liner compatibility, finish, artwork and application conditions. Refer all product-specific performance and compatibility questions to the approved technical specification and Quality Control.",
    },
    {
      title: "Plastic closures",
      body: "Plastic closures are part of MCL’s beverage packaging product range. Confirm the neck finish, material, application, artwork and performance requirements against the approved product specification before making customer commitments.",
    },
  ],
  "corporate-documents": [
    {
      title: "About Metal Crowns Limited",
      body: "Metal Crowns Limited has manufactured quality metal crown caps and plastic closure products since 1978. The company’s stated mission is to drive innovation in the packaging world for beverage industries.",
    },
    {
      title: "Corporate records request",
      body: "For approved corporate records, registration documents or signed company information, contact Administration. Specify the document, intended recipient, purpose and required date. Use approved copies for external submissions.",
    },
  ],
  "industry-statistics": [
    {
      title: "Market insight tracker",
      body: "Topic:\nMarket or region:\nReporting period:\nMetric and unit:\nSource publication:\nPublication date:\nLink or document reference:\nKey finding:\nLimitations:\n\nNo verified market figures have been uploaded yet. Add the source and reporting period alongside every statistic.",
    },
  ],
  "regulatory-guidelines": [
    {
      title: "Compliance review checklist",
      body: "Identify the product, destination market, intended use and customer requirements. Ask Quality Control for the relevant approved requirements and evidence. Record the applicable authority, document version and review date. This checklist is a starting point for internal review; specific requirements must be confirmed by the responsible team.",
    },
  ],
  "staff-resources": [
    {
      title: "Getting started at MCL",
      body: "Meet your team and supervisor, confirm your work area and required equipment, and ask for the relevant safety induction. Find HR, Administration, Finance and ICT contacts in the directory. Read the approved guidance for your role and ask your line manager about team routines.",
    },
    {
      title: "Finding the right support",
      body: "HR: employment and leave questions.\nAdministration: workplace coordination.\nFinance: accounts and payment queries.\nICT: computer, software and access issues.\nQuality Control: product and quality questions.\nMaintenance: equipment issues through approved site procedures.",
    },
  ],
};
