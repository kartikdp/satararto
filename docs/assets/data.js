window.siteData = {
  featuredIds: [
    "learner-licence",
    "permanent-driving-licence",
    "dl-renewal",
    "transfer-ownership",
    "noc",
    "hypothecation-removal"
  ],
  categories: [
    {
      id: "all",
      label: "All Services",
      description: "Complete reference list"
    },
    {
      id: "licence",
      label: "Licence",
      description: "Learner, permanent, renewal, duplicate, IDP"
    },
    {
      id: "vehicle",
      label: "Vehicle",
      description: "Registration, RC, NOC, transfer, hypothecation"
    },
    {
      id: "compliance",
      label: "Permit, Tax & PUC",
      description: "Permit guidance, tax payment, pollution certificate"
    }
  ],
  offices: [
    {
      code: "MH-11",
      name: "Dy. Regional Transport Office, Satara",
      address: "515/2, Sadar Bazar, Bhurke Bungalow, Camp, Satara - 415001",
      phone: "02162-230330",
      email: "dyrto.11-mh@gov.in",
      note: "Use this office when your existing record or official portal routing points to MH-11."
    },
    {
      code: "MH-50",
      name: "Dy. Regional Transport Office, Karad",
      address: "Gat No. 351, Padali (Kese), PO Supane, Tal. Karad, Dist. Satara - 415114",
      phone: "02164-255300 / 400 / 500",
      email: "dyrto.50-mh@gov.in",
      note: "Use this office when your existing DL or RC is already linked to MH-50 or the portal assigns your case there."
    }
  ],
  journeys: [
    {
      id: "new-driver",
      title: "I am a new driver",
      description: "Start here if you need your first learner's licence or want to move from learner's licence to permanent licence.",
      category: "licence",
      serviceIds: ["learner-licence", "permanent-driving-licence"]
    },
    {
      id: "renew-or-correct-licence",
      title: "I need to update my licence",
      description: "Best for renewal, duplicate licence, address change, or other existing-DL corrections.",
      category: "licence",
      serviceIds: ["dl-renewal", "duplicate-dl", "dl-address-change"]
    },
    {
      id: "bought-or-sold-vehicle",
      title: "I bought or sold a vehicle",
      description: "Use this if you need registration, transfer of ownership, or papers for a change in owner.",
      category: "vehicle",
      serviceIds: ["new-vehicle-registration", "transfer-ownership"]
    },
    {
      id: "moved-or-shifting-state",
      title: "I moved house or I am shifting the vehicle",
      description: "Start here for address change in RC, NOC, and related cross-jurisdiction paperwork.",
      category: "vehicle",
      serviceIds: ["rc-address-change", "noc", "rc-renewal"]
    },
    {
      id: "loan-or-finance",
      title: "My vehicle loan status changed",
      description: "Use this when finance needs to be added to the RC or removed after loan closure.",
      category: "vehicle",
      serviceIds: ["hypothecation-addition", "hypothecation-removal"]
    },
    {
      id: "travel-or-commercial",
      title: "I need travel, permit, tax, or compliance help",
      description: "Start here for IDP, permit, tax, PUC, and other compliance-heavy journeys.",
      category: "compliance",
      serviceIds: ["international-driving-permit", "permit-services", "tax-services", "puc-requirements"]
    }
  ],
  preflight: [
    {
      step: "1",
      title: "Start with your situation",
      description: "Pick the life event first, such as new licence, sold vehicle, moved house, or loan closure."
    },
    {
      step: "2",
      title: "Read the full service guide",
      description: "Check documents, official steps, fees, timelines, and whether the case is online, appointment-based, or office-heavy."
    },
    {
      step: "3",
      title: "Then use the official portal",
      description: "Once the checklist is clear, continue to Sarathi, Vahan, or Maharashtra Transport."
    }
  ],
  planner: {
    officeOptions: [
      {
        id: "unknown",
        label: "I am not sure",
        description: "Use this if you do not know whether your record is under MH-11 or MH-50."
      },
      {
        id: "mh11",
        label: "MH-11 Satara",
        description: "Choose this if your existing DL or RC already points to MH-11 Satara."
      },
      {
        id: "mh50",
        label: "MH-50 Karad",
        description: "Choose this if your existing DL or RC already points to MH-50 Karad."
      },
      {
        id: "other-state",
        label: "Another state / unknown record",
        description: "Choose this if the record is from outside Maharashtra or you expect record verification."
      }
    ],
    profileOptions: [
      {
        id: "private",
        label: "Private / personal",
        description: "Best for individual licence and private vehicle cases."
      },
      {
        id: "transport",
        label: "Transport / commercial",
        description: "Use this for permit, fitness, goods, passenger, or commercial vehicle cases."
      },
      {
        id: "unsure",
        label: "Not sure",
        description: "Use this if you want the site to keep the guidance broad."
      }
    ],
    flags: [
      {
        id: "financed",
        label: "Vehicle is financed or loan-related",
        description: "Important for hypothecation, NOC, transfer, and RC work."
      },
      {
        id: "lost",
        label: "Document is lost or damaged",
        description: "Useful for duplicate DL, duplicate RC, and similar replacement flows."
      },
      {
        id: "addressChanged",
        label: "Address has changed",
        description: "Useful for address update journeys and supporting proof checks."
      },
      {
        id: "crossJurisdiction",
        label: "Vehicle or record is moving across jurisdiction / state",
        description: "Important for NOC, transfer, and reassignment-style cases."
      },
      {
        id: "alreadyHasLearner",
        label: "Applicant already has learner's licence",
        description: "Useful for new-driver journeys where the user may be ready for permanent DL."
      }
    ]
  },
  officialTools: [
    {
      id: "sarathi",
      label: "Sarathi",
      description: "Official portal for learner's licence, driving licence, renewal, and IDP-related services.",
      url: "https://sarathi.parivahan.gov.in"
    },
    {
      id: "vahan",
      label: "Vahan",
      description: "Official portal for vehicle services like transfer, NOC, RC updates, tax, and fitness.",
      url: "https://vahan.parivahan.gov.in/vahanservice/"
    },
    {
      id: "dl-status",
      label: "Know Your Licence Details",
      description: "Official driving licence status and details lookup on Parivahan.",
      url: "https://parivahan.gov.in/rcdlstatus/?pur_cd=101"
    },
    {
      id: "vehicle-status",
      label: "Know Your Vehicle Details",
      description: "Official vehicle details lookup through the Vahan citizen service flow.",
      url: "https://vahan.parivahan.gov.in/nrservices/faces/user/citizen/searchstatus.xhtml"
    },
    {
      id: "download-forms",
      label: "All Official Forms",
      description: "Central Parivahan page for downloadable driving and vehicle forms.",
      url: "https://parivahan.gov.in/parivahan/en/content/download-forms"
    },
    {
      id: "dl-forms-page",
      label: "Driving Licence Forms",
      description: "Official driving licence forms directory on Parivahan.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0"
    },
    {
      id: "vehicle-forms-page",
      label: "Vehicle Registration Forms",
      description: "Official vehicle-registration forms directory on Parivahan.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration"
    },
    {
      id: "permit-forms-page",
      label: "Permit Forms",
      description: "Official permit forms and permit information on Parivahan.",
      url: "https://parivahan.gov.in/parivahan/en/content/permit-form"
    },
    {
      id: "fees-user-charges",
      label: "Fees and User Charges",
      description: "Official central fee table for licensing, registration, and related services.",
      url: "https://parivahan.gov.in/parivahan/en/content/fees-user-charges"
    },
    {
      id: "tax-calculation",
      label: "Maharashtra Tax Calculation",
      description: "Official Maharashtra Transport tax-calculation page.",
      url: "https://transport.maharashtra.gov.in/1167/Tax-Calculation"
    },
    {
      id: "maharashtra-faceless-dl",
      label: "Maharashtra Faceless DL Services",
      description: "Official Maharashtra page showing faceless Sarathi-related services.",
      url: "https://transport.maharashtra.gov.in/1363/Sarathi-Related-Faceless-Services?format=print"
    },
    {
      id: "maharashtra-offices",
      label: "Maharashtra Regional Offices",
      description: "Official Maharashtra office directory including Satara and Karad.",
      url: "https://transport.maharashtra.gov.in/1184/Regional-Offices?format=print"
    }
  ],
  toolGroups: [
    {
      title: "Apply Or Check Status",
      intro: "Use these official links when you are ready to apply, book, or check status.",
      toolIds: ["sarathi", "vahan", "dl-status", "vehicle-status"]
    },
    {
      title: "Download Forms And Rules",
      intro: "Use these official directories when a user needs the original government form or fee/rules page.",
      toolIds: ["download-forms", "dl-forms-page", "vehicle-forms-page", "permit-forms-page", "fees-user-charges"]
    },
    {
      title: "Maharashtra-Specific References",
      intro: "Use these for Maharashtra service status, tax pages, and office routing.",
      toolIds: ["maharashtra-faceless-dl", "tax-calculation", "maharashtra-offices"]
    }
  ],
  formLibrary: [
    {
      id: "form1",
      formNo: "Form 1",
      title: "Application-cum-declaration as to physical fitness",
      category: "Licence Forms",
      usedFor: "Learner's licence and other licence-side workflows where self-declaration is applicable.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/form%201.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 1 if the PDF does not open directly."
    },
    {
      id: "form1a",
      formNo: "Form 1A",
      title: "Medical Certificate",
      category: "Licence Forms",
      usedFor: "Driving licence renewal, IDP, and other cases needing medical certification.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/Form-1-A.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 1A if the PDF does not open directly."
    },
    {
      id: "form2",
      formNo: "Form 2",
      title: "Application for learner's licence / driving licence / renewal / change of address",
      category: "Licence Forms",
      usedFor: "Learner's licence and DL-side application flows.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 2 if the PDF does not open directly."
    },
    {
      id: "form4",
      formNo: "Form 4",
      title: "Application for Licence to Drive",
      category: "Licence Forms",
      usedFor: "Permanent driving licence and related DL issue flows.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/form4.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 4 if the PDF does not open directly."
    },
    {
      id: "form4a",
      formNo: "Form 4A",
      title: "Application for International Driving Permit",
      category: "Licence Forms",
      usedFor: "International Driving Permit applications.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/cmvr/FORM-4A.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 4A if the PDF does not open directly."
    },
    {
      id: "form5",
      formNo: "Form 5",
      title: "Driving Certificate issued by Driving School or Establishment",
      category: "Licence Forms",
      usedFor: "Transport-category driving licence cases where training certification is required.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/form5.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 5 if the PDF does not open directly."
    },
    {
      id: "form9",
      formNo: "Form 9",
      title: "Application for Renewal of Driving Licence",
      category: "Licence Forms",
      usedFor: "Driving licence renewal.",
      url: "https://parivahan.gov.in/parivahan/en/content/driving-licence-0",
      lookupHint: "Open the official driving-licence forms page and search for Form 9 on Parivahan."
    },
    {
      id: "form20",
      formNo: "Form 20",
      title: "Application for Registration of a Motor Vehicle",
      category: "Vehicle Forms",
      usedFor: "New vehicle registration.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-20.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 20 if the PDF does not open directly."
    },
    {
      id: "form25",
      formNo: "Form 25",
      title: "Application for Renewal of Certificate of Registration",
      category: "Vehicle Forms",
      usedFor: "RC renewal.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/cmvr/FORM-25.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 25 if the PDF does not open directly."
    },
    {
      id: "form26",
      formNo: "Form 26",
      title: "Application for the Issue of Duplicate Certificate of Registration",
      category: "Vehicle Forms",
      usedFor: "Duplicate RC.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 26 on Parivahan."
    },
    {
      id: "form28",
      formNo: "Form 28",
      title: "Application and Grant of No Objection Certificate",
      category: "Vehicle Forms",
      usedFor: "NOC for moving or transferring a vehicle across jurisdiction.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 28 on Parivahan."
    },
    {
      id: "form29",
      formNo: "Form 29",
      title: "Notice of Transfer of Ownership of a Motor Vehicle",
      category: "Vehicle Forms",
      usedFor: "Transfer of vehicle ownership.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 29 on Parivahan."
    },
    {
      id: "form30",
      formNo: "Form 30",
      title: "Application for Intimation and Transfer of Ownership",
      category: "Vehicle Forms",
      usedFor: "Transfer of ownership after sale.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 30 on Parivahan."
    },
    {
      id: "form33",
      formNo: "Form 33",
      title: "Intimation of Change of Address in RC",
      category: "Vehicle Forms",
      usedFor: "Address change in registration certificate.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-33.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 33 if the PDF does not open directly."
    },
    {
      id: "form34",
      formNo: "Form 34",
      title: "Application for Making an Entry of Hire-Purchase / Lease / Hypothecation",
      category: "Vehicle Forms",
      usedFor: "Hypothecation or finance entry in RC.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 34 on Parivahan."
    },
    {
      id: "form35",
      formNo: "Form 35",
      title: "Notice of Termination of Hire-Purchase / Lease / Hypothecation",
      category: "Vehicle Forms",
      usedFor: "Hypothecation removal after loan closure.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/parivahan/sites/default/files/DownloadForm/form%2035.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 35 if the PDF does not open directly."
    },
    {
      id: "form38",
      formNo: "Form 38",
      title: "Certificate of Fitness",
      category: "Fitness Forms",
      usedFor: "Fitness certificate cases, mainly for transport vehicles.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 38 on Parivahan."
    },
    {
      id: "form38a",
      formNo: "Form 38A",
      title: "Report of Inspection",
      category: "Fitness Forms",
      usedFor: "Inspection report linked to transport vehicle fitness workflows.",
      url: "https://parivahan.gov.in/parivahan/en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-38A.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 38A if the PDF does not open directly."
    }
  ],
  downloadGroups: [
    {
      title: "Licence Forms",
      intro: "Official forms commonly used for learner's licence, permanent licence, renewal, and IDP.",
      formIds: ["form1", "form1a", "form2", "form4", "form4a", "form5", "form9"]
    },
    {
      title: "Vehicle Forms",
      intro: "Official forms commonly used for registration, RC work, transfer, NOC, and hypothecation.",
      formIds: ["form20", "form25", "form26", "form28", "form29", "form30", "form33", "form34", "form35"]
    },
    {
      title: "Fitness And Inspection Forms",
      intro: "Official forms used in fitness and inspection-heavy cases.",
      formIds: ["form38", "form38a"]
    }
  ],
  serviceResources: {
    "learner-licence": {
      formIds: ["form1", "form1a", "form2"],
      toolIds: ["sarathi", "dl-status", "dl-forms-page", "maharashtra-faceless-dl"]
    },
    "permanent-driving-licence": {
      formIds: ["form4", "form5"],
      toolIds: ["sarathi", "dl-status", "dl-forms-page"]
    },
    "dl-renewal": {
      formIds: ["form9", "form1a"],
      toolIds: ["sarathi", "dl-status", "fees-user-charges", "maharashtra-faceless-dl"]
    },
    "duplicate-dl": {
      formIds: [],
      toolIds: ["sarathi", "dl-status", "download-forms"]
    },
    "dl-address-change": {
      formIds: ["form2"],
      toolIds: ["sarathi", "dl-status", "maharashtra-faceless-dl"]
    },
    "international-driving-permit": {
      formIds: ["form4a", "form1a"],
      toolIds: ["sarathi", "dl-status", "dl-forms-page"]
    },
    "new-vehicle-registration": {
      formIds: ["form20"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page", "fees-user-charges"]
    },
    "transfer-ownership": {
      formIds: ["form29", "form30"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "noc": {
      formIds: ["form28"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "rc-renewal": {
      formIds: ["form25"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page", "fees-user-charges"]
    },
    "duplicate-rc": {
      formIds: ["form26"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "rc-address-change": {
      formIds: ["form33"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "hypothecation-addition": {
      formIds: ["form34"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "hypothecation-removal": {
      formIds: ["form35"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "fitness-certificate": {
      formIds: ["form38", "form38a"],
      toolIds: ["vahan", "vehicle-status", "vehicle-forms-page"]
    },
    "permit-services": {
      formIds: [],
      toolIds: ["permit-forms-page", "fees-user-charges"]
    },
    "tax-services": {
      formIds: [],
      toolIds: ["vahan", "tax-calculation", "fees-user-charges"]
    },
    "puc-requirements": {
      formIds: [],
      toolIds: ["vahan", "vehicle-status", "maharashtra-offices"]
    }
  },
  services: [
    {
      id: "learner-licence",
      title: "Learner's Licence",
      category: "licence",
      short: "First-time learning permit before the driving test.",
      summary:
        "Start here if you are applying for your first learner's licence in Maharashtra.",
      bestFor: "People applying for their first learner's licence before practice and testing.",
      mode: "Faceless-enabled in supported Maharashtra cases",
      appointment: "Usually not required first",
      officeVisit: "Possible for verification in some cases",
      inspection: "No vehicle inspection",
      eligibility: [
        "Generally 18+ for regular motor vehicle categories.",
        "Generally 16+ for eligible gearless motorcycles up to 50cc with guardian consent.",
        "Generally 20+ for transport vehicle categories."
      ],
      steps: [
        "Open Sarathi and select Maharashtra.",
        "Start the learner's licence application.",
        "Enter applicant details and the class of vehicle.",
        "Upload age, address, and fitness documents as required.",
        "Pay the learner's licence and test fees.",
        "Complete the learner's test according to the portal flow.",
        "Download or save the approved learner's licence."
      ],
      requiredDocs: [
        "Age proof",
        "Address proof",
        "Form 2 application details",
        "Form 1 or Form 1A depending on class and medical requirement",
        "Photos if requested by the workflow"
      ],
      extraDocs: [
        "Guardian consent where legally applicable",
        "Transport-category medical documents where relevant"
      ],
      forms: ["Form 1", "Form 1A", "Form 2"],
      fees: ["Rs. 150 per class of vehicle", "Rs. 50 learner's licence test fee"],
      validity: "Learner's licence validity: 6 months",
      notices: [
        "Use the state-specific Sarathi flow instead of downloading random third-party forms.",
        "This service is online-first, but some cases may still be sent for manual verification."
      ],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Maharashtra Transport - Faceless Services",
          url: "https://transport.maharashtra.gov.in/1363/Sarathi-Related-Faceless-Services?format=print"
        }
      ]
    },
    {
      id: "permanent-driving-licence",
      title: "Permanent Driving Licence",
      category: "licence",
      short: "Driving test-based licence after a valid learner's licence.",
      summary:
        "Choose this after the learner's licence waiting period is over and you are ready for the driving test.",
      bestFor: "Learner's licence holders who are ready for the final driving test.",
      mode: "Online application plus RTO test",
      appointment: "Required",
      officeVisit: "Required",
      inspection: "No vehicle inspection, but driving test required",
      eligibility: [
        "Valid learner's licence required.",
        "Maharashtra notes that users can apply for the driving test after 30 days from learner's licence issue."
      ],
      steps: [
        "Open Sarathi and select the permanent driving licence service.",
        "Fill or verify the application details.",
        "Book the driving test appointment.",
        "Visit the RTO on the scheduled date.",
        "Appear for the competence / skill test.",
        "After approval, complete any final fee or printing steps shown by the portal.",
        "Track issuance and dispatch on the official portal."
      ],
      requiredDocs: [
        "Form 4",
        "Learner's licence",
        "Recent passport photos",
        "Age proof",
        "Address proof"
      ],
      extraDocs: ["Form 5 for transport category applications"],
      forms: ["Form 4", "Form 5"],
      fees: ["Rs. 300 driving competence test fee per class", "Rs. 200 issue of driving licence"],
      validity: "Issued after successful test and approval",
      notices: [
        "This is a test-based service and requires an appointment.",
        "Users often confuse this with a fully online workflow. It is not."
      ],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Maharashtra Transport - Permanent Licence",
          url: "https://transport.maharashtra.gov.in/1136/Permanent-License"
        }
      ]
    },
    {
      id: "dl-renewal",
      title: "Driving Licence Renewal",
      category: "licence",
      short: "Renew an existing licence before or after expiry.",
      summary:
        "Renew your existing driving licence before or after expiry, subject to the official rules.",
      bestFor: "Licence holders whose licence is nearing expiry or has recently expired.",
      mode: "Faceless-enabled with exception handling",
      appointment: "Sometimes",
      officeVisit: "Sometimes",
      inspection: "No vehicle inspection",
      eligibility: [
        "Apply from 30 days before expiry.",
        "If filed after the grace window, renewal becomes effective from the application date.",
        "Maharashtra states renewal is not available after five years from expiry."
      ],
      steps: [
        "Open Sarathi and select Maharashtra.",
        "Choose services on driving licence and select renewal.",
        "Enter the licence details and upload required documents.",
        "Pay the renewal fee online.",
        "Complete any verification step shown by the portal.",
        "Visit the office only if the application is flagged for verification or record mismatch.",
        "Track approval and download the acknowledgement or updated status."
      ],
      requiredDocs: [
        "Form 9",
        "Current driving licence",
        "Form 1A medical certificate",
        "Recent photographs"
      ],
      extraDocs: ["NOC or verification record if the original licence belongs to another state"],
      forms: ["Form 9", "Form 1A"],
      fees: [
        "Rs. 200 standard renewal fee",
        "Rs. 300 when renewed after the grace period",
        "Additional late fee may apply after the grace period"
      ],
      validity: "Renewed licence validity depends on vehicle class and age rules",
      notices: [
        "If the existing licence is from another state, verification can add time to the process.",
        "Fee totals can vary on the live portal if extra charges apply."
      ],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Maharashtra Transport - DL Renewal",
          url: "https://transport.maharashtra.gov.in/1137/Renewal-of-Driving-License"
        }
      ]
    },
    {
      id: "duplicate-dl",
      title: "Duplicate Driving Licence",
      category: "licence",
      short: "Replace a lost, damaged, or defaced licence.",
      summary:
        "Replace a lost, damaged, or unreadable driving licence when the licence record already exists.",
      bestFor: "Lost, torn, damaged, or defaced licence cases.",
      mode: "Online-first, verification may still happen",
      appointment: "Usually no",
      officeVisit: "Possible in exception cases",
      inspection: "No vehicle inspection",
      eligibility: [
        "Valid permanent licence record should already exist.",
        "Use the duplicate route for loss or damage, not for a fresh licence."
      ],
      steps: [
        "Open Sarathi and select the duplicate driving licence service.",
        "Enter licence details and the reason for replacement.",
        "Upload supporting documents such as the police report or old damaged licence.",
        "Pay the fee online.",
        "Complete portal verification and track the application.",
        "Visit the office only if the portal asks for original verification."
      ],
      requiredDocs: [
        "LLD or duplicate licence form as listed by Maharashtra",
        "Old damaged licence if available",
        "Police report if the licence is lost",
        "Recent passport photos"
      ],
      extraDocs: ["Attested photocopy of the old licence if available"],
      forms: ["LLD"],
      fees: ["Maharashtra page shows Rs. 214", "Final portal total may include extra charges"],
      validity: "Replacement depends on verification and dispatch",
      notices: [
        "Apply for duplicate only when the licence record already exists and the document is lost, damaged, or defaced."
      ],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Maharashtra Transport - Duplicate DL",
          url: "https://transport.maharashtra.gov.in/1206/Duplicate-License?format=print"
        }
      ]
    },
    {
      id: "dl-address-change",
      title: "Address Change In Driving Licence",
      category: "licence",
      short: "Update the address attached to an existing DL.",
      summary:
        "Update the address on your existing driving licence after moving.",
      bestFor: "Current DL holders with valid new address proof.",
      mode: "Faceless-enabled in Maharashtra",
      appointment: "Usually no",
      officeVisit: "Possible for record mismatch",
      inspection: "No vehicle inspection",
      eligibility: ["Existing DL required", "New address proof required"],
      steps: [
        "Open Sarathi and select services on driving licence.",
        "Enter the DL number and date of birth.",
        "Choose change of address.",
        "Upload the new address proof and any supporting identity document required.",
        "Pay the fee and submit the application.",
        "Track approval through the portal."
      ],
      requiredDocs: ["Existing driving licence", "New address proof"],
      extraDocs: ["Supporting identity document if requested by the workflow"],
      forms: ["Portal service flow"],
      fees: ["Rs. 200 for change in address / particulars"],
      validity: "Update depends on approval and dispatch",
      notices: ["Keep the new address proof exactly as you want it shown on the licence record."],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Parivahan FAQ - Change of Address in DL",
          url: "https://parivahan.gov.in/parivahan//en/content/how-get-address-changed-driving-license"
        }
      ]
    },
    {
      id: "international-driving-permit",
      title: "International Driving Permit",
      category: "licence",
      short: "Travel-oriented permit for Indian licence holders going abroad.",
      summary:
        "Apply for an International Driving Permit if you already hold a valid Indian driving licence and plan to drive abroad.",
      bestFor: "Travellers who need an IDP in addition to their Indian driving licence.",
      mode: "Apply online, verify in person",
      appointment: "Yes or office scheduling as required",
      officeVisit: "Required",
      inspection: "No vehicle inspection",
      eligibility: [
        "Applicant must hold a valid Indian driving licence.",
        "Applicant must be a resident of India."
      ],
      steps: [
        "Open the IDP service through Sarathi or the state guidance page.",
        "Fill the IDP application details.",
        "Upload or prepare travel and identity documents.",
        "Pay the fee.",
        "Visit the licensing authority or RTO within jurisdiction for verification.",
        "Track issuance through the official system."
      ],
      requiredDocs: [
        "Form 4A",
        "Valid Indian driving licence",
        "Passport",
        "Visa where applicable",
        "Air ticket or travel proof for verification",
        "Form 1A",
        "Photos"
      ],
      extraDocs: [],
      forms: ["Form 4A", "Form 1A"],
      fees: ["Rs. 1000"],
      validity: "Typically valid for 1 year",
      notices: ["IDP is separate from domestic licence renewal or duplicate issue. Carry travel papers and your original DL."],
      officialLinks: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        {
          label: "Parivahan - International Driving Permit",
          url: "https://parivahan.gov.in/parivahan/en/content/international-driving-permit"
        }
      ]
    },
    {
      id: "new-vehicle-registration",
      title: "New Vehicle Registration",
      category: "vehicle",
      short: "Register a newly purchased vehicle and obtain RC details.",
      summary:
        "Register a newly purchased vehicle and complete the RC, tax, insurance, and finance-linked formalities.",
      bestFor: "Vehicle owners who have recently bought a new vehicle.",
      mode: "Dealer-assisted or Vahan-linked registration flow",
      appointment: "Depends on case",
      officeVisit: "Usually yes directly or through dealer process",
      inspection: "Vehicle inspection may be required",
      eligibility: [
        "Vehicle purchase completed.",
        "Required manufacturer, dealer, insurance, and tax papers should be ready."
      ],
      steps: [
        "Gather purchase, manufacturer, insurance, and tax documents.",
        "Start dealer-point or Vahan-linked registration as applicable.",
        "Fill vehicle and owner details.",
        "Submit tax and registration payments.",
        "Present the vehicle for inspection where required.",
        "Track assignment of registration number and RC generation."
      ],
      requiredDocs: [
        "Form 20",
        "Form 21 sale certificate",
        "Form 22 or Form 22A road-worthiness / compliance certificate",
        "Purchase invoice",
        "Insurance certificate",
        "Address proof",
        "PAN or Form 60 / Form 61",
        "Road tax payment proof"
      ],
      extraDocs: ["Temporary registration if applicable", "Form 34 if financed", "Fitness certificate where applicable"],
      forms: ["Form 20", "Form 21", "Form 22", "Form 22A", "Form 34"],
      fees: [
        "Registration fee depends on vehicle class",
        "Motorcycle example: Rs. 300",
        "LMV non-transport example: Rs. 600",
        "Smart-card fee may apply separately",
        "Motor vehicle tax is separate"
      ],
      validity: "RC issuance follows verification, inspection, and fee confirmation",
      notices: [
        "Confirm which documents the dealer will submit and which originals you still need to keep ready."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Maharashtra Transport - New Vehicle Registration",
          url: "https://transport.maharashtra.gov.in/1104/Registration-of-New-Vehicle"
        }
      ]
    },
    {
      id: "transfer-ownership",
      title: "Transfer Of Ownership",
      category: "vehicle",
      short: "Update the registered owner after a sale or ownership change.",
      summary:
        "Transfer the vehicle record to the buyer after sale or another ownership change.",
      bestFor: "Seller and buyer cases where the RC needs the new owner's name.",
      mode: "Online Vahan flow with document verification",
      appointment: "Sometimes",
      officeVisit: "Sometimes",
      inspection: "Usually no",
      eligibility: [
        "Maharashtra states 14 days in the same jurisdiction.",
        "Maharashtra states 30 days when another registering authority jurisdiction is involved."
      ],
      steps: [
        "Open the transfer of ownership service in Vahan.",
        "Enter registration and owner details.",
        "Upload transfer forms and supporting documents.",
        "Pay the transfer fee and any pending dues.",
        "Complete verification if called by the office.",
        "Track the updated owner record on the official portal."
      ],
      requiredDocs: [
        "Form 29",
        "Form 30",
        "RC",
        "Insurance certificate",
        "PUC certificate",
        "Address proof of purchaser",
        "PAN or Form 60"
      ],
      extraDocs: ["Form 28 if another registering authority jurisdiction is involved", "Tax clearance and chassis print where applicable"],
      forms: ["Form 29", "Form 30", "Form 28"],
      fees: [
        "Transfer fee is half of the registration fee",
        "Motorcycle example: Rs. 150",
        "LMV non-transport example: Rs. 300"
      ],
      validity: "Processed after verification and record update",
      notices: [
        "Transfer of ownership, NOC, and reassignment are different services. Make sure you are using the right one.",
        "Users often miss Form 28 when the buyer belongs to another jurisdiction."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Maharashtra Transport - Transfer Of Ownership",
          url: "https://transport.maharashtra.gov.in/1108/Transfer-of-Motor-Vehicle-Ownership"
        },
        {
          label: "Parivahan - Ownership Transfer",
          url: "https://parivahan.gov.in/index.php/en/content/ownership-transfer"
        }
      ]
    },
    {
      id: "noc",
      title: "No Objection Certificate",
      category: "vehicle",
      short: "Clear the vehicle for transfer out of the current jurisdiction.",
      summary:
        "Get a No Objection Certificate before moving a vehicle to another jurisdiction or state.",
      bestFor: "Cross-jurisdiction transfer, migration, or re-registration cases.",
      mode: "Vahan service with clearance checks",
      appointment: "Sometimes",
      officeVisit: "Sometimes",
      inspection: "Usually no",
      eligibility: [
        "Used before transfer or reassignment outside the current authority area.",
        "Transport vehicles may face extra permit, tax, challan, and fitness checks."
      ],
      steps: [
        "Open the NOC service in Vahan.",
        "Enter vehicle details and verify the owner record.",
        "Upload Form 28 and supporting documents.",
        "Pay the applicable fee.",
        "Clear any tax, challan, permit, or financier dependencies.",
        "Track the NOC status and keep the approval for the next state or authority process."
      ],
      requiredDocs: [
        "Form 28",
        "RC copy",
        "Insurance copy",
        "Up-to-date motor vehicle tax proof",
        "PUC certificate",
        "Owner signature identification"
      ],
      extraDocs: ["Chassis and engine pencil print", "Transport permit / challan / fitness clearances where applicable"],
      forms: ["Form 28"],
      fees: ["Rule 81 fee applies and should be confirmed on the live portal"],
      validity: "Use the approved NOC in the next linked workflow such as reassignment or cross-jurisdiction transfer",
      notices: [
        "NOC is usually part of a larger transfer or re-registration process. Check the next step before you apply."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - NOC",
          url: "https://parivahan.gov.in/parivahan/en/content/no-objection-certificate"
        }
      ]
    },
    {
      id: "rc-renewal",
      title: "RC Renewal",
      category: "vehicle",
      short: "Renew the certificate of registration before expiry.",
      summary:
        "Renew the vehicle registration certificate before or after expiry as allowed by the rules.",
      bestFor: "Vehicle owners approaching RC expiry.",
      mode: "Vahan service with possible appointment",
      appointment: "Often",
      officeVisit: "Often",
      inspection: "Possible",
      eligibility: ["Apply not more than 60 days before the date of expiry of registration."],
      steps: [
        "Open the renewal of RC service in Vahan.",
        "Verify the vehicle record through registration number and chassis details.",
        "Fill service details and upload documents.",
        "Book an appointment if the flow asks for one.",
        "Pay the applicable fee and any pending dues.",
        "Visit the office with originals if required.",
        "Track renewal approval and updated RC status."
      ],
      requiredDocs: [
        "Form 25",
        "RC",
        "PUC certificate",
        "Insurance certificate",
        "Tax payment proof"
      ],
      extraDocs: ["Fitness certificate where applicable", "PAN or Form 60 / Form 61", "Chassis and engine pencil print"],
      forms: ["Form 25"],
      fees: [
        "Renewal uses registration fee rules by vehicle class",
        "Late fee may apply after expiry",
        "Smart-card fee may also apply"
      ],
      validity: "Depends on approval and vehicle category rules",
      notices: [
        "Apply within the allowed window and keep older-vehicle compliance papers ready where relevant."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - Renewal of RC",
          url: "https://parivahan.gov.in/parivahan/en/content/renewal-rc"
        }
      ]
    },
    {
      id: "duplicate-rc",
      title: "Duplicate RC",
      category: "vehicle",
      short: "Replace a lost, destroyed, or damaged registration certificate.",
      summary:
        "Replace a lost, damaged, or destroyed registration certificate.",
      bestFor: "Lost RC cases where a replacement certificate is needed.",
      mode: "Online-first with supporting records",
      appointment: "Usually no",
      officeVisit: "Sometimes",
      inspection: "Usually no",
      eligibility: ["Original RC must be lost, destroyed, or unusable."],
      steps: [
        "Report the lost RC to the police if applicable.",
        "Open the duplicate RC service in Vahan.",
        "Upload the police report, affidavit, and supporting vehicle documents.",
        "Pay the fee.",
        "Complete any verification step and track approval.",
        "Keep copies of acknowledgements until the new RC is issued."
      ],
      requiredDocs: [
        "Form 26",
        "Police certificate or FIR",
        "Insurance certificate",
        "PUC certificate",
        "Address proof"
      ],
      extraDocs: [
        "PAN or Form 60 / Form 61",
        "Chassis and engine pencil print",
        "Affidavit that RC is lost and not impounded"
      ],
      forms: ["Form 26"],
      fees: ["Duplicate RC fee is half of the registration fee"],
      validity: "Replacement timing depends on verification and printing",
      notices: [
        "Commercial vehicles may also need tax, permit, or challan clearances before approval."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - Duplicate RC",
          url: "https://parivahan.gov.in/parivahan/en/content/duplicate-rc"
        }
      ]
    },
    {
      id: "rc-address-change",
      title: "Address Change In RC",
      category: "vehicle",
      short: "Update the address attached to the vehicle registration record.",
      summary:
        "Update the address on the vehicle registration record after moving.",
      bestFor: "Owners who need the RC to show a new address.",
      mode: "Vahan faceless-style flow with document upload",
      appointment: "Usually no",
      officeVisit: "Sometimes",
      inspection: "No vehicle inspection",
      eligibility: ["Apply within 14 days of address change."],
      steps: [
        "Open the address change service in Vahan.",
        "Enter registration details and verify through chassis number and OTP if required.",
        "Upload Form 33 and proof of new address.",
        "Submit insurance, PUC, and supporting documents.",
        "Pay the fee and track approval."
      ],
      requiredDocs: [
        "Form 33",
        "RC",
        "Proof of new address",
        "Insurance certificate",
        "PUC certificate"
      ],
      extraDocs: ["Financier NOC if hypothecated", "PAN or Form 60 / Form 61", "Chassis and engine pencil print"],
      forms: ["Form 33"],
      fees: ["Address change fee is half of the registration fee", "Smart-card fee may apply"],
      validity: "Update depends on approval",
      notices: [
        "If both your DL and RC need the new address, updating them together can help reduce mismatch issues."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - Address Change",
          url: "https://parivahan.gov.in/parivahan/en/content/address-change"
        }
      ]
    },
    {
      id: "hypothecation-addition",
      title: "Hypothecation Addition",
      category: "vehicle",
      short: "Add finance details to the vehicle registration record.",
      summary:
        "Add the finance or hypothecation entry to the RC for a financed vehicle.",
      bestFor: "Financed vehicle cases where the RC needs lender details.",
      mode: "Vahan record update service",
      appointment: "Usually no",
      officeVisit: "Sometimes",
      inspection: "No vehicle inspection",
      eligibility: ["Vehicle finance arrangement should already exist and be document-ready."],
      steps: [
        "Open the hypothecation endorsement service in Vahan.",
        "Enter vehicle details and financier information.",
        "Upload Form 34 and supporting documents.",
        "Pay the fee and submit the application.",
        "Track record update and updated RC details."
      ],
      requiredDocs: [
        "Form 34",
        "RC",
        "Financier and owner signatures",
        "Insurance certificate",
        "PUC certificate"
      ],
      extraDocs: ["PAN or Form 60 / Form 61", "Chassis and engine pencil print"],
      forms: ["Form 34"],
      fees: [
        "Motorcycle: Rs. 500",
        "Three-wheeler / quadricycle / LMV: Rs. 1500",
        "Medium / heavy vehicle: Rs. 3000"
      ],
      validity: "Updated after successful record endorsement",
      notices: ["Check that Form 34 is signed correctly by both the owner and the financier before submission."],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - HP Endorsement",
          url: "https://parivahan.gov.in/parivahan/en/content/hp-endorsement"
        }
      ]
    },
    {
      id: "hypothecation-removal",
      title: "Hypothecation Removal",
      category: "vehicle",
      short: "Remove finance details after loan closure.",
      summary:
        "Remove the finance entry from the RC after the vehicle loan is fully closed.",
      bestFor: "Loan-closure cases waiting for the bank NOC or due-clearance.",
      mode: "Vahan service with bank clearance dependency",
      appointment: "Usually no",
      officeVisit: "Sometimes",
      inspection: "No vehicle inspection",
      eligibility: ["Loan closure and financier due-clearance should be complete."],
      steps: [
        "Collect the financier due-clearance or NOC after the loan is fully closed.",
        "Open the HP termination service in Vahan.",
        "Upload Form 35, RC, and supporting documents.",
        "Submit the application and complete any fee step shown by the portal.",
        "Track the updated record or fresh RC status."
      ],
      requiredDocs: [
        "Form 35",
        "RC",
        "Financier due-clearance or NOC",
        "Insurance certificate",
        "PUC certificate"
      ],
      extraDocs: ["PAN or Form 60 / Form 61", "Chassis and engine pencil print", "Signature identification"],
      forms: ["Form 35"],
      fees: ["No separate cancellation fee noted in the central fee table for the termination itself"],
      validity: "Update depends on financier clearance and record update",
      notices: [
        "Many people close the loan but do not realize the RC still shows finance until this update is completed.",
        "Do not start this service until the bank has issued the final NOC or due-clearance letter."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - HP Termination",
          url: "https://parivahan.gov.in/parivahan/en/content/hp-termination"
        }
      ]
    },
    {
      id: "fitness-certificate",
      title: "Fitness Certificate",
      category: "vehicle",
      short: "Vehicle inspection and fitness approval, mainly for transport vehicles.",
      summary:
        "Book and complete the official fitness process for inspection-based vehicle cases, mainly transport vehicles.",
      bestFor: "Transport vehicle owners preparing for inspection and renewal.",
      mode: "Vahan workflow plus inspection appointment",
      appointment: "Required",
      officeVisit: "Required",
      inspection: "Vehicle inspection required",
      eligibility: ["Most relevant to transport vehicles and inspection-based renewal cases."],
      steps: [
        "Open the renewal or issue of fitness service in Vahan.",
        "Enter registration and chassis details and verify through OTP.",
        "Fill the fitness and insurance details.",
        "Upload requested documents through the DMS upload step.",
        "Book the inspection appointment.",
        "Pay the fee online.",
        "Visit the RTO with the vehicle, originals, payment receipt, and appointment."
      ],
      requiredDocs: [
        "Vehicle registration details",
        "Insurance details",
        "Portal-uploaded documents requested by the fitness service",
        "Original documents on appointment day"
      ],
      extraDocs: ["Vehicle must be physically presented for inspection"],
      forms: ["Form 38", "Form 38A"],
      fees: [
        "Test fee varies by class",
        "Motorcycle manual example: Rs. 200",
        "Three-wheeler / LMV manual example: Rs. 400",
        "Medium / heavy manual example: Rs. 600",
        "Fitness certificate issue or renewal: Rs. 200"
      ],
      validity: "Inspection appointment required before final approval",
      notices: [
        "Carry the vehicle, originals, appointment receipt, and payment proof on inspection day."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Vahan User Manual - Renewal Of Fitness",
          url: "https://staging.parivahan.gov.in/vahaneservice/usermanual/selectedservice/renewelOfFitness/"
        }
      ]
    },
    {
      id: "permit-services",
      title: "Permit-Related Services",
      category: "compliance",
      short: "Regional, tourist, goods, duplicate, renewal, and transfer permit guidance.",
      summary:
        "Use this for goods, passenger, tourist, national, duplicate, renewal, or transfer permit work.",
      bestFor: "Commercial and passenger vehicle permit cases.",
      mode: "Permit portal with scrutiny-heavy workflows",
      appointment: "Varies by permit type",
      officeVisit: "Varies by permit type",
      inspection: "Can be part of certain permit cases",
      eligibility: [
        "Depends on the vehicle type, route, passenger or goods use, and the exact permit class.",
        "Some permit services are fully live online, while others still involve office-side scrutiny."
      ],
      steps: [
        "Identify the exact permit type first.",
        "Open the permit module through the official portal.",
        "Verify the vehicle or permit-linked record.",
        "Upload permit-specific documents and submit the form.",
        "Pay the fee shown by the system.",
        "Follow sanction, scrutiny, or office instructions for that permit type."
      ],
      requiredDocs: [
        "Vehicle papers",
        "Insurance certificate",
        "Tax proof",
        "Permit-specific route or authorization papers"
      ],
      extraDocs: ["Forms vary: tourist, national, transfer, duplicate, or renewal permit forms"],
      forms: ["Form 45", "Form 46", "Form 47", "Form 48"],
      fees: [
        "Motor cab with meter permit fee: Rs. 500",
        "Goods vehicle state permit fee: Rs. 1000",
        "Tourist cab permit fee: Rs. 1500",
        "National permit fee: Rs. 1500",
        "Temporary permit example: Rs. 1000"
      ],
      validity: "Permit validity and renewal cycle depend on permit type",
      notices: [
        "Permit requirements change by vehicle type and permit category. Confirm the exact permit before payment."
      ],
      officialLinks: [
        {
          label: "Maharashtra Transport - Permit Fees",
          url: "https://transport.maharashtra.gov.in/1178/Permit-Fees"
        },
        {
          label: "Parivahan - Permit Forms",
          url: "https://parivahan.gov.in/parivahan/en/content/permit-form"
        }
      ]
    },
    {
      id: "tax-services",
      title: "Tax-Related Services",
      category: "compliance",
      short: "Road tax, environment tax, and rule-based vehicle tax guidance.",
      summary:
        "Check vehicle tax rules and pay the amount shown by the official portal.",
      bestFor: "Owners who want to understand tax before making payment.",
      mode: "Online calculation and payment",
      appointment: "No",
      officeVisit: "Usually no",
      inspection: "No vehicle inspection",
      eligibility: [
        "Tax depends on vehicle class, transport status, fuel type, value, GVW, seating, and slab logic.",
        "This is not a flat-fee service."
      ],
      steps: [
        "Open the official vehicle tax or payment service.",
        "Enter the vehicle details and verify the record.",
        "Let the portal calculate the payable amount.",
        "Review the slab-based amount carefully.",
        "Make the payment online and save the receipt."
      ],
      requiredDocs: ["Vehicle record details in the portal", "Existing registration-linked owner record"],
      extraDocs: ["Some tax workflows depend on permit class or commercial classification"],
      forms: ["Portal-driven"],
      fees: ["System-calculated and rule-based, not one flat figure"],
      validity: "Payment receipt should be saved for transfer, NOC, renewal, and other linked services",
      notices: [
        "Tax is rule-based and portal-calculated. Use the live amount shown on the official portal as final."
      ],
      officialLinks: [
        {
          label: "Maharashtra Transport - Tax Calculation",
          url: "https://transport.maharashtra.gov.in/1167/Tax-Calculation"
        },
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" }
      ]
    },
    {
      id: "puc-requirements",
      title: "PUC Requirements",
      category: "compliance",
      short: "Understand where the pollution certificate matters in RTO journeys.",
      summary:
        "See where a valid Pollution Under Control certificate is required in RTO-related services.",
      bestFor: "RC-related services where a current PUC is often mandatory.",
      mode: "Compliance support item",
      appointment: "No",
      officeVisit: "No",
      inspection: "Emission testing happens at authorized PUC points, not usually at the RTO service step",
      eligibility: [
        "A valid PUC is repeatedly required in transfer, NOC, duplicate RC, RC renewal, address change, and hypothecation workflows."
      ],
      steps: [
        "Check whether the service you want asks for a current PUC certificate.",
        "Get the vehicle tested at an authorized PUC point if needed.",
        "Keep the certificate ready before starting RC-side services.",
        "Upload or present the valid PUC during the linked RTO service."
      ],
      requiredDocs: ["Valid PUC certificate"],
      extraDocs: ["Vehicle emission test at an authorized PUC center"],
      forms: ["Form 59 certificate format on the official system side"],
      fees: ["PUC rates vary by center and category"],
      validity: "Carry a valid PUC before starting transfer, NOC, RC renewal, or finance-related RC updates",
      notices: [
        "Keep a valid PUC ready before starting transfer, NOC, RC renewal, or hypothecation-related services."
      ],
      officialLinks: [
        {
          label: "Maharashtra Services Status PDF",
          url: "https://transport.maharashtra.gov.in/Site/Upload/Pdf/RTS-115-SERVICES.pdf"
        },
        { label: "Maharashtra Transport", url: "https://transport.maharashtra.gov.in/" }
      ]
    }
  ],
  bundles: [
    {
      title: "Core Personal Proofs",
      intro: "These show up repeatedly across both licence and vehicle journeys.",
      items: ["Age proof", "Address proof", "PAN card", "Form 60 / Form 61", "Passport photos", "Signature identification"]
    },
    {
      title: "Driving Licence Bundle",
      intro: "Use this for learner, permanent, renewal, duplicate, and IDP pages.",
      items: ["Existing DL", "Learner's licence", "Form 1", "Form 1A", "Form 2", "Form 4", "Form 4A", "Form 5", "Police report for lost DL"]
    },
    {
      title: "Core Vehicle Bundle",
      intro: "These are the most reusable RC-side documents.",
      items: ["RC", "Insurance certificate", "PUC certificate", "Tax receipt", "Chassis and engine pencil print", "Address proof of owner"]
    },
    {
      title: "Transfer / NOC Bundle",
      intro: "Useful when the vehicle is sold, moved, or re-routed to another jurisdiction.",
      items: ["Form 28", "Form 29", "Form 30", "RC", "Insurance", "PUC", "Tax proof", "Purchaser address proof", "PAN or Form 60"]
    },
    {
      title: "Loan And Finance Bundle",
      intro: "Important for hypothecation addition or removal.",
      items: ["Form 34", "Form 35", "Financier signature", "Financier NOC", "Due-clearance letter", "RC", "Insurance", "PUC"]
    },
    {
      title: "Registration And Fitness Bundle",
      intro: "Used for new registration, RC renewal, and fitness-heavy workflows.",
      items: ["Form 20", "Form 21", "Form 22 / 22A", "Purchase invoice", "Tax payment proof", "Form 25", "Form 38 / 38A", "Originals for inspection day"]
    }
  ],
  signals: [
    {
      title: "Payment Deducted, Portal Still Pending",
      detail: "Sometimes payment is deducted but the portal does not unlock the next step immediately. Check payment status and receipt details before paying again."
    },
    {
      title: "Wrong Office Or Jurisdiction Chosen",
      detail: "Many people are unsure whether their record belongs to MH-11 Satara or MH-50 Karad. Check the office code on your current DL or RC before applying."
    },
    {
      title: "Checklist Surprise In The Middle Of The Process",
      detail: "PUC, police reports, financier NOCs, or tax proof are often discovered too late. Keep supporting papers ready before opening the portal."
    },
    {
      title: "Heavy Dependence On Agents",
      detail: "When forms and exception handling are unclear, people often feel pushed toward brokers or agents. Clear guidance can reduce that dependency."
    }
  ],
  faq: [
    {
      question: "Can this guide replace the government portal?",
      answer:
        "No. This guide helps you understand the service, documents, fees, and visit requirements. Actual applications, payments, appointments, and status checks still happen on Sarathi, Vahan, or Maharashtra Transport."
    },
    {
      question: "What should I do first if I know the problem but not the service name?",
      answer:
        "Start with the situation first, such as a new licence, sale of vehicle, address change, loan closure, or NOC. Then match that situation to the correct official service and form."
    },
    {
      question: "Why does the site repeat PUC, tax proof, and financier papers so often?",
      answer:
        "Because many RTO services reuse the same supporting documents. Transfer, NOC, RC renewal, and finance-related services often depend on PUC, tax proof, insurance, and financier papers."
    },
    {
      question: "What if the service is shown as online but the office still asks me to visit?",
      answer:
        "That can still happen. Some services are online-first or faceless-enabled, but verification, record mismatch, inspection, or commercial clearances can still lead to an office visit."
    },
    {
      question: "What if the live portal total is different from the fee shown here?",
      answer:
        "Treat the live portal amount as final. Fee tables here are only a guide, and smart-card charges, user charges, late fees, or system-calculated additions can change the final payable amount."
    }
  ],
  sourceGroups: [
    {
      title: "Official Maharashtra Sources",
      intro: "Official Maharashtra sources for office details, service status, fee tables, and state-specific pages.",
      links: [
        { label: "Regional Offices", url: "https://transport.maharashtra.gov.in/1184/Regional-Offices?format=print" },
        { label: "Sarathi Related Faceless Services", url: "https://transport.maharashtra.gov.in/1363/Sarathi-Related-Faceless-Services?format=print" },
        { label: "Permanent Licence", url: "https://transport.maharashtra.gov.in/1136/Permanent-License" },
        { label: "DL Renewal", url: "https://transport.maharashtra.gov.in/1137/Renewal-of-Driving-License" },
        { label: "Transfer Of Ownership", url: "https://transport.maharashtra.gov.in/1108/Transfer-of-Motor-Vehicle-Ownership" },
        { label: "Permit Fees", url: "https://transport.maharashtra.gov.in/1178/Permit-Fees" }
      ]
    },
    {
      title: "Official Parivahan Sources",
      intro: "Official Parivahan sources for forms, service rules, and portal entry points.",
      links: [
        { label: "Sarathi", url: "https://sarathi.parivahan.gov.in" },
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        { label: "Ownership Transfer", url: "https://parivahan.gov.in/index.php/en/content/ownership-transfer" },
        { label: "Address Change", url: "https://parivahan.gov.in/parivahan/en/content/address-change" },
        { label: "Duplicate RC", url: "https://parivahan.gov.in/parivahan/en/content/duplicate-rc" },
        { label: "HP Termination", url: "https://parivahan.gov.in/parivahan/en/content/hp-termination" }
      ]
    },
    {
      title: "Public Pain-Point Signals",
      intro: "Public discussions that highlight common issues and delays. These are not legal or official authority.",
      links: [
        { label: "ConsumerComplaints - Sarathi / Parivahan", url: "https://www.consumercomplaints.in/bycompany/sarathi-parivahan-gov-in-a520198.html" },
        { label: "ConsumerComplaints - Payment Status Issue", url: "https://www.consumercomplaints.in/sarathi-parivahan-payment-status-failed-but-money-is-deducted-from-the-account-c3228880" },
        { label: "Team-BHP - Hypothecation Removal Walkthrough", url: "https://www.team-bhp.com/advice/rto-hypothecation-removal-process-step-step-guide-0" }
      ]
    }
  ]
};

const practicalChecklistSignalsByService = {
  "learner-licence": [
    "Printed application or learner-test appointment receipt",
    "Original age and address proofs plus one self-attested photocopy set",
    "Backup photo and signature files, plus a couple of passport photos if image upload or counter verification fails",
    "Old application number or prior learner acknowledgement if the portal flags multiple learner records"
  ],
  "permanent-driving-licence": [
    "Printed driving-test appointment slip and fee receipt",
    "Original learner's licence plus one photocopy",
    "Original RC, insurance, and PUC of the vehicle used for the test",
    "Authorization letter from the vehicle owner if the test vehicle is borrowed"
  ],
  "dl-renewal": [
    "Front-and-back copy or clear photo of the old driving licence because some users report DigiLocker PDF alone gets held",
    "Fresh passport photo and signature scan matching the portal size rules",
    "Printed acknowledgement or payment receipt",
    "Original address proof plus one self-attested copy for counter verification"
  ],
  "duplicate-dl": [
    "Any old scan, photo, xerox, or DigiLocker view of the lost driving licence",
    "Spare copies of FIR, NCR, or police acknowledgement",
    "Self-attested ID and address proof copies",
    "Printed application receipt and extra passport photos"
  ],
  "dl-address-change": [
    "Old driving licence front-and-back photocopy",
    "Original new address proof plus one self-attested copy set",
    "Registered rent agreement, landlord NOC, or utility bill where rent-based proof is questioned",
    "Printed acknowledgement or payment receipt"
  ],
  "international-driving-permit": [
    "Self-attested copies of passport, visa, air ticket, and Indian driving licence",
    "Original passport and physical driving licence for counter verification",
    "Extra passport photos and a doctor-stamped Form 1A copy",
    "Travel itinerary printout if ticket or visa details are awkward to show on phone"
  ],
  "new-vehicle-registration": [
    "Original PAN and address proof even if the dealer has already uploaded copies",
    "Registered rent agreement plus landlord NOC or utility bill where address proof is rental-based",
    "Delivery note, temporary registration, or booking receipt as backup to the invoice",
    "Spare copies of invoice, insurance, and tax receipt for dealer or RTO counters"
  ],
  "transfer-ownership": [
    "Seller and buyer ID proof copies with self-attestation",
    "Printed fee receipt, acknowledgement, and extra copies of the signed forms",
    "Original RC plus spare xeroxes of insurance and PUC",
    "Seller authorization or delivery note if one party is not visiting in person"
  ],
  noc: [
    "Original RC plus a photocopy set",
    "Challan-clearance or tax-receipt printout before applying",
    "Bank NOC or loan-closure letter in original if finance ever existed",
    "Extra signed Form 28 copies and address proof for the next-state process"
  ],
  "rc-renewal": [
    "Printed appointment or acknowledgement and fee receipt",
    "Original RC plus hard copies of insurance, PUC, and tax receipts",
    "Chassis print or engine number copy ready in case the counter asks",
    "Green tax receipt or older-vehicle compliance receipt where applicable"
  ],
  "duplicate-rc": [
    "Extra FIR, NCR, or police-diary acknowledgement copies",
    "Old RC photo, mParivahan screenshot, or insurance copy to recover record details",
    "Tax receipt and challan-clearance print if the office checks pending dues",
    "Self-attested ID and address proof copies with the payment receipt"
  ],
  "rc-address-change": [
    "Original RC plus xeroxes of insurance, PUC, and new address proof",
    "Registered rent agreement, landlord NOC, or utility bill for rental addresses",
    "Old address-linked ID or previous RC copy if spelling or format differs",
    "Printed acknowledgement or payment receipt"
  ],
  "hypothecation-addition": [
    "Bank sanction letter or finance-agreement copy",
    "Self-attested copies of RC, insurance, PUC, and PAN or Aadhaar",
    "Printed application receipt and an extra signed copy of Form 34",
    "Chassis pencil print or clear chassis photo if upload or counter verification asks for it"
  ],
  "hypothecation-removal": [
    "Original bank NOC or due-clearance letter and both signed copies of Form 35",
    "Loan-closure letter or bank covering letter",
    "Original RC plus xeroxes of insurance, PUC, and ID proof",
    "Printed application receipt because some users report extra speed-post or hard-copy submission steps"
  ],
  "fitness-certificate": [
    "Printed appointment slip and payment receipt",
    "Hard-copy set of RC, insurance, permit, tax, and PUC papers",
    "Owner or driver ID proof and authorization letter if a representative attends",
    "Spare photocopies because inspection counters may still ask for paper sets"
  ],
  "permit-services": [
    "Current permit copy and previous permit or renewal paper if any",
    "Hard-copy set of insurance, fitness, tax, PUC, and challan-clearance papers",
    "Route authorization, contract carriage list, or passenger endorsement papers as per permit type",
    "Authorization letter and ID proof if a representative submits the file"
  ],
  "tax-services": [
    "Previous tax receipt, challan, or DD copy as backup",
    "Insurance, RC, and permit or fitness copies if the taxable category is disputed",
    "Chassis and engine details noted down in case OTP or portal lookup fails",
    "Printed payment receipt after online payment"
  ],
  "puc-requirements": [
    "RC or insurance copy if the PUC center needs vehicle details",
    "Previous PUC copy or photo to avoid number-entry mistakes",
    "Printed and digital PUC copy because downstream RTO counters often ask for a hard copy",
    "Owner ID if someone else takes the vehicle for testing"
  ]
};

window.siteData.practicalDocsNote =
  "These are not official mandatory documents. They are backup papers repeatedly mentioned in public user reports and can help you avoid repeat visits or verification delays.";

const recommendedActionByService = {
  "learner-licence": "Start the learner's licence application on Sarathi and keep your age and address proof ready.",
  "permanent-driving-licence": "Book the driving test only after your learner's licence waiting period is complete.",
  "dl-renewal": "Open the licence renewal flow on Sarathi and check whether medical or out-of-state verification applies.",
  "duplicate-dl": "Use the duplicate licence flow only if the original licence record already exists in the system.",
  "dl-address-change": "Keep the new address proof ready exactly as you want it reflected on the driving licence.",
  "international-driving-permit": "Prepare your passport, visa, travel proof, and valid Indian licence before opening the IDP flow.",
  "new-vehicle-registration": "Confirm which papers the dealer will submit and which originals you still need to carry.",
  "transfer-ownership": "Keep the signed transfer forms, RC, insurance, and buyer details ready before starting on Vahan.",
  noc: "Clear tax, finance, and pending record issues before applying for the NOC.",
  "rc-renewal": "Open the RC renewal flow within the allowed window and keep RC, insurance, PUC, and tax proof ready.",
  "duplicate-rc": "Keep the police report and a backup copy of your RC details ready before starting the duplicate RC flow.",
  "rc-address-change": "Prepare the new address proof and confirm whether financier approval is also needed.",
  "hypothecation-addition": "Keep Form 34 and the finance papers signed by both the owner and financier.",
  "hypothecation-removal": "Wait until the bank issues the final NOC or due-clearance letter before starting the removal flow.",
  "fitness-certificate": "Book the inspection only after your vehicle papers, payment receipt, and original documents are ready.",
  "permit-services": "Confirm the exact permit type first, because documents and fees change by permit category.",
  "tax-services": "Use the official portal amount as final and save the payment receipt after payment.",
  "puc-requirements": "Get a valid PUC before starting any linked RC-side service that asks for it."
};

window.siteData.services = window.siteData.services.map((service) => ({
  ...service,
  practicalDocs: practicalChecklistSignalsByService[service.id] || [],
  recommendedAction: recommendedActionByService[service.id] || service.steps[0]
}));

window.siteData.signals.unshift({
  title: "Counter Staff Often Ask For Backup Copies",
  detail:
    "Public user reports repeatedly mention self-attested photocopies, printed receipts, old scans, passport photos, and originals being asked for during verification even after online submission."
});

window.siteData.faq.splice(3, 0, {
  question: "Why does the site show extra backup documents that are not on the official checklist?",
  answer:
    "Because RTO counters sometimes ask for backup papers when uploads fail, records do not match, or originals and photocopies are checked together. They are shown separately under 'Often asked in practice' and should not be treated as official legal requirements."
});

window.siteData.sourceGroups.push(
  {
    title: "Public Checklist Reports From Reddit",
    intro: "These posts helped identify the backup papers people say they were still asked to carry in real RTO flows. Treat them as practical signals, not law.",
    links: [
      { label: "CarsIndia - Getting the learners licence", url: "https://www.reddit.com/r/CarsIndia/comments/1jo1enp" },
      { label: "CarsIndia - Driving licence renewal", url: "https://www.reddit.com/r/CarsIndia/comments/1rlk0wh/driving_licence_renewal/" },
      { label: "CarsIndia - Form 1A for International Driving Permit", url: "https://www.reddit.com/r/CarsIndia/comments/1p3quur/form_1a_for_international_driving_permit/" },
      {
        label: "CarsIndia - Is the rental agreement address proof for RTO registration?",
        url: "https://www.reddit.com/r/CarsIndia/comments/1adw1zw"
      },
      {
        label: "CarsIndia - Bought a car from Delhi dealer, NOC pending",
        url: "https://www.reddit.com/r/CarsIndia/comments/1qulyuy"
      },
      { label: "CarsIndia - Hypothecation removal pending / hard copies at RTO", url: "https://www.reddit.com/r/CarsIndia/comments/1joz9xl" }
    ]
  },
  {
    title: "Public Checklist Reports From Forums And Complaints",
    intro: "These walkthroughs and complaint pages surfaced repeated mentions of printed receipts, extra photocopies, old document scans, original RC sets, and bank paperwork.",
    links: [
      {
        label: "Team-BHP - Renewed my driving licence in KL without visiting the RTO",
        url: "https://www.team-bhp.com/news/renewed-my-driving-license-kl-without-visiting-rto-heres-how"
      },
      {
        label: "Team-BHP - How to get a driving licence in Bangalore without agents",
        url: "https://www.team-bhp.com/forum/street-experiences/172748-how-get-driving-licence-bangalore-without-agents-4.html"
      },
      {
        label: "Team-BHP - Guidelines: car ownership transfer in Bangalore",
        url: "https://www.team-bhp.com/forum/indian-car-scene/153324-guidelines-car-ownership-transfer-bangalore-print.html"
      },
      {
        label: "Team-BHP - Hypothecation removal walkthrough",
        url: "https://www.team-bhp.com/advice/rto-hypothecation-removal-process-step-step-guide-0"
      },
      {
        label: "ConsumerComplaints - not able to upload document in Parivahan Sewa",
        url: "https://www.consumercomplaints.in/parivahan-gov-in-not-able-to-upload-document-in-parivahan-sewa-c2456286"
      }
    ]
  }
);

const journeyMetaById = {
  "new-driver": {
    iconLabel: "DL",
    helperLabel: "Licence start"
  },
  "renew-or-correct-licence": {
    iconLabel: "UPD",
    helperLabel: "Licence update"
  },
  "bought-or-sold-vehicle": {
    iconLabel: "RC",
    helperLabel: "Vehicle papers"
  },
  "moved-or-shifting-state": {
    iconLabel: "NOC",
    helperLabel: "Address or move"
  },
  "loan-or-finance": {
    iconLabel: "LOAN",
    helperLabel: "Finance update"
  },
  "travel-or-commercial": {
    iconLabel: "TRVL",
    helperLabel: "Travel or permit"
  }
};

const faqCategoryByQuestion = {
  "Can this guide replace the government portal?": "General",
  "What should I do first if I know the problem but not the service name?": "General",
  "Why does the site repeat PUC, tax proof, and financier papers so often?": "RC & Vehicle",
  "Why does the site show extra backup documents that are not on the official checklist?": "General",
  "What if the service is shown as online but the office still asks me to visit?": "General",
  "What if the live portal total is different from the fee shown here?": "General"
};

window.siteData.navLinks = [
  { href: "./index.html", label: "Start Here" },
  { href: "./services.html", label: "Services" },
  { href: "./offices.html", label: "Offices" },
  { href: "./faq.html", label: "FAQ" }
];

window.siteData.wizardMeta = {
  introEyebrow: "Satara District, Maharashtra",
  introTitle: "Don't know which RTO service you need?",
  introText: "Answer a few simple questions and get the right service, documents, forms, office guidance, and official next step.",
  progressLabel: "Step",
  stepMeta: {
    journey: {
      title: "What are you trying to do?",
      help: "Pick the situation that matches your problem."
    },
    service: {
      title: "Which option sounds closest?",
      help: "Choose the closest match. You can change it later."
    },
    office: {
      title: "Which office or record is involved?",
      help: "Use the office code on your current DL or RC if you already have one."
    },
    profile: {
      title: "Is this personal or commercial?",
      help: "This helps narrow down permit, tax, and transport-heavy cases."
    },
    flags: {
      title: "Anything else about this case?",
      help: "Select all that apply, then continue."
    }
  },
  resultTitle: "This is the service you likely need",
  resultDisclaimer:
    "Use this guide to understand the process. Applications, payments, appointments, and status checks happen only on official government portals.",
  helpfulPrompt: "Was this helpful?",
  sectionTabs: [
    { id: "documents", label: "Documents" },
    { id: "steps", label: "Steps" },
    { id: "forms-fees", label: "Forms & Fees" },
    { id: "office", label: "Office" }
  ]
};

window.siteData.faqCategories = ["Licence", "RC & Vehicle", "Transfer & NOC", "General"];

window.siteData.journeys = window.siteData.journeys.map((journey) => ({
  ...journey,
  ...(journeyMetaById[journey.id] || { iconLabel: "RTO", helperLabel: "RTO help" })
}));

window.siteData.faq = window.siteData.faq.map((item) => ({
  ...item,
  category: faqCategoryByQuestion[item.question] || "General"
}));

window.siteData.faq = window.siteData.faq.concat([
  {
    category: "Licence",
    question: "Can I apply for a permanent driving licence without a learner's licence?",
    answer:
      "No. The permanent driving licence route depends on a valid learner's licence and the official waiting period before the driving test."
  },
  {
    category: "Transfer & NOC",
    question: "When do I need NOC instead of transfer of ownership?",
    answer:
      "Use transfer of ownership when the vehicle stays within the same registration system flow. Use NOC when the vehicle is moving to another jurisdiction, state, or re-registration process."
  },
  {
    category: "RC & Vehicle",
    question: "Why do RC services keep asking for insurance, PUC, and tax papers together?",
    answer:
      "Because RC-side services often verify whether the vehicle record is clean and current before they approve transfer, renewal, NOC, address change, or finance-related updates."
  }
]);
