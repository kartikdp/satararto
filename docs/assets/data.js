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
      description: "Complete reference list",
      shortLabel: "All"
    },
    {
      id: "licence",
      label: "Licence",
      description: "Learner, permanent, renewal, duplicate, IDP",
      shortLabel: "DL"
    },
    {
      id: "vehicle",
      label: "Vehicle",
      description: "Registration, RC, NOC, transfer, hypothecation",
      shortLabel: "RC"
    },
    {
      id: "compliance",
      label: "Permit, Tax & PUC",
      description: "Permit guidance, tax payment, pollution certificate",
      shortLabel: "PT"
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
      }
    ],
    learnerStatusOptions: [
      {
        id: "no",
        label: "No, I need my first learner's licence",
        description: "Use this if the applicant has not yet received a learner's licence."
      },
      {
        id: "yes",
        label: "Yes, I already have a learner's licence",
        description: "Use this if the learner's licence already exists and the next step is the permanent licence test."
      }
    ],
    vehicleTypeOptions: [
      {
        id: "two-wheeler",
        label: "Two-wheeler",
        description: "Motorcycle, scooter, or similar two-wheel vehicle."
      },
      {
        id: "car",
        label: "Car / LMV",
        description: "Private car or light motor vehicle."
      },
      {
        id: "commercial",
        label: "Commercial / transport vehicle",
        description: "Goods, passenger, permit, or transport-linked vehicle."
      }
    ],
    fuelTypeOptions: [
      {
        id: "petrol",
        label: "Petrol / CNG / LPG",
        description: "Petrol and similar light-fuel cases."
      },
      {
        id: "diesel",
        label: "Diesel",
        description: "Diesel vehicle requiring diesel-side emission guidance."
      },
      {
        id: "ev-other",
        label: "Electric / hybrid / not sure",
        description: "Use this if the fuel type is electric, hybrid, or you are not sure."
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
      url: "https://transport.maharashtra.gov.in/1363/Sarathi-Related-Faceless-Services?format=print",
      lookupHint: "Open the official driving-licence forms page and look for Form 1 if the PDF does not open directly."
    },
    {
      id: "form1a",
      formNo: "Form 1A",
      title: "Medical Certificate",
      category: "Licence Forms",
      usedFor: "Driving licence renewal, IDP, and other cases needing medical certification.",
      url: "https://transport.maharashtra.gov.in/1137/Renewal-of-Driving-License",
      lookupHint: "Open the official driving-licence forms page and look for Form 1A if the PDF does not open directly."
    },
    {
      id: "form2",
      formNo: "Form 2",
      title: "Application for learner's licence / driving licence / renewal / change of address",
      category: "Licence Forms",
      usedFor: "Learner's licence and DL-side application flows.",
      url: "https://transport.maharashtra.gov.in/1135/Learning-License",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-2.pdf",
      lookupHint: "Open the official driving-licence forms page and look for Form 2 if the PDF does not open directly."
    },
    {
      id: "form4",
      formNo: "Form 4",
      title: "Application for Licence to Drive",
      category: "Licence Forms",
      usedFor: "Permanent driving licence and related DL issue flows.",
      url: "https://transport.maharashtra.gov.in/1136/Permanent-License",
      lookupHint: "Open the official driving-licence forms page and look for Form 4 if the PDF does not open directly."
    },
    {
      id: "form4a",
      formNo: "Form 4A",
      title: "Application for International Driving Permit",
      category: "Licence Forms",
      usedFor: "International Driving Permit applications.",
      url: "https://transport.maharashtra.gov.in/1139/International-Driving-Permit",
      lookupHint: "Open the official driving-licence forms page and look for Form 4A if the PDF does not open directly."
    },
    {
      id: "form5",
      formNo: "Form 5",
      title: "Driving Certificate issued by Driving School or Establishment",
      category: "Licence Forms",
      usedFor: "Transport-category driving licence cases where training certification is required.",
      url: "https://transport.maharashtra.gov.in/1136/Permanent-License",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-5.pdf",
      lookupHint: "Open the official licence guidance page and look for Form 5 if the PDF does not open directly."
    },
    {
      id: "form9",
      formNo: "Form 9",
      title: "Application for Renewal of Driving Licence",
      category: "Licence Forms",
      usedFor: "Driving licence renewal.",
      url: "https://transport.maharashtra.gov.in/1137/Renewal-of-Driving-License",
      lookupHint: "Open the official driving-licence forms page and search for Form 9 on Parivahan."
    },
    {
      id: "form20",
      formNo: "Form 20",
      title: "Application for Registration of a Motor Vehicle",
      category: "Vehicle Forms",
      usedFor: "New vehicle registration.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-20.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 20 if the PDF does not open directly."
    },
    {
      id: "form25",
      formNo: "Form 25",
      title: "Application for Renewal of Certificate of Registration",
      category: "Vehicle Forms",
      usedFor: "RC renewal.",
      url: "https://transport.maharashtra.gov.in/1177/Registration-Fees",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-25.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 25 if the PDF does not open directly."
    },
    {
      id: "form26",
      formNo: "Form 26",
      title: "Application for the Issue of Duplicate Certificate of Registration",
      category: "Vehicle Forms",
      usedFor: "Duplicate RC.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 26 on Parivahan."
    },
    {
      id: "form28",
      formNo: "Form 28",
      title: "Application and Grant of No Objection Certificate",
      category: "Vehicle Forms",
      usedFor: "NOC for moving or transferring a vehicle across jurisdiction.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 28 on Parivahan."
    },
    {
      id: "form29",
      formNo: "Form 29",
      title: "Notice of Transfer of Ownership of a Motor Vehicle",
      category: "Vehicle Forms",
      usedFor: "Transfer of vehicle ownership.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 29 on Parivahan."
    },
    {
      id: "form30",
      formNo: "Form 30",
      title: "Application for Intimation and Transfer of Ownership",
      category: "Vehicle Forms",
      usedFor: "Transfer of ownership after sale.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 30 on Parivahan."
    },
    {
      id: "form33",
      formNo: "Form 33",
      title: "Intimation of Change of Address in RC",
      category: "Vehicle Forms",
      usedFor: "Address change in registration certificate.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      downloadUrl: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-33.pdf",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 33 if the PDF does not open directly."
    },
    {
      id: "form34",
      formNo: "Form 34",
      title: "Application for Making an Entry of Hire-Purchase / Lease / Hypothecation",
      category: "Vehicle Forms",
      usedFor: "Hypothecation or finance entry in RC.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 34 on Parivahan."
    },
    {
      id: "form35",
      formNo: "Form 35",
      title: "Notice of Termination of Hire-Purchase / Lease / Hypothecation",
      category: "Vehicle Forms",
      usedFor: "Hypothecation removal after loan closure.",
      url: "https://parivahan.gov.in/parivahan//en/content/vehicle-registration",
      lookupHint: "Open the official vehicle-registration forms page and look for Form 35 if the PDF does not open directly."
    },
    {
      id: "form38",
      formNo: "Form 38",
      title: "Certificate of Fitness",
      category: "Fitness Forms",
      usedFor: "Fitness certificate cases, mainly for transport vehicles.",
      url: "https://parivahan.gov.in/sites/default/files/FAQDOCS/VAHANSERVICES/FitnessCertificate/stepBystep.pdf",
      lookupHint: "Open the official vehicle-registration forms page and search for Form 38 on Parivahan."
    },
    {
      id: "form38a",
      formNo: "Form 38A",
      title: "Report of Inspection",
      category: "Fitness Forms",
      usedFor: "Inspection report linked to transport vehicle fitness workflows.",
      url: "https://parivahan.gov.in/sites/default/files/FAQDOCS/VAHANSERVICES/FitnessCertificate/stepBystep.pdf",
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
          label: "Maharashtra Transport - Learning Licence",
          url: "https://transport.maharashtra.gov.in/1135/Learning-License"
        },
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
          label: "Maharashtra Transport - Faceless Services",
          url: "https://transport.maharashtra.gov.in/1363/Sarathi-Related-Faceless-Services?format=print"
        },
        {
          label: "Parivahan - Licensing Related Fees and Charges",
          url: "https://parivahan.gov.in/en/content/licensing-related-fees-charges"
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
          label: "Maharashtra Transport - International Driving Permit",
          url: "https://transport.maharashtra.gov.in/1139/International-Driving-Permit"
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
        },
        {
          label: "Maharashtra Transport - Registration Fees",
          url: "https://transport.maharashtra.gov.in/1177/Registration-Fees"
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
        "If another registering authority or state is involved, check whether NOC or linked reassignment steps apply before using this service."
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
          url: "https://parivahan.gov.in/en/content/ownership-transfer"
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
          label: "Maharashtra Transport - No Objection Certificate",
          url: "https://transport.maharashtra.gov.in/1107/No-Objection-Certificate"
        },
        {
          label: "Parivahan - NOC",
          url: "https://parivahan.gov.in/en/content/no-objection-certificate"
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
          label: "Form 25 - RC Renewal Form",
          url: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-25.pdf"
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
          url: "https://parivahan.gov.in/en/content/duplicate-rc"
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
          url: "https://parivahan.gov.in/en/content/address-change"
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
          url: "https://parivahan.gov.in/en/content/hp-endorsement"
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
          url: "https://parivahan.gov.in/en/content/hp-termination"
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
      validity: "Fitness validity depends on vehicle class and approval rules. Confirm the issued validity period on the final certificate.",
      notices: [
        "Carry the vehicle, originals, appointment receipt, and payment proof on inspection day."
      ],
      officialLinks: [
        { label: "Vahan", url: "https://vahan.parivahan.gov.in/vahanservice/" },
        {
          label: "Parivahan - Fitness Certificate Step By Step PDF",
          url: "https://parivahan.gov.in/sites/default/files/FAQDOCS/VAHANSERVICES/FitnessCertificate/stepBystep.pdf"
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
          label: "Parivahan - Form 45 (Permit Form Example)",
          url: "https://parivahan.gov.in/sites/default/files/DownloadForm/cmvr/FORM-45.pdf"
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
        {
          label: "Maharashtra Transport - Rate of Vehicle Tax",
          url: "https://transport.maharashtra.gov.in/1117/Rate-of-Vehicle-Tax"
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
        "No. This website helps you understand the service, documents, fees, and visit requirements. Actual applications, payments, appointments, and status checks still happen on Sarathi, Vahan, or Maharashtra Transport."
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
window.siteData.practicalDocsNoteMr =
  "ही अधिकृतपणे बंधनकारक कागदपत्रे नाहीत. सार्वजनिक वापरकर्ता अनुभवांमध्ये वारंवार उल्लेख झालेले बॅकअप कागदपत्रे आहेत आणि त्यामुळे पुन्हा पुन्हा फेर्‍या किंवा पडताळणीतील विलंब टाळण्यास मदत होऊ शकते.";

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

const informationByService = {
  "learner-licence": {
    intro:
      "A learner's licence is the first legal step before a permanent driving licence. It confirms that the applicant is allowed to learn driving for the approved vehicle class after clearing the learner-stage process.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is a temporary learning-stage licence, not the final driving licence.",
          "It is the official record used before you can book the permanent driving test.",
          "In Maharashtra, it is usually the first portal-based step for a new driver."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You are applying for your first two-wheeler or LMV driving entitlement.",
          "You do not already have a learner's licence for the class you want.",
          "You want to begin the waiting period required before the permanent test."
        ]
      },
      {
        title: "Important to know",
        items: [
          "The learner's licence is usually valid for six months.",
          "You cannot skip directly to a permanent driving licence without this stage.",
          "Vehicle-class selection matters, so the application should match the class you actually want to drive."
        ]
      }
    ]
  },
  "permanent-driving-licence": {
    intro:
      "The permanent driving licence is the full licence issued after the learner stage, waiting period, and driving test are completed successfully.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is the stage where the licensing authority checks practical driving ability.",
          "It depends on an existing valid learner's licence.",
          "The final issue normally happens only after the driving test result is accepted."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You already hold a learner's licence and the minimum waiting period is over.",
          "You are ready for the driving test for the approved class.",
          "You want the final licence card or digital record after clearing the test."
        ]
      },
      {
        title: "Important to know",
        items: [
          "This is not only a document upload flow; the driving test is a real decision point.",
          "The vehicle used for the test should match the class applied for.",
          "If the office calls you for verification, carry the learner record, test appointment slip, and vehicle papers."
        ]
      }
    ]
  },
  "dl-renewal": {
    intro:
      "Driving licence renewal keeps an existing licence valid after expiry or near-expiry and can also trigger medical or verification checks depending on age, licence class, and timing.",
    sections: [
      {
        title: "What it means",
        items: [
          "Renewal extends the validity of an existing licence record; it is not the same as duplicate issue or address correction.",
          "The process uses the existing driving licence as the base record.",
          "Medical fitness can become important in some renewal cases."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "Your licence is close to expiry or has already expired.",
          "You need to continue using the existing licence legally without interruption.",
          "The office or portal shows renewal instead of correction or duplicate issue."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Renewal timelines matter, so do not rely on old photocopies without checking the live expiry date.",
          "Out-of-state or old-record cases can trigger extra verification.",
          "If the renewal page asks for medical documents, prepare them before paying and booking the next step."
        ]
      }
    ]
  },
  "duplicate-dl": {
    intro:
      "Duplicate driving licence service is for replacing a lost, damaged, or unusable licence when the original licence record already exists in the official system.",
    sections: [
      {
        title: "What it means",
        items: [
          "This service replaces the physical or active licence document without changing the underlying entitlement.",
          "It is used when the licence is lost, torn, damaged, or otherwise unusable.",
          "The portal generally expects the original licence record to be traceable."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The driving licence is lost or stolen.",
          "The card is damaged, torn, or unreadable.",
          "You still want the same licence record, not a renewal or address correction."
        ]
      },
      {
        title: "Important to know",
        items: [
          "A police acknowledgement or supporting loss record is often useful when the original document is not available.",
          "Any old scan or number reference can help recover the existing record faster.",
          "If the licence is also expired or has address issues, check whether another service is more accurate."
        ]
      }
    ]
  },
  "dl-address-change": {
    intro:
      "Driving licence address change updates the address linked to the existing licence record when the holder has shifted residence or wants the DL to reflect the current address.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is a correction or update to the existing driving licence record.",
          "The core licence entitlement stays the same; only the address details are changed.",
          "The new address proof should match the way the address needs to appear on the final record."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You have moved house and want the driving licence to show the new address.",
          "The old address no longer matches the current ID or residence proof.",
          "A linked service asks for the licence to reflect the current residence."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Address mismatch is a common reason for follow-up checks, so spelling and flat number format matter.",
          "Rental-address cases sometimes need stronger support like a registered agreement or utility-backed proof.",
          "Address change does not by itself renew an expired licence unless the portal routes you into a combined flow."
        ]
      }
    ]
  },
  "international-driving-permit": {
    intro:
      "An International Driving Permit is a travel-linked permit issued on the basis of a valid Indian driving licence. It is typically used when the traveller needs a recognised driving document for use abroad.",
    sections: [
      {
        title: "What it means",
        items: [
          "The IDP does not replace the Indian driving licence; it works along with it.",
          "Travel documents like passport and visa matter because the use case is international travel.",
          "The issuing authority checks whether the underlying Indian licence is valid and usable."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You are travelling abroad and need an international permit for driving.",
          "The destination or rental process expects an IDP in addition to the Indian licence.",
          "You already hold a valid Indian driving licence."
        ]
      },
      {
        title: "Important to know",
        items: [
          "The IDP is normally time-bound and linked to travel context, not a permanent local entitlement abroad.",
          "Passport, visa, travel proof, and medical paperwork can become the most time-sensitive part of the file.",
          "This is a case where office verification is still common, so keep originals ready."
        ]
      }
    ]
  },
  "new-vehicle-registration": {
    intro:
      "New vehicle registration creates the first official vehicle record after purchase. It links the owner, vehicle details, insurance, tax, and manufacturer papers into the RC-side system.",
    sections: [
      {
        title: "What it means",
        items: [
          "Registration is the first official entry of the vehicle into the transport system.",
          "It is based on vehicle invoice, manufacturer documents, tax payment, insurance, and owner proof.",
          "Dealer support is common, but the owner still needs to understand which originals or confirmations remain their responsibility."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You purchased a new vehicle and the permanent registration is pending.",
          "The dealer asks for owner-side proofs or signatures before completion.",
          "The temporary registration has to move into the final RC flow."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Hypothecation, address proof, tax, and invoice details should align from the start because corrections later are more painful.",
          "Vehicle-class and owner-category details affect tax and registration fee logic.",
          "Even when the dealer handles most of the workflow, the owner should preserve copies of every paper used."
        ]
      }
    ]
  },
  "transfer-ownership": {
    intro:
      "Transfer of ownership changes the registered owner in the official RC record after a vehicle sale or ownership handover. It is one of the most document-heavy vehicle services because both parties and the vehicle record must align.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is the legal change of registered owner in the RC system.",
          "It is different from a mere delivery note or private sale agreement.",
          "The RC, insurance, PUC, tax proof, and signed transfer forms usually work together in this flow."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "A used vehicle has been sold or purchased.",
          "The seller and buyer need the RC to reflect the new owner's name.",
          "The vehicle remains in the normal transfer system and is not yet moving to another state through NOC."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Sale and transfer are not complete until the official record changes.",
          "Financed vehicles can need bank involvement before transfer clears.",
          "If the vehicle is moving to another state or registration authority, NOC may become part of the process."
        ]
      }
    ]
  },
  noc: {
    intro:
      "A No Objection Certificate is used when a vehicle record needs to move out of the current registering authority, commonly for another state, another jurisdiction, or a linked reassignment process.",
    sections: [
      {
        title: "What it means",
        items: [
          "NOC is not the same thing as transfer of ownership.",
          "It is a clearance-style step that allows the record to move or be re-used under another authority.",
          "The office checks whether finance, tax, PUC, and record issues are clear before it is issued."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The vehicle is shifting to another state or another registration jurisdiction.",
          "The next process needs a formal clearance from the current registering authority.",
          "The record is old, finance-linked, or likely to need verification before it can move."
        ]
      },
      {
        title: "Important to know",
        items: [
          "People often confuse NOC with simple address change or ownership transfer inside one local system.",
          "Chassis print, tax clearance, and financier clearance often become important here.",
          "If the vehicle is both sold and moved out, expect the sequence of documents to matter."
        ]
      }
    ]
  },
  "rc-renewal": {
    intro:
      "RC renewal extends or refreshes the vehicle registration record when the registration term is ending and the vehicle must continue in legal use.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is a continuation of the registration record, not a transfer or duplicate issue.",
          "The vehicle record, current compliances, and sometimes inspection-linked requirements are reviewed together.",
          "The workflow becomes more sensitive for older vehicles and compliance-linked cases."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The RC is approaching expiry and the vehicle still needs to remain active.",
          "The official portal or office points you to renewal instead of duplicate or address change.",
          "The vehicle is old enough that renewal timing now matters."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Insurance, PUC, tax, and any green-tax or older-vehicle compliance papers should be current before you start.",
          "Do not treat RC renewal as a purely clerical upload; inspection or additional checks can still apply.",
          "The closer you are to the correct renewal window, the smoother the case usually is."
        ]
      }
    ]
  },
  "duplicate-rc": {
    intro:
      "Duplicate RC service replaces a lost, stolen, or damaged registration certificate when the underlying vehicle record already exists and only the certificate has to be re-issued.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is a replacement of the registration certificate, not a change in owner or address.",
          "The office usually expects proof that the original RC is unavailable or unusable.",
          "The existing vehicle record remains the basis of the service."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The RC is lost, stolen, damaged, or unreadable.",
          "The owner needs a valid replacement before other RC-side services can proceed smoothly.",
          "The vehicle details already exist in the official database."
        ]
      },
      {
        title: "Important to know",
        items: [
          "A police acknowledgement and any old RC copy can speed up record confirmation.",
          "If address, owner name, or finance status also changed, you may need a separate or follow-up service.",
          "Keep the vehicle record clean on insurance, PUC, and tax to avoid unrelated delays."
        ]
      }
    ]
  },
  "rc-address-change": {
    intro:
      "RC address change updates the owner's address in the vehicle registration record. It matters when the owner's residence proof changed and the RC now needs to reflect the current address.",
    sections: [
      {
        title: "What it means",
        items: [
          "This is an owner-address update inside the RC record.",
          "It does not transfer ownership and does not by itself move the vehicle to another state.",
          "The supporting address proof should match the final address format you want on the record."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "You changed residence and want the RC to carry the new address.",
          "A linked insurance, finance, or compliance process requires the RC address to be updated.",
          "The case is still an address update, not an out-of-state reassignment."
        ]
      },
      {
        title: "Important to know",
        items: [
          "People often confuse RC address change with NOC or transfer when the vehicle is moving outside the current jurisdiction.",
          "If the vehicle is financed, the financier's consent may also matter.",
          "PUC, insurance, and the new address proof are often checked together."
        ]
      }
    ]
  },
  "hypothecation-addition": {
    intro:
      "Hypothecation addition records the lender's interest on the RC when a vehicle is purchased or financed through a bank or financier.",
    sections: [
      {
        title: "What it means",
        items: [
          "The RC is being updated to show that the vehicle is under finance.",
          "This protects the financier's interest in the official record.",
          "The update depends on signed finance papers from both the owner and the lender."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The vehicle purchase is financed and the RC still has to reflect that loan.",
          "The dealer or bank asks for Form 34 or finance endorsement completion.",
          "A new RC or newly financed vehicle record is being created or corrected."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Owner name, vehicle details, and finance papers should match exactly across the file.",
          "This is not the same as loan closure or removal; it is the entry of finance into the RC.",
          "If the dealer is coordinating the file, still keep copies of the signed finance papers."
        ]
      }
    ]
  },
  "hypothecation-removal": {
    intro:
      "Hypothecation removal clears the lender's interest from the RC after the vehicle loan is fully closed and the bank has issued the required release or NOC papers.",
    sections: [
      {
        title: "What it means",
        items: [
          "This service removes the finance endorsement from the RC.",
          "The bank's final clearance is the key supporting document.",
          "The vehicle remains with the same owner; only the lender's hold is being removed from the record."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The vehicle loan is fully paid and the bank has issued the closure papers.",
          "You want a clean RC before transfer, sale, or future record updates.",
          "The RC still shows finance even though the loan is already closed."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Do not start too early; wait until the bank issues the proper NOC or due-clearance letter.",
          "Form 35 and lender-side signature or release paperwork are central to this service.",
          "Users often face delay when the bank letter format does not match what the office expects, so preserve the originals."
        ]
      }
    ]
  },
  "fitness-certificate": {
    intro:
      "A fitness certificate confirms that a vehicle, especially in transport-linked use, meets the roadworthiness standards required for continued legal operation.",
    sections: [
      {
        title: "What it means",
        items: [
          "Fitness is a roadworthiness and inspection-oriented service.",
          "It is different from PUC, which only concerns emissions.",
          "Vehicle papers and the physical vehicle condition both matter in this flow."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "The vehicle class or permit status requires a current fitness certificate.",
          "The existing fitness period is ending and the vehicle must remain in active use.",
          "A permit or commercial workflow depends on fitness validity."
        ]
      },
      {
        title: "Important to know",
        items: [
          "This is one of the clearest office-and-inspection dependent services.",
          "Carry originals because counters and inspection points may still ask for paper sets.",
          "Do not confuse fitness validity with insurance, permit, or PUC validity; they are related but separate compliance layers."
        ]
      }
    ]
  },
  "permit-services": {
    intro:
      "Permit services cover the authorisation required for commercial, passenger, goods, tourist, and route-specific vehicle operations. The exact permit type decides the forms, fees, and sanctions involved.",
    sections: [
      {
        title: "What it means",
        items: [
          "A permit is an operational authorisation, not the same as registration or tax payment.",
          "The category can change everything, including forms, scrutiny, and renewal cycle.",
          "Permit work often sits at the intersection of RC, tax, fitness, and route authorisation."
        ]
      },
      {
        title: "When you usually need it",
        items: [
          "A commercial vehicle needs a fresh permit, renewal, duplicate, transfer, or related approval.",
          "The vehicle is used for goods, passenger, contract, tourist, or route-based operation.",
          "The official workflow asks for permit-category selection before it can continue."
        ]
      },
      {
        title: "Important to know",
        items: [
          "Always identify the exact permit type first; guessing the category creates the wrong checklist.",
          "Permit readiness depends on related papers like tax, fitness, insurance, and sometimes route or sanction documents.",
          "Commercial operators should expect more office-side scrutiny than in simple private-vehicle services."
        ]
      }
    ]
  },
  "tax-services": {
    intro:
      "Tax-related services help you understand and pay vehicle tax, environment tax, or other rule-based transport charges linked to the vehicle category. This is a calculation-heavy service, not a simple one-form application.",
    sections: [
      {
        title: "What this covers",
        items: [
          "Vehicle tax is typically calculated from category, class, fuel, value, seating, GVW, or transport status.",
          "The official portal usually computes the amount after vehicle verification rather than relying on one flat fee list.",
          "Tax receipts become supporting papers for many later RC-side services."
        ]
      },
      {
        title: "When it matters",
        items: [
          "You need to pay current tax before transfer, NOC, renewal, or permit work can move ahead.",
          "The amount is unclear because the vehicle type or commercial classification affects the slab.",
          "You want to understand why the payable amount is different from another vehicle's case."
        ]
      },
      {
        title: "What users often confuse",
        items: [
          "Tax is not the same as registration fee, permit fee, or penalty; those can appear separately.",
          "Commercial and private vehicles do not necessarily follow the same slab logic.",
          "The final live portal amount should be treated as authoritative when it differs from a general guide."
        ]
      }
    ]
  },
  "puc-requirements": {
    intro:
      "PUC stands for Pollution Under Control. It is the emissions certificate issued after a vehicle passes testing at an authorised PUC centre, and it frequently becomes a supporting document in RC-side RTO services.",
    sections: [
      {
        title: "What PUC actually is",
        items: [
          "It records that the vehicle passed the required emission test for the applicable fuel and category.",
          "It is usually obtained from an authorised PUC testing point, not by filing a direct RTO form first.",
          "Once issued, it becomes a supporting paper for several vehicle-related workflows."
        ]
      },
      {
        title: "Where it usually matters",
        items: [
          "Transfer of ownership and NOC files",
          "RC renewal, duplicate RC, and RC address change",
          "Hypothecation addition or removal and other RC-side updates",
          "Cases where the office wants the vehicle's compliance record to be current before approval"
        ]
      },
      {
        title: "What people often confuse",
        items: [
          "PUC is not the same as a fitness certificate. PUC only deals with emissions, while fitness checks roadworthiness.",
          "Having insurance or tax paid does not automatically mean the PUC is current.",
          "If the fuel type is recorded wrongly at the testing point, downstream RTO services can still get delayed."
        ]
      }
    ]
  }
};

const timelineSummaryByService = {
  "learner-licence": "Usually valid for 6 months after issue.",
  "permanent-driving-licence": "Apply after the learner waiting period and when you are ready for the driving test.",
  "dl-renewal": "Best started before expiry or as soon as possible after expiry.",
  "duplicate-dl": "Processing depends on how quickly the existing licence record is verified.",
  "dl-address-change": "Timeline depends on address-proof verification and record matching.",
  "international-driving-permit": "Usually tied to a valid Indian licence and current travel documents.",
  "new-vehicle-registration": "Dealer and office timelines vary until the permanent RC record is issued.",
  "transfer-ownership": "Timing depends on seller, buyer, and record verification steps.",
  noc: "Timing depends on tax, finance, and record-clearance checks.",
  "rc-renewal": "Start within the allowed renewal window before the RC expires.",
  "duplicate-rc": "Processing depends on loss verification and existing record match.",
  "rc-address-change": "Timeline depends on address proof, financier status, and record update speed.",
  "hypothecation-addition": "Usually moves only after the signed finance papers are accepted.",
  "hypothecation-removal": "Start only after the bank issues the final NOC or due-clearance letter.",
  "fitness-certificate": "Validity and turnaround depend on vehicle class, inspection, and compliance status.",
  "permit-services": "Validity and renewal cycle depend on the exact permit category.",
  "tax-services": "Live portal calculation and payment confirmation control the timing.",
  "puc-requirements": "Validity depends on the certificate issued by the authorised PUC centre."
};

const relatedServiceLinksById = {
  "learner-licence": [
    { id: "permanent-driving-licence", reason: "Use this after the learner stage is complete and you are ready for the test." }
  ],
  "permanent-driving-licence": [
    { id: "learner-licence", reason: "Use this first if the applicant does not yet have a learner's licence." },
    { id: "dl-renewal", reason: "Use this later when the issued driving licence needs renewal." }
  ],
  "dl-renewal": [
    { id: "duplicate-dl", reason: "Use this instead if the issue is loss or damage, not expiry." },
    { id: "dl-address-change", reason: "Use this if the main problem is updating the address on the licence." }
  ],
  "duplicate-dl": [
    { id: "dl-renewal", reason: "Use this if the licence is expiring rather than lost or damaged." },
    { id: "dl-address-change", reason: "Use this if the licence address also needs correction." }
  ],
  "dl-address-change": [
    { id: "dl-renewal", reason: "Use this if the licence also needs renewal based on expiry." },
    { id: "duplicate-dl", reason: "Use this if the card is lost or unusable, not only address-mismatched." }
  ],
  "international-driving-permit": [
    { id: "dl-renewal", reason: "Use this first if the Indian licence is expired or close to expiry." },
    { id: "permanent-driving-licence", reason: "Use this first if the applicant does not yet hold a full Indian driving licence." }
  ],
  "new-vehicle-registration": [
    { id: "hypothecation-addition", reason: "Use this if the new vehicle is financed and the lender must be added to the RC." },
    { id: "tax-services", reason: "Use this if you need to understand the live tax calculation before payment." }
  ],
  "transfer-ownership": [
    { id: "noc", reason: "Use this as well if the vehicle is moving to another state or registration authority." },
    { id: "hypothecation-removal", reason: "Use this first if the RC still shows an active loan or financier." }
  ],
  noc: [
    { id: "transfer-ownership", reason: "Use this if the vehicle is changing owner inside the normal local transfer flow." },
    { id: "rc-address-change", reason: "Use this instead if only the owner address is changing within the same jurisdiction." }
  ],
  "rc-renewal": [
    { id: "duplicate-rc", reason: "Use this instead if the RC is lost or damaged rather than close to expiry." },
    { id: "fitness-certificate", reason: "Use this if the vehicle class also needs a current fitness certificate." }
  ],
  "duplicate-rc": [
    { id: "rc-renewal", reason: "Use this if the RC is expiring rather than missing." },
    { id: "rc-address-change", reason: "Use this if the main update is the owner's address, not a lost RC." }
  ],
  "rc-address-change": [
    { id: "noc", reason: "Use this instead if the vehicle record is actually moving out of the current jurisdiction." },
    { id: "transfer-ownership", reason: "Use this if the owner is changing rather than only the address." }
  ],
  "hypothecation-addition": [
    { id: "new-vehicle-registration", reason: "Use this alongside new registration when the new vehicle is financed." },
    { id: "hypothecation-removal", reason: "Use this later after the vehicle loan is fully closed." }
  ],
  "hypothecation-removal": [
    { id: "transfer-ownership", reason: "Use this before sale if the RC still shows a financier." },
    { id: "noc", reason: "Use this before moving the record if finance clearance is still pending." }
  ],
  "fitness-certificate": [
    { id: "permit-services", reason: "Use this alongside permit work when transport operation depends on fitness validity." },
    { id: "tax-services", reason: "Use this if the commercial vehicle case also needs current tax compliance." }
  ],
  "permit-services": [
    { id: "fitness-certificate", reason: "Use this if the permit depends on a current vehicle fitness record." },
    { id: "tax-services", reason: "Use this if the permit process is blocked by unpaid or unclear tax." }
  ],
  "tax-services": [
    { id: "permit-services", reason: "Use this if the vehicle is commercial and permit-linked." },
    { id: "puc-requirements", reason: "Use this if you also need to confirm compliance papers often checked in RC-side workflows." }
  ],
  "puc-requirements": [
    { id: "tax-services", reason: "Use this if the larger compliance issue is tax payment rather than emissions proof." },
    { id: "rc-renewal", reason: "Use this when you are preparing RC renewal and need the compliance checklist around it." }
  ]
};

const officialTimingWindowsByService = {
  "learner-licence": [
    "Apply only after the applicant meets the age rule for the chosen vehicle class."
  ],
  "permanent-driving-licence": [
    "Apply for the driving test after 30 days from learner's licence issue."
  ],
  "dl-renewal": [
    "Apply from 30 days before the driving licence expiry date.",
    "Maharashtra states renewal is not available after 5 years from expiry."
  ],
  "international-driving-permit": [
    "IDP validity is typically limited to 1 year."
  ],
  "transfer-ownership": [
    "Maharashtra states 14 days in the same jurisdiction.",
    "If another registering authority or state is involved, check the linked NOC or reassignment workflow before payment."
  ],
  "rc-renewal": [
    "Apply not more than 60 days before the RC expiry date."
  ],
  "rc-address-change": [
    "Apply within 14 days of the address change."
  ]
};

const commonConfusionByService = {
  "learner-licence": "People often confuse this with the permanent licence. The learner's licence comes first.",
  "permanent-driving-licence": "This is not the learner's stage. It is the test-based licence that comes after a valid learner's licence.",
  "duplicate-dl": "Use this for a lost or damaged licence, not for renewal or address change.",
  "dl-address-change": "Use this only when the main update is the address, not expiry or loss of the licence.",
  "transfer-ownership": "Transfer of ownership is different from NOC. Use NOC when the record is moving across jurisdiction or state.",
  noc: "Use NOC when the record is moving out of the current jurisdiction. Do not use it for a normal local ownership transfer.",
  "rc-address-change": "Use this when only the address is changing. Use NOC if the vehicle is moving to another jurisdiction.",
  "hypothecation-removal": "Use this after the loan is closed. Do not confuse it with transfer of ownership.",
  "tax-services": "Tax payment is different from RC transfer or permit renewal, even though some papers are checked together.",
  "puc-requirements": "PUC is a compliance paper, not an RTO application by itself."
};

const beforePayingByService = {
  "learner-licence": "Check the class of vehicle, age proof, and address proof before you pay.",
  "permanent-driving-licence": "Confirm the correct service, test slot, and learner's licence details before you pay.",
  "dl-renewal": "Check the expiry date, medical-certificate requirement, and state of the original licence before you pay.",
  "duplicate-dl": "Make sure the licence is truly lost or damaged and not simply due for renewal or correction.",
  "dl-address-change": "Keep the new address exactly as it should appear on the licence record before payment.",
  "international-driving-permit": "Check that your passport, visa, travel papers, and Indian licence are still valid before payment.",
  "new-vehicle-registration": "Confirm who is submitting which papers if the dealer is handling part of the process.",
  "transfer-ownership": "Check whether the case is local transfer or cross-jurisdiction before paying the wrong service.",
  noc: "Confirm that the vehicle is actually moving to another jurisdiction or state before you pay for NOC.",
  "rc-renewal": "Check the RC expiry date and whether fitness papers are also needed before payment.",
  "duplicate-rc": "Use this only when the RC is lost or damaged, not when the main issue is expiry or address change.",
  "rc-address-change": "Check that the address proof and current vehicle record match before payment.",
  "hypothecation-addition": "Check the financier name and loan papers before adding hypothecation.",
  "hypothecation-removal": "Keep the loan closure and financier clearance ready before payment.",
  "fitness-certificate": "Check the appointment slot and vehicle readiness before payment.",
  "permit-services": "Confirm the permit type first, because the correct route depends on the vehicle and use case.",
  "tax-services": "Tax totals depend on vehicle class and usage. Confirm the category before payment.",
  "puc-requirements": "Check whether the downstream RC-side service actually needs a current PUC before you visit."
};

const leaveOfficeChecksByService = {
  "permanent-driving-licence": [
    "Check that the test result or approval status is correctly recorded.",
    "Keep the acknowledgement or receipt before you leave."
  ],
  "new-vehicle-registration": [
    "Check the registration number, owner name, and chassis details on the acknowledgement.",
    "Keep tax and registration receipts together."
  ],
  "transfer-ownership": [
    "Check that the buyer and seller details are correctly recorded.",
    "Keep the acknowledgement showing the transfer request was accepted."
  ],
  noc: [
    "Check the destination authority or jurisdiction details on the acknowledgement.",
    "Keep every page of the NOC output safely."
  ],
  "hypothecation-removal": [
    "Check that financier details were cleared correctly from the request.",
    "Keep the closure proof and acknowledgement together."
  ],
  "fitness-certificate": [
    "Check the fitness result, validity period, and any remarks before you leave.",
    "Keep the inspection receipt."
  ],
  "permit-services": [
    "Check the permit type, validity, and any route or vehicle conditions before leaving.",
    "Keep the acknowledgement or permit printout."
  ]
};

function buildOfficialForms(service) {
  const resources = window.siteData.serviceResources[service.id] || { formIds: [] };
  const forms = resources.formIds
    .map((formId) => window.siteData.formLibrary.find((form) => form.id === formId))
    .filter(Boolean)
    .map((form) => ({
      label: form.formNo,
      title: form.title,
      url: form.url,
      downloadUrl: form.downloadUrl || ""
    }));

  if (forms.length) {
    return forms;
  }

  return (service.forms || [])
    .filter((form) => form && !/portal-driven/i.test(form))
    .map((form) => ({
      label: form,
      title: form,
      url: service.officialLinks[0] ? service.officialLinks[0].url : ""
    }));
}

function buildOfficialProcessingNote(service) {
  if (service.id === "learner-licence") {
    return "No official processing-time estimate is published. Completion depends on portal verification and the learner-test flow.";
  }

  if (service.id === "permanent-driving-licence") {
    return "No official processing-time estimate is published. Final issue depends on the driving-test appointment, result, and approval.";
  }

  if (service.id === "fitness-certificate") {
    return "No official processing-time estimate is published. Final issue depends on the inspection appointment and vehicle fitness approval.";
  }

  if (service.officeVisit.toLowerCase().includes("required") || service.appointment.toLowerCase().includes("required")) {
    return "No official processing-time estimate is published. Final completion depends on appointment, office verification, and approval.";
  }

  return "No official processing-time estimate is published. Completion depends on portal verification, record match, and office scrutiny where applicable.";
}

function buildOutcomeSummary(service) {
  if (service.id === "learner-licence") {
    return "An approved learner's licence record or downloadable learner's licence.";
  }

  if (service.id === "permanent-driving-licence") {
    return "Driving-test approval followed by licence issue or updated licence status.";
  }

  if (service.id === "international-driving-permit") {
    return "An International Driving Permit linked to your existing Indian driving licence.";
  }

  if (service.category === "licence") {
    return `An updated ${service.title.toLowerCase()} record after approval.`;
  }

  if (service.id === "noc") {
    return "An NOC record or acknowledgement for the next jurisdiction step.";
  }

  if (service.id === "puc-requirements") {
    return "A clearer understanding of where a valid PUC is needed in RTO-linked work.";
  }

  if (service.category === "vehicle") {
    return `An updated vehicle record for ${service.title.toLowerCase()} after approval.`;
  }

  return `The official output or updated status for ${service.title.toLowerCase()} after approval.`;
}

function buildServiceLabel(service) {
  if (service.category === "licence") {
    return "Licence service";
  }

  if (service.category === "vehicle") {
    return "Vehicle service";
  }

  return "Compliance service";
}

function buildMainFormsSummary(service) {
  const resources = window.siteData.serviceResources[service.id] || { formIds: [] };
  const formNos = resources.formIds
    .map((formId) => window.siteData.formLibrary.find((form) => form.id === formId))
    .filter(Boolean)
    .map((form) => form.formNo);

  if (!formNos.length || (service.forms.length === 1 && /portal-driven/i.test(service.forms[0]))) {
    return "Mostly portal-driven";
  }

  if (formNos.length === 1) {
    return formNos[0];
  }

  if (formNos.length === 2) {
    return `${formNos[0]} and ${formNos[1]}`;
  }

  return `${formNos[0]}, ${formNos[1]}, and ${formNos.length - 2} more`;
}

function buildMainFormsCountLabel(service) {
  const resources = window.siteData.serviceResources[service.id] || { formIds: [] };

  if (!resources.formIds.length || (service.forms.length === 1 && /portal-driven/i.test(service.forms[0]))) {
    return "Portal-driven";
  }

  return resources.formIds.length === 1 ? "1 main form" : `${resources.formIds.length} main forms`;
}

function normalizeServiceGuideFields(service) {
  return {
    ...service,
    serviceLabel: buildServiceLabel(service),
    featured: window.siteData.featuredIds.includes(service.id),
    practicalDocs: practicalChecklistSignalsByService[service.id] || [],
    recommendedAction: recommendedActionByService[service.id] || service.steps[0],
    information: informationByService[service.id] || null,
    timelineSummary: timelineSummaryByService[service.id] || service.validity,
    mainFormsSummary: buildMainFormsSummary(service),
    mainFormsCountLabel: buildMainFormsCountLabel(service),
    inspectionSummary: service.inspection,
    outcomeSummary: buildOutcomeSummary(service),
    beforePayingNote: beforePayingByService[service.id] || "Check the service, documents, and jurisdiction before you pay.",
    leaveOfficeChecks: leaveOfficeChecksByService[service.id] || [],
    commonConfusion: commonConfusionByService[service.id] || "",
    relatedServices: relatedServiceLinksById[service.id] || [],
    officialTimingWindows: Array.isArray(officialTimingWindowsByService[service.id]) ? officialTimingWindowsByService[service.id] : [],
    officialValidity: service.validity || "No separate official validity note was highlighted on the source pages used here.",
    officialProcessingNote: buildOfficialProcessingNote(service),
    officialRequiredDocs: Array.isArray(service.requiredDocs) ? service.requiredDocs : [],
    officialAdditionalDocs: Array.isArray(service.extraDocs) ? service.extraDocs : [],
    officialForms: buildOfficialForms(service),
    officialFeeNotes: Array.isArray(service.fees) && service.fees.length ? service.fees : ["Use the live official portal amount as final for this service."],
    officialSourceRefs: Array.isArray(service.officialLinks) ? service.officialLinks : []
  };
}

window.siteData.services = window.siteData.services.map(normalizeServiceGuideFields);

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
  { href: "./index.html", label: "Get Help" },
  { href: "./services.html", label: "Services" },
  { href: "./offices.html", label: "Offices" },
  { href: "./faq.html", label: "FAQ" }
];

window.siteData.wizardMeta = {
  introEyebrow: "Suraj Pardeshi • Satara",
  introTitle: "Get help with licences, RC work, NOC, permit, tax, and other RTO documents",
  introText: "Tell us what you need. We help identify the right service, explain the process, and tell you what papers to keep ready.",
  progressLabel: "Question",
  stepMeta: {
    journey: {
      title: "What are you trying to do?",
      help: "Choose the situation that best matches your current task."
    },
    learnerStatus: {
      title: "Do you already have a learner's licence?",
      help: "This decides whether you need the learner's stage or the final driving test."
    },
    service: {
      title: "Which service sounds closest?",
      help: "Pick the nearest match. You can still change it."
    },
    office: {
      title: "Which office or record is involved?",
      help: "Use the code on your current DL or RC if you already have one."
    },
    profile: {
      title: "Is this personal or commercial?",
      help: "This only changes cases where commercial rules matter."
    },
    vehicleType: {
      title: "What kind of vehicle is involved?",
      help: "This changes tax, permit, and PUC guidance."
    },
    fuelType: {
      title: "What fuel type does the vehicle use?",
      help: "This makes the PUC guidance more specific."
    },
    flags: {
      title: "Anything else about this case?",
      help: "Select all that apply, then continue."
    }
  },
  resultTitle: "Recommended service",
  resultDisclaimer:
    "This is a private assistance service. Applications, payments, and final approval happen on official government portals and at the relevant RTO office.",
  helpfulPrompt: "Was this helpful?",
  sectionTabs: [
    { id: "steps", label: "Steps" },
    { id: "documents", label: "Documents" },
    { id: "fees-forms", label: "Fees & Forms" },
    { id: "office", label: "Office" },
    { id: "information", label: "Information" }
  ]
};

window.siteData.business = {
  name: "Suraj Pardeshi",
  nameMr: "सुरज परदेशी",
  businessName: "Shree Swami Smarath Enterprises",
  businessNameMr: "श्री स्वामी स्मरथ एंटरप्रायझेस",
  phoneDisplay: "+91 89994 33180",
  phoneHref: "tel:+918999433180",
  whatsappHref: "https://wa.me/918999433180",
  address: "97 Basppapeth, Radhikaroad, Satara 415002",
  addressMr: "97 बसप्पापेठ, राधिका रोड, सातारा 415002",
  chargeNote: "Service charges depend on the document or work involved. Contact for a quote.",
  chargeNoteMr: "सेवा शुल्क कामाच्या प्रकारावर आणि कागदपत्रांवर अवलंबून असते. कोटेशनसाठी संपर्क करा.",
  disclaimer:
    "This is a private assistance service. Applications, payments, and final approval happen on official government portals and at the relevant RTO office.",
  disclaimerMr:
    "ही खासगी सहाय्य सेवा आहे. अर्ज, पेमेंट आणि अंतिम मान्यता अधिकृत सरकारी पोर्टलवर व संबंधित RTO कार्यालयातच होते."
};

window.siteData.reviewMeta = {
  lastReviewed: "April 7, 2026",
  lastReviewedMr: "7 एप्रिल 2026",
  reportUrl: "https://github.com/kartikdp/satararto/issues/new"
};

window.siteData.i18n = {
  en: {
    languageName: "English",
    nav: {
      index: "Get Help",
      services: "Services",
      offices: "Offices",
      faq: "FAQ"
    },
    language: {
      label: "Language",
      english: "English",
      marathi: "मराठी"
    },
    footer: {
      default: "Private assistance service by Shree Swami Smarath Enterprises. Official submissions, payments, and approval happen on government portals and at the relevant RTO office.",
      wizard: "Tell us the work you need help with. We use the guide to explain the process and the papers you may need.",
      services: "Open any service page if you already know the work and want guidance or paid help with the process.",
      faq: "Use this page for customer questions about documents, visits, and service charges before you start.",
      offices: "This page shows the official office reference and our Satara contact details if you want help before visiting."
    },
    pages: {
      services: {
        eyebrow: "Service help",
        title: "Choose the work you need help with",
        body: "Open the service page directly if you already know the document or RTO work involved."
      },
      offices: {
        eyebrow: "Offices and contact",
        title: "Official RTO offices and our Satara contact point",
        body: "Check whether your case should start with MH-11 Satara or MH-50 Karad, and contact us before visiting if your case is unclear."
      },
      faq: {
        eyebrow: "Common questions",
        title: "Questions customers usually ask before starting",
        body: "Read quick answers about documents, office visits, service charges, and how our help works."
      }
    },
    wizard: {
      introEyebrow: "Suraj Pardeshi • Satara",
      introTitle: "Get help with licences, RC work, NOC, permit, tax, and other RTO documents",
      introText: "Tell us what you need. We help identify the right service, explain the process, and tell you what papers to keep ready.",
      introLinkPrefix: "Already know the work?",
      introLinkLabel: "See all services",
      progressLabel: "Question",
      buttons: {
        startOver: "Start over",
        back: "Back",
        showResult: "Show my result",
        changeAnswers: "Change my answers"
      },
      stepMeta: {
        journey: { title: "What are you trying to do?", help: "Choose the situation that best matches your current task." },
        learnerStatus: { title: "Do you already have a learner's licence?", help: "This decides whether you need the learner's stage or the final driving test." },
        service: { title: "Which service sounds closest?", help: "Pick the nearest match. You can still change it." },
        office: { title: "Which office or record is involved?", help: "Use the code on your current DL or RC if you already have one." },
        profile: { title: "Is this personal or commercial?", help: "This only changes cases where commercial rules matter." },
        vehicleType: { title: "What kind of vehicle is involved?", help: "This changes tax, permit, and PUC guidance." },
        fuelType: { title: "What fuel type does the vehicle use?", help: "This makes the PUC guidance more specific." },
        flags: { title: "Anything else about this case?", help: "Select all that apply, then continue." }
      }
    },
    guide: {
      sectionLabels: {
        steps: "Steps",
        documents: "Documents",
        timeline: "Timeline",
        fees: "Fees",
        forms: "Forms",
        office: "Office",
        information: "Information",
        sources: "Official reference"
      },
      sectionEyebrows: {
        steps: "What to do",
        documents: "Keep ready",
        timeline: "Dates and validity",
        fees: "What you pay",
        forms: "Official paperwork",
        office: "Visit and verification",
        information: "Background",
        sources: "Official references"
      },
      sectionIntros: {
        steps: "Follow the service in the order shown here.",
        documents: "Official papers first, then supporting papers and practical backup items.",
        timeline: "Key windows, validity periods, and timing notes.",
        fees: "Official fee notes and portal amount guidance.",
        forms: "Forms and official pages linked to this service.",
        office: "Office, appointment, and inspection guidance.",
        information: "Background that can help you understand the work before you start.",
        sources: "Government source used for this process."
      },
      labels: {
        whoThisIsFor: "Who this is for",
        youReceive: "You receive",
        office: "Office",
        mostUsed: "Most used",
        startOn: "Start on",
        officeVisit: "Office visit",
        carryOriginals: "Carry originals",
        requiredDocuments: "Required documents",
        sometimesNeeded: "Sometimes needed",
        backupPapers: "Backup papers people often carry",
        stepByStep: "Step-by-step",
        afterSubmit: "After you submit",
        beforePay: "Before you pay",
        watchOutFor: "Watch out for",
        beforeLeaveOffice: "Before you leave the office",
        importantDates: "Important dates",
        validity: "Validity",
        processingTime: "Processing time",
        officialForms: "Official forms",
        officeGuidance: "Office and appointment guidance",
        beforeVisit: "Before you visit",
        background: "What this process means",
        officialSources: "Government source used for this process",
        linkCopied: "Link copied",
        copyLink: "Copy link",
        printGuide: "Print guide",
        useWizard: "Not sure? Use Get Help",
        searchServices: "Search services",
        searchPlaceholder: "Search learner's licence, RC transfer, NOC, permit...",
        noMatchingService: "No matching service found",
        noMatchingHint: "Try a simpler word like renewal, transfer, NOC, address change, or permit.",
        chooseRightOffice: "Choosing the right office",
        officeCodeHint: "Where to find the office code",
        officeCodeHintBody: "Check the office code printed on your current DL or RC. Use that code first before starting a new application.",
        mapLink: "Open in Maps",
        faqSearchPlaceholder: "Search common questions...",
        noFaqMatch: "No matching question found",
        noFaqHint: "Try words like licence, RC, transfer, address, or office.",
        reportOutdated: "Report outdated information",
        callNow: "Call now",
        chatWhatsapp: "Chat on WhatsApp",
        serviceHelpTitle: "Need help with this service?",
        serviceHelpBody: "We can help you understand the process, check what papers are needed, and guide the next step before you visit the office or open the portal.",
        availableHelp: "Available help",
        helpPointDocuments: "Document checklist and paper review before you start",
        helpPointProcess: "Guidance on the process, office routing, and what to keep ready",
        helpPointSupport: "Help if you are unsure which service or office applies",
        customQuote: "Service charges depend on the document or work involved. Contact for a quote.",
        privateServiceNote: "Private assistance service. Final submission, payment, and approval depend on the official portal or office.",
        visitOfficeLabel: "Visit office / address",
        officialReference: "Official reference",
        howWeHelpTitle: "How our help works",
        contactBeforeVisit: "If you are unsure, contact us before visiting the RTO.",
        officeReferenceTitle: "Official RTO office reference",
        businessContactTitle: "Our Satara contact point"
      }
    }
  },
  mr: {
    languageName: "मराठी",
    nav: {
      index: "मदत मिळवा",
      services: "सेवा",
      offices: "कार्यालये",
      faq: "सामान्य प्रश्न"
    },
    language: {
      label: "भाषा",
      english: "English",
      marathi: "मराठी"
    },
    footer: {
      default: "ही Shree Swami Smarath Enterprises ची खासगी सहाय्य सेवा आहे. अधिकृत अर्ज, पेमेंट आणि अंतिम मान्यता सरकारी पोर्टलवर व संबंधित RTO कार्यालयातच होते.",
      wizard: "तुम्हाला कोणत्या कामासाठी मदत हवी आहे ते सांगा. आम्ही प्रक्रिया आणि लागणारी कागदपत्रे समजावून सांगतो.",
      services: "काम माहिती असल्यास थेट सेवा पान उघडा आणि प्रक्रियेबाबत मदत हवी असल्यास आमच्याशी संपर्क करा.",
      faq: "ही पाने ग्राहकांच्या नेहमीच्या प्रश्नांसाठी आहेत, जसे कागदपत्रे, कार्यालय भेट आणि सेवा शुल्क.",
      offices: "या पानावर अधिकृत कार्यालयाचा संदर्भ आणि भेटीपूर्वी मदतीसाठी आमचे साताऱ्यातील संपर्क तपशील दिले आहेत."
    },
    pages: {
      services: {
        eyebrow: "सेवा मदत",
        title: "तुम्हाला ज्या कामासाठी मदत हवी आहे ते निवडा",
        body: "काम किंवा कागदपत्र माहिती असल्यास थेट त्या सेवा पानावर जा."
      },
      offices: {
        eyebrow: "कार्यालये आणि संपर्क",
        title: "अधिकृत RTO कार्यालये आणि आमचा साताऱ्यातील संपर्क",
        body: "तुमचा विषय MH-11 सातारा की MH-50 कराड येथे सुरू करायचा ते तपासा. शंका असल्यास भेटीपूर्वी आमच्याशी संपर्क करा."
      },
      faq: {
        eyebrow: "सामान्य प्रश्न",
        title: "सुरू करण्यापूर्वी ग्राहक सहसा विचारणारे प्रश्न",
        body: "कागदपत्रे, कार्यालय भेट, सेवा शुल्क आणि आमची मदत कशी काम करते याबद्दल झटपट उत्तरे पाहा."
      }
    },
    wizard: {
      introEyebrow: "सुरज परदेशी • सातारा",
      introTitle: "परवाना, RC, NOC, परमिट, कर आणि इतर RTO कागदपत्रांसाठी मदत मिळवा",
      introText: "तुम्हाला काय काम आहे ते सांगा. आम्ही योग्य सेवा, प्रक्रिया आणि लागणारी कागदपत्रे समजावून सांगतो.",
      introLinkPrefix: "काम आधीच माहिती आहे?",
      introLinkLabel: "सर्व सेवा पाहा",
      progressLabel: "प्रश्न",
      buttons: {
        startOver: "पुन्हा सुरू करा",
        back: "मागे",
        showResult: "माझ्यासाठी योग्य सेवा दाखवा",
        changeAnswers: "उत्तरे बदला"
      },
      stepMeta: {
        journey: { title: "तुम्हाला काय करायचे आहे?", help: "तुमच्या सध्याच्या कामाशी सर्वात जास्त जुळणारी परिस्थिती निवडा." },
        learnerStatus: { title: "तुमच्याकडे आधीच शिकाऊ परवाना आहे का?", help: "यावरून तुम्हाला शिकाऊ टप्पा हवा की अंतिम वाहनचालक चाचणी ते ठरते." },
        service: { title: "यापैकी कोणती सेवा जास्त जवळची वाटते?", help: "सर्वात जवळचा पर्याय निवडा. नंतर बदलू शकता." },
        office: { title: "कोणते कार्यालय किंवा रेकॉर्ड लागू आहे?", help: "तुमच्याकडे सध्याचा DL किंवा RC असल्यास त्यावरील कोड वापरा." },
        profile: { title: "हे वैयक्तिक आहे की व्यावसायिक?", help: "याचा फरक फक्त जिथे व्यावसायिक नियम लागू होतात तिथे पडतो." },
        vehicleType: { title: "कोणत्या प्रकारचे वाहन आहे?", help: "यामुळे कर, परवाना आणि प्रदूषण प्रमाणपत्राचे मार्गदर्शन बदलते." },
        fuelType: { title: "वाहन कोणत्या इंधनावर चालते?", help: "यामुळे प्रदूषण प्रमाणपत्राचे मार्गदर्शन अधिक अचूक होते." },
        flags: { title: "या प्रकरणाबद्दल अजून काही आहे का?", help: "लागू असलेले सर्व निवडा आणि पुढे जा." }
      }
    },
    guide: {
      sectionLabels: {
        steps: "पायऱ्या",
        documents: "कागदपत्रे",
        timeline: "वेळ व वैधता",
        fees: "फी",
        forms: "फॉर्म",
        office: "कार्यालय",
        information: "माहिती",
        sources: "अधिकृत संदर्भ"
      },
      sectionEyebrows: {
        steps: "काय करायचे",
        documents: "तयार ठेवा",
        timeline: "तारखा आणि वैधता",
        fees: "काय भरायचे",
        forms: "अधिकृत फॉर्म",
        office: "भेट आणि पडताळणी",
        information: "पार्श्वभूमी",
        sources: "अधिकृत संदर्भ"
      },
      sectionIntros: {
        steps: "सेवा खाली दिलेल्या क्रमाने पूर्ण करा.",
        documents: "आधी अधिकृत कागदपत्रे, नंतर पूरक आणि बॅकअप कागदपत्रे पहा.",
        timeline: "महत्त्वाच्या मुदती, वैधता आणि वेळेबाबतच्या नोंदी.",
        fees: "अधिकृत शुल्क नोंदी आणि संकेतस्थळावर दिसणाऱ्या रकमेबाबत मार्गदर्शन.",
        forms: "या सेवेशी संबंधित फॉर्म आणि अधिकृत पाने.",
        office: "कार्यालय, वेळ ठरवणे आणि तपासणीसंबंधी मार्गदर्शन.",
        information: "काम सुरू करण्यापूर्वी उपयोगी पडणारी थोडक्यात पार्श्वभूमी.",
        sources: "या प्रक्रियेसाठी वापरलेला सरकारी स्रोत."
      },
      labels: {
        whoThisIsFor: "ही सेवा कोणासाठी आहे",
        youReceive: "तुम्हाला काय मिळते",
        office: "कार्यालय",
        mostUsed: "सर्वाधिक वापरली जाणारी",
        startOn: "येथून सुरू करा",
        officeVisit: "कार्यालय भेट",
        carryOriginals: "मूळ कागदपत्रे बाळगा",
        requiredDocuments: "आवश्यक कागदपत्रे",
        sometimesNeeded: "कधी कधी लागणारी",
        backupPapers: "लोक सहसा सोबत ठेवतात अशी बॅकअप कागदपत्रे",
        stepByStep: "टप्प्याटप्प्याने प्रक्रिया",
        afterSubmit: "सबमिट केल्यानंतर",
        beforePay: "पेमेंट करण्यापूर्वी",
        watchOutFor: "लक्षात ठेवा",
        beforeLeaveOffice: "कार्यालयातून निघण्यापूर्वी",
        importantDates: "महत्त्वाच्या तारखा",
        validity: "वैधता",
        processingTime: "प्रक्रिया वेळ",
        officialForms: "अधिकृत फॉर्म",
        officeGuidance: "कार्यालय आणि वेळ ठरवण्याचे मार्गदर्शन",
        beforeVisit: "भेट देण्यापूर्वी",
        background: "ही प्रक्रिया नेमकी काय आहे",
        officialSources: "या प्रक्रियेसाठी वापरलेला सरकारी स्रोत",
        linkCopied: "लिंक कॉपी झाली",
        copyLink: "लिंक कॉपी करा",
        printGuide: "मार्गदर्शिका प्रिंट करा",
        useWizard: "निश्चित नाही? ‘मदत मिळवा’ वापरा",
        searchServices: "सेवा शोधा",
        searchPlaceholder: "शिकाऊ परवाना, RC हस्तांतरण, NOC, परमिट शोधा...",
        noMatchingService: "जुळणारी सेवा सापडली नाही",
        noMatchingHint: "नूतनीकरण, हस्तांतरण, NOC, पत्ता बदल किंवा परमिट असे सोपे शब्द वापरून पहा.",
        chooseRightOffice: "योग्य कार्यालय कसे निवडावे",
        officeCodeHint: "कार्यालयाचा कोड कुठे सापडेल",
        officeCodeHintBody: "तुमच्या सध्याच्या DL किंवा RC वर छापलेला कार्यालय कोड पहा. नवीन अर्ज सुरू करण्यापूर्वी तोच कोड वापरा.",
        mapLink: "नकाशावर उघडा",
        faqSearchPlaceholder: "सामान्य प्रश्न शोधा...",
        noFaqMatch: "जुळणारा प्रश्न सापडला नाही",
        noFaqHint: "परवाना, RC, हस्तांतरण, पत्ता किंवा कार्यालय असे शब्द वापरून पहा.",
        reportOutdated: "कालबाह्य माहिती कळवा",
        callNow: "आत्ता कॉल करा",
        chatWhatsapp: "व्हॉट्सअॅपवर बोला",
        serviceHelpTitle: "या सेवेसाठी मदत हवी आहे का?",
        serviceHelpBody: "आम्ही प्रक्रिया समजावून सांगू शकतो, लागणारी कागदपत्रे तपासू शकतो आणि पोर्टल किंवा कार्यालयात जाण्यापूर्वी पुढची पायरी स्पष्ट करू शकतो.",
        availableHelp: "आम्ही कशात मदत करतो",
        helpPointDocuments: "काम सुरू करण्यापूर्वी कागदपत्रांची यादी आणि कागद तपासणी",
        helpPointProcess: "प्रक्रिया, कोणते कार्यालय लागू होते आणि काय तयार ठेवायचे याबद्दल मार्गदर्शन",
        helpPointSupport: "कोणती सेवा किंवा कार्यालय लागू आहे हे नक्की नसेल तरी मदत",
        customQuote: "सेवा शुल्क कामाच्या प्रकारावर आणि कागदपत्रांवर अवलंबून असते. कोटेशनसाठी संपर्क करा.",
        privateServiceNote: "ही खासगी सहाय्य सेवा आहे. अंतिम अर्ज, पेमेंट आणि मान्यता अधिकृत पोर्टल किंवा कार्यालयावरच अवलंबून असते.",
        visitOfficeLabel: "कार्यालय / पत्ता",
        officialReference: "अधिकृत संदर्भ",
        howWeHelpTitle: "आमची मदत कशी काम करते",
        contactBeforeVisit: "शंका असल्यास RTO ला जाण्यापूर्वी आमच्याशी संपर्क करा.",
        officeReferenceTitle: "अधिकृत RTO कार्यालयाचा संदर्भ",
        businessContactTitle: "आमचा साताऱ्यातील संपर्क"
      }
    }
  }
};

const marathiJourneyById = {
  "new-driver": {
    titleMr: "मी नवीन चालक आहे",
    descriptionMr: "पहिला शिकाऊ परवाना काढण्यासाठी किंवा शिकाऊ परवान्यानंतर कायम परवान्याकडे जाण्यासाठी येथे सुरू करा."
  },
  "renew-or-correct-licence": {
    titleMr: "मला माझा परवाना अद्ययावत करायचा आहे",
    descriptionMr: "नूतनीकरण, हरवलेल्या परवान्याची प्रत, पत्ता बदल किंवा विद्यमान DL दुरुस्तीसाठी योग्य."
  },
  "bought-or-sold-vehicle": {
    titleMr: "मी वाहन खरेदी केले किंवा विकले",
    descriptionMr: "नोंदणी, मालकी हस्तांतरण किंवा मालक बदलाशी संबंधित कागदपत्रांसाठी येथे या."
  },
  "moved-or-shifting-state": {
    titleMr: "मी पत्ता बदलला किंवा वाहन दुसरीकडे हलवत आहे",
    descriptionMr: "RC वरील पत्ता बदल, NOC आणि क्षेत्राधिकार बदलाशी संबंधित कामासाठी येथे सुरू करा."
  },
  "loan-or-finance": {
    titleMr: "माझ्या वाहन कर्जाची स्थिती बदलली",
    descriptionMr: "RC मध्ये तारणाची नोंद करणे किंवा कर्जफेडीनंतर ती काढून टाकण्यासाठी येथे या."
  },
  "travel-or-commercial": {
    titleMr: "मला प्रवास, परमिट, कर किंवा नियमपालनाची मदत हवी आहे",
    descriptionMr: "IDP, परमिट, कर, PUC आणि इतर नियमपालनाशी संबंधित सेवांसाठी येथे सुरू करा."
  }
};

function createMarathiInformation(intro, whenNeededItems, confusionText) {
  return {
    intro,
    sections: [
      {
        body: intro
      },
      {
        items: whenNeededItems
      },
      {
        body: confusionText
      }
    ]
  };
}

const marathiGeneratedTextByEnglish = {
  "Address proof": "पत्त्याचा पुरावा",
  "Address proof of purchaser": "खरेदीदाराचा पत्त्याचा पुरावा",
  "Age proof": "वयाचा पुरावा",
  "Air ticket or travel proof for verification": "पडताळणीसाठी विमानतिकीट किंवा प्रवासाचा पुरावा",
  "Current driving licence": "सध्याचा वाहनचालक परवाना",
  "Existing driving licence": "विद्यमान वाहनचालक परवाना",
  "Existing registration-linked owner record": "नोंदणीशी जोडलेला विद्यमान मालकाचा रेकॉर्ड",
  "Financier and owner signatures": "फायनान्सर आणि मालक यांच्या स्वाक्षऱ्या",
  "Financier due-clearance or NOC": "फायनान्सरकडील ड्यू-क्लिअरन्स किंवा NOC",
  "Form 1 or Form 1A depending on class and medical requirement": "वर्ग आणि वैद्यकीय अटींनुसार फॉर्म 1 किंवा फॉर्म 1A",
  "Form 1A": "फॉर्म 1A",
  "Form 1A medical certificate": "फॉर्म 1A वैद्यकीय प्रमाणपत्र",
  "Form 2 application details": "फॉर्म 2 अर्ज तपशील",
  "Form 20": "फॉर्म 20",
  "Form 21 sale certificate": "फॉर्म 21 विक्री प्रमाणपत्र",
  "Form 22 or Form 22A road-worthiness / compliance certificate": "फॉर्म 22 किंवा फॉर्म 22A रस्तेसुरक्षा / अनुरूपता प्रमाणपत्र",
  "Form 25": "फॉर्म 25",
  "Form 26": "फॉर्म 26",
  "Form 28": "फॉर्म 28",
  "Form 29": "फॉर्म 29",
  "Form 30": "फॉर्म 30",
  "Form 33": "फॉर्म 33",
  "Form 34": "फॉर्म 34",
  "Form 35": "फॉर्म 35",
  "Form 4": "फॉर्म 4",
  "Form 4A": "फॉर्म 4A",
  "Form 9": "फॉर्म 9",
  "Insurance certificate": "विमा प्रमाणपत्र",
  "Insurance copy": "विम्याची प्रत",
  "Insurance details": "विमा तपशील",
  "LLD or duplicate licence form as listed by Maharashtra": "महाराष्ट्रानुसार नमूद केलेला LLD किंवा डुप्लिकेट परवाना फॉर्म",
  "Learner's licence": "शिकाऊ परवाना",
  "New address proof": "नवीन पत्त्याचा पुरावा",
  "Old damaged licence if available": "उपलब्ध असल्यास जुना खराब परवाना",
  "Original documents on appointment day": "अपॉइंटमेंटच्या दिवशी मूळ कागदपत्रे",
  "Owner signature identification": "मालकाच्या स्वाक्षरीची ओळख",
  "PAN or Form 60": "PAN किंवा फॉर्म 60",
  "PAN or Form 60 / Form 61": "PAN किंवा फॉर्म 60 / फॉर्म 61",
  "PUC certificate": "PUC प्रमाणपत्र",
  "Passport": "पासपोर्ट",
  "Permit-specific route or authorization papers": "परमिट-विशिष्ट मार्ग किंवा अधिकृतता कागदपत्रे",
  Photos: "छायाचित्रे",
  "Photos if requested by the workflow": "प्रक्रियेनुसार मागितल्यास छायाचित्रे",
  "Police certificate or FIR": "पोलिस प्रमाणपत्र किंवा FIR",
  "Police report if the licence is lost": "परवाना हरवला असल्यास पोलिस अहवाल",
  "Portal-uploaded documents requested by the fitness service": "फिटनेस सेवेनुसार पोर्टलवर मागितलेली अपलोड कागदपत्रे",
  "Proof of new address": "नवीन पत्त्याचा पुरावा",
  "Purchase invoice": "खरेदी चलन",
  RC: "RC",
  "RC copy": "RC ची प्रत",
  "Recent passport photos": "अलीकडील पासपोर्ट फोटो",
  "Recent photographs": "अलीकडील छायाचित्रे",
  "Road tax payment proof": "रस्ता कर भरल्याचा पुरावा",
  "Tax payment proof": "कर भरल्याचा पुरावा",
  "Tax proof": "कराचा पुरावा",
  "Up-to-date motor vehicle tax proof": "अद्ययावत मोटार कराचा पुरावा",
  "Valid Indian driving licence": "वैध भारतीय वाहनचालक परवाना",
  "Valid PUC certificate": "वैध PUC प्रमाणपत्र",
  "Vehicle papers": "वाहन कागदपत्रे",
  "Vehicle record details in the portal": "पोर्टलवरील वाहन रेकॉर्ड तपशील",
  "Vehicle registration details": "वाहन नोंदणी तपशील",
  "Visa where applicable": "लागू असल्यास व्हिसा",
  "Affidavit that RC is lost and not impounded": "RC हरवले असून जप्त नसल्याचे प्रतिज्ञापत्र",
  "Attested photocopy of the old licence if available": "उपलब्ध असल्यास जुन्या परवान्याची सत्यापित प्रत",
  "Chassis and engine pencil print": "चेसिस आणि इंजिनची पेन्सिल प्रत",
  "Financier NOC if hypothecated": "तारण असल्यास फायनान्सरचे NOC",
  "Fitness certificate where applicable": "लागू असल्यास फिटनेस प्रमाणपत्र",
  "Form 28 if another registering authority jurisdiction is involved": "दुसरे नोंदणी प्राधिकरण लागू असल्यास फॉर्म 28",
  "Form 34 if financed": "वाहन फायनान्सवर असल्यास फॉर्म 34",
  "Form 5 for transport category applications": "परिवहन वर्गाच्या अर्जांसाठी फॉर्म 5",
  "Forms vary: tourist, national, transfer, duplicate, or renewal permit forms": "फॉर्म बदलू शकतात: पर्यटन, राष्ट्रीय, हस्तांतरण, डुप्लिकेट किंवा नूतनीकरण परमिट फॉर्म",
  "Guardian consent where legally applicable": "कायद्यानुसार लागू असल्यास पालक संमती",
  "NOC or verification record if the original licence belongs to another state": "मूळ परवाना दुसऱ्या राज्याचा असल्यास NOC किंवा पडताळणी रेकॉर्ड",
  "Signature identification": "स्वाक्षरीची ओळख",
  "Some tax workflows depend on permit class or commercial classification": "काही कर प्रक्रियांमध्ये परमिट वर्ग किंवा व्यावसायिक वर्गीकरण महत्त्वाचे असते",
  "Supporting identity document if requested by the workflow": "प्रक्रियेनुसार मागितल्यास पूरक ओळखपत्र",
  "Tax clearance and chassis print where applicable": "लागू असल्यास कर क्लिअरन्स आणि चेसिस प्रत",
  "Temporary registration if applicable": "लागू असल्यास तात्पुरती नोंदणी",
  "Transport permit / challan / fitness clearances where applicable": "लागू असल्यास परिवहन परमिट / चलन / फिटनेस क्लिअरन्स",
  "Transport-category medical documents where relevant": "लागू असल्यास परिवहन वर्गातील वैद्यकीय कागदपत्रे",
  "Vehicle emission test at an authorized PUC center": "अधिकृत PUC केंद्रावर वाहन उत्सर्जन चाचणी",
  "Vehicle must be physically presented for inspection": "तपासणीसाठी वाहन प्रत्यक्ष सादर करणे आवश्यक आहे",
  "Additional late fee may apply after the grace period": "ग्रेस कालावधीनंतर अतिरिक्त विलंब शुल्क लागू होऊ शकते",
  "Address change fee is half of the registration fee": "पत्ता बदल शुल्क नोंदणी शुल्काच्या अर्धे असते",
  "Duplicate RC fee is half of the registration fee": "डुप्लिकेट RC शुल्क नोंदणी शुल्काच्या अर्धे असते",
  "Final portal total may include extra charges": "पोर्टलवरील अंतिम रकमेतील अतिरिक्त शुल्क लागू होऊ शकते",
  "Fitness certificate issue or renewal: Rs. 200": "फिटनेस प्रमाणपत्र जारी / नूतनीकरण: रु. 200",
  "Goods vehicle state permit fee: Rs. 1000": "मालवाहतूक वाहन राज्य परमिट शुल्क: रु. 1000",
  "LMV non-transport example: Rs. 300": "LMV नॉन-ट्रान्सपोर्ट उदाहरण: रु. 300",
  "LMV non-transport example: Rs. 600": "LMV नॉन-ट्रान्सपोर्ट उदाहरण: रु. 600",
  "Late fee may apply after expiry": "मुदत संपल्यानंतर विलंब शुल्क लागू होऊ शकते",
  "Maharashtra page shows Rs. 214": "महाराष्ट्र पानानुसार शुल्क रु. 214 दाखवले आहे",
  "Medium / heavy manual example: Rs. 600": "मध्यम / जड मॅन्युअल उदाहरण: रु. 600",
  "Medium / heavy vehicle: Rs. 3000": "मध्यम / जड वाहन: रु. 3000",
  "Motor cab with meter permit fee: Rs. 500": "मीटर असलेल्या मोटर कॅब परमिट शुल्क: रु. 500",
  "Motor vehicle tax is separate": "मोटार वाहन कर वेगळा असतो",
  "Motorcycle example: Rs. 150": "मोटरसायकल उदाहरण: रु. 150",
  "Motorcycle example: Rs. 300": "मोटरसायकल उदाहरण: रु. 300",
  "Motorcycle manual example: Rs. 200": "मोटरसायकल मॅन्युअल उदाहरण: रु. 200",
  "Motorcycle: Rs. 500": "मोटरसायकल: रु. 500",
  "National permit fee: Rs. 1500": "राष्ट्रीय परमिट शुल्क: रु. 1500",
  "No separate cancellation fee noted in the central fee table for the termination itself": "केंद्रीय शुल्क तक्त्यात फक्त समाप्तीसाठी वेगळे रद्द शुल्क नमूद नाही",
  "PUC rates vary by center and category": "PUC दर केंद्र आणि वाहन श्रेणीनुसार बदलतात",
  "Registration fee depends on vehicle class": "नोंदणी शुल्क वाहनाच्या वर्गावर अवलंबून असते",
  "Renewal uses registration fee rules by vehicle class": "नूतनीकरणासाठी वाहन वर्गानुसार नोंदणी शुल्क नियम लागू होतात",
  "Rs. 1000": "रु. 1000",
  "Rs. 150 per class of vehicle": "प्रत्येक वाहन वर्गासाठी रु. 150",
  "Rs. 200 for change in address / particulars": "पत्ता / तपशील बदलासाठी रु. 200",
  "Rs. 200 issue of driving licence": "वाहनचालक परवाना जारी शुल्क रु. 200",
  "Rs. 200 standard renewal fee": "मानक नूतनीकरण शुल्क रु. 200",
  "Rs. 300 driving competence test fee per class": "प्रत्येक वर्गासाठी ड्रायव्हिंग कौशल्य चाचणी शुल्क रु. 300",
  "Rs. 300 when renewed after the grace period": "ग्रेस कालावधीनंतर नूतनीकरण केल्यास रु. 300",
  "Rs. 50 learner's licence test fee": "शिकाऊ परवाना चाचणी शुल्क रु. 50",
  "Rule 81 fee applies and should be confirmed on the live portal": "नियम 81 नुसार शुल्क लागू होते; अंतिम रक्कम लाईव्ह पोर्टलवर तपासा",
  "Smart-card fee may also apply": "स्मार्ट कार्ड शुल्कही लागू होऊ शकते",
  "Smart-card fee may apply separately": "स्मार्ट कार्ड शुल्क वेगळे लागू होऊ शकते",
  "System-calculated and rule-based, not one flat figure": "ही एकसारखी स्थिर रक्कम नसून प्रणालीद्वारे आणि नियमांनुसार मोजली जाते",
  "Temporary permit example: Rs. 1000": "तात्पुरते परमिट उदाहरण: रु. 1000",
  "Test fee varies by class": "चाचणी शुल्क वाहन वर्गानुसार बदलते",
  "Three-wheeler / LMV manual example: Rs. 400": "त्रिचाकी / LMV मॅन्युअल उदाहरण: रु. 400",
  "Three-wheeler / quadricycle / LMV: Rs. 1500": "त्रिचाकी / क्वाड्रिसायकल / LMV: रु. 1500",
  "Tourist cab permit fee: Rs. 1500": "टुरिस्ट कॅब परमिट शुल्क: रु. 1500",
  "Transfer fee is half of the registration fee": "हस्तांतरण शुल्क नोंदणी शुल्काच्या अर्धे असते",
  "Any old scan, photo, xerox, or DigiLocker view of the lost driving licence": "हरवलेल्या परवान्याची जुनी स्कॅन प्रत, फोटो, झेरॉक्स किंवा DigiLocker प्रत",
  "Authorization letter and ID proof if a representative submits the file": "प्रतिनिधी अर्ज देत असल्यास अधिकृतता पत्र आणि ओळख पुरावा",
  "Authorization letter from the vehicle owner if the test vehicle is borrowed": "चाचणीसाठीचे वाहन उधार असेल तर वाहनमालकाचे अधिकृतता पत्र",
  "Backup photo and signature files, plus a couple of passport photos if image upload or counter verification fails": "इमेज अपलोड किंवा काउंटर पडताळणी अयशस्वी झाल्यास फोटो, सही फाइल्स आणि काही पासपोर्ट फोटो राखीव ठेवा",
  "Bank NOC or loan-closure letter in original if finance ever existed": "कधी फायनान्स असले असल्यास बँकेचे मूळ NOC किंवा कर्जबंद पत्र",
  "Bank sanction letter or finance-agreement copy": "बँकेचे मंजुरीपत्र किंवा फायनान्स कराराची प्रत",
  "Challan-clearance or tax-receipt printout before applying": "अर्जापूर्वी चलन क्लिअरन्स किंवा कर पावतीची प्रिंट",
  "Chassis and engine details noted down in case OTP or portal lookup fails": "OTP किंवा पोर्टल शोध अयशस्वी झाल्यास चेसिस आणि इंजिन तपशील लिहून ठेवा",
  "Chassis pencil print or clear chassis photo if upload or counter verification asks for it": "अपलोड किंवा पडताळणीसाठी मागितल्यास चेसिस पेन्सिल प्रत किंवा स्पष्ट फोटो",
  "Chassis print or engine number copy ready in case the counter asks": "काउंटरने मागितल्यास चेसिस प्रत किंवा इंजिन क्रमांकाची प्रत तयार ठेवा",
  "Current permit copy and previous permit or renewal paper if any": "सध्याच्या परमिटची प्रत आणि उपलब्ध असल्यास जुने परमिट / नूतनीकरण कागद",
  "Delivery note, temporary registration, or booking receipt as backup to the invoice": "इनव्हॉइससोबत बॅकअप म्हणून डिलिव्हरी नोट, तात्पुरती नोंदणी किंवा बुकिंग पावती",
  "Extra FIR, NCR, or police-diary acknowledgement copies": "अतिरिक्त FIR, NCR किंवा पोलिस नोंदीच्या acknowledgement प्रती",
  "Extra passport photos and a doctor-stamped Form 1A copy": "अतिरिक्त पासपोर्ट फोटो आणि डॉक्टरांनी सही केलेली फॉर्म 1A प्रत",
  "Extra signed Form 28 copies and address proof for the next-state process": "पुढील राज्य प्रक्रियेसाठी अतिरिक्त सही केलेल्या फॉर्म 28 प्रती आणि पत्त्याचा पुरावा",
  "Fresh passport photo and signature scan matching the portal size rules": "पोर्टलच्या आकार नियमांनुसार नवा पासपोर्ट फोटो आणि सही स्कॅन",
  "Front-and-back copy or clear photo of the old driving licence because some users report DigiLocker PDF alone gets held": "काही प्रकरणांत DigiLocker PDF पुरेसा नसल्याने जुन्या परवान्याची पुढील-मागील प्रत किंवा स्पष्ट फोटो ठेवा",
  "Green tax receipt or older-vehicle compliance receipt where applicable": "लागू असल्यास ग्रीन टॅक्स पावती किंवा जुन्या वाहनाच्या अनुपालनाची पावती",
  "Hard-copy set of RC, insurance, permit, tax, and PUC papers": "RC, विमा, परमिट, कर आणि PUC कागदपत्रांचा हार्ड-कॉपी संच",
  "Hard-copy set of insurance, fitness, tax, PUC, and challan-clearance papers": "विमा, फिटनेस, कर, PUC आणि चलन-क्लिअरन्स कागदपत्रांचा हार्ड-कॉपी संच",
  "Insurance, RC, and permit or fitness copies if the taxable category is disputed": "कर श्रेणीवर वाद असल्यास विमा, RC आणि परमिट / फिटनेसच्या प्रती",
  "Loan-closure letter or bank covering letter": "कर्जबंद पत्र किंवा बँकेचे कव्हरिंग लेटर",
  "Old RC photo, mParivahan screenshot, or insurance copy to recover record details": "रेकॉर्ड तपशील शोधण्यासाठी जुना RC फोटो, mParivahan स्क्रीनशॉट किंवा विम्याची प्रत",
  "Old address-linked ID or previous RC copy if spelling or format differs": "स्पेलिंग किंवा स्वरूप वेगळे असल्यास जुन्या पत्त्याशी जोडलेले ओळखपत्र किंवा मागील RC प्रत",
  "Old application number or prior learner acknowledgement if the portal flags multiple learner records": "पोर्टलवर अनेक learner records दिसल्यास जुना अर्ज क्रमांक किंवा पूर्वीचे acknowledgement",
  "Old driving licence front-and-back photocopy": "जुन्या वाहनचालक परवान्याची पुढील-मागील झेरॉक्स प्रत",
  "Original PAN and address proof even if the dealer has already uploaded copies": "डिलरने प्रत अपलोड केली असली तरी मूळ PAN आणि पत्त्याचा पुरावा",
  "Original RC plus a photocopy set": "मूळ RC आणि त्याच्या छायाप्रतींचा संच",
  "Original RC plus hard copies of insurance, PUC, and tax receipts": "मूळ RC आणि विमा, PUC व कर पावत्यांच्या हार्ड-कॉपी प्रती",
  "Original RC plus spare xeroxes of insurance and PUC": "मूळ RC आणि विमा व PUC च्या अतिरिक्त झेरॉक्स प्रती",
  "Original RC plus xeroxes of insurance, PUC, and ID proof": "मूळ RC आणि विमा, PUC व ओळख पुराव्याच्या झेरॉक्स प्रती",
  "Original RC plus xeroxes of insurance, PUC, and new address proof": "मूळ RC आणि विमा, PUC व नवीन पत्ता पुराव्याच्या झेरॉक्स प्रती",
  "Original RC, insurance, and PUC of the vehicle used for the test": "चाचणीसाठी वापरल्या जाणाऱ्या वाहनाचे मूळ RC, विमा आणि PUC",
  "Original address proof plus one self-attested photocopy set": "मूळ पत्ता पुरावा आणि एक स्व-प्रमाणित छायाप्रती संच",
  "Original age and address proofs plus one self-attested photocopy set": "मूळ वय व पत्ता पुरावा आणि एक स्व-प्रमाणित छायाप्रती संच",
  "Original bank NOC or due-clearance letter and both signed copies of Form 35": "बँकेचे मूळ NOC किंवा ड्यू-क्लिअरन्स पत्र आणि फॉर्म 35 च्या दोन्ही सही केलेल्या प्रती",
  "Original learner's licence plus one photocopy": "मूळ शिकाऊ परवाना आणि एक छायाप्रत",
  "Original new address proof plus one self-attested copy set": "मूळ नवीन पत्ता पुरावा आणि एक स्व-प्रमाणित प्रत संच",
  "Original passport and physical driving licence for counter verification": "काउंटर पडताळणीसाठी मूळ पासपोर्ट आणि भौतिक वाहनचालक परवाना",
  "Owner ID if someone else takes the vehicle for testing": "दुसरा कोणी वाहन चाचणीसाठी नेत असल्यास मालकाचा ओळख पुरावा",
  "Owner or driver ID proof and authorization letter if a representative attends": "प्रतिनिधी उपस्थित असल्यास मालक किंवा चालकाचा ओळख पुरावा आणि अधिकृतता पत्र",
  "Previous PUC copy or photo to avoid number-entry mistakes": "क्रमांक चुकू नयेत म्हणून मागील PUC ची प्रत किंवा फोटो",
  "Previous tax receipt, challan, or DD copy as backup": "बॅकअप म्हणून जुनी कर पावती, चलन किंवा DD ची प्रत",
  "Printed acknowledgement or payment receipt": "प्रिंटेड acknowledgement किंवा पेमेंट पावती",
  "Printed and digital PUC copy because downstream RTO counters often ask for a hard copy": "पुढील RTO काउंटरवर हार्ड कॉपी मागितली जाते म्हणून PUC ची प्रिंटेड व डिजिटल प्रत ठेवा",
  "Printed application or learner-test appointment receipt": "प्रिंटेड अर्ज किंवा learner test अपॉइंटमेंट पावती",
  "Printed application receipt and an extra signed copy of Form 34": "प्रिंटेड अर्ज पावती आणि फॉर्म 34 ची एक अतिरिक्त सही केलेली प्रत",
  "Printed application receipt and extra passport photos": "प्रिंटेड अर्ज पावती आणि अतिरिक्त पासपोर्ट फोटो",
  "Printed application receipt because some users report extra speed-post or hard-copy submission steps": "काही प्रकरणांत अतिरिक्त speed post किंवा हार्ड-कॉपी सबमिशन लागू होत असल्याने प्रिंटेड अर्ज पावती ठेवा",
  "Printed appointment or acknowledgement and fee receipt": "प्रिंटेड अपॉइंटमेंट किंवा acknowledgement आणि फी पावती",
  "Printed appointment slip and payment receipt": "प्रिंटेड अपॉइंटमेंट स्लिप आणि पेमेंट पावती",
  "Printed driving-test appointment slip and fee receipt": "प्रिंटेड ड्रायव्हिंग टेस्ट अपॉइंटमेंट स्लिप आणि फी पावती",
  "Printed fee receipt, acknowledgement, and extra copies of the signed forms": "प्रिंटेड फी पावती, acknowledgement आणि सही केलेल्या फॉर्मच्या अतिरिक्त प्रती",
  "Printed payment receipt after online payment": "ऑनलाइन पेमेंटनंतर प्रिंटेड पेमेंट पावती",
  "RC or insurance copy if the PUC center needs vehicle details": "PUC केंद्राला वाहन तपशील लागल्यास RC किंवा विम्याची प्रत",
  "Registered rent agreement plus landlord NOC or utility bill where address proof is rental-based": "भाडेकरार-आधारित पत्ता पुरावा असल्यास नोंदणीकृत भाडेकरार, मालकाचे NOC किंवा युटिलिटी बिल",
  "Registered rent agreement, landlord NOC, or utility bill for rental addresses": "भाड्याच्या पत्त्यासाठी नोंदणीकृत भाडेकरार, मालकाचे NOC किंवा युटिलिटी बिल",
  "Registered rent agreement, landlord NOC, or utility bill where rent-based proof is questioned": "भाडे-आधारित पत्ता पुराव्यावर शंका असल्यास नोंदणीकृत भाडेकरार, मालकाचे NOC किंवा युटिलिटी बिल",
  "Route authorization, contract carriage list, or passenger endorsement papers as per permit type": "परमिट प्रकारानुसार मार्ग अधिकृतता, कॉन्ट्रॅक्ट कॅरेज सूची किंवा प्रवासी अनुमोदन कागदपत्रे",
  "Self-attested ID and address proof copies": "स्व-प्रमाणित ओळख आणि पत्ता पुराव्यांच्या प्रती",
  "Self-attested ID and address proof copies with the payment receipt": "पेमेंट पावतीसोबत स्व-प्रमाणित ओळख आणि पत्ता पुराव्यांच्या प्रती",
  "Self-attested copies of RC, insurance, PUC, and PAN or Aadhaar": "RC, विमा, PUC आणि PAN किंवा Aadhaar यांच्या स्व-प्रमाणित प्रती",
  "Self-attested copies of passport, visa, air ticket, and Indian driving licence": "पासपोर्ट, व्हिसा, विमानतिकीट आणि भारतीय वाहनचालक परवान्याच्या स्व-प्रमाणित प्रती",
  "Seller and buyer ID proof copies with self-attestation": "विक्रेता आणि खरेदीदाराच्या ओळख पुराव्यांच्या स्व-प्रमाणित प्रती",
  "Seller authorization or delivery note if one party is not visiting in person": "एखादा पक्ष प्रत्यक्ष येत नसेल तर विक्रेत्याचे अधिकृतता पत्र किंवा डिलिव्हरी नोट",
  "Spare copies of FIR, NCR, or police acknowledgement": "FIR, NCR किंवा पोलिस acknowledgement च्या अतिरिक्त प्रती",
  "Spare copies of invoice, insurance, and tax receipt for dealer or RTO counters": "डिलर किंवा RTO काउंटरसाठी invoice, विमा आणि कर पावतीच्या अतिरिक्त प्रती",
  "Spare photocopies because inspection counters may still ask for paper sets": "तपासणी काउंटरवर अजूनही कागदी संच मागितले जाऊ शकतात म्हणून अतिरिक्त छायाप्रती ठेवा",
  "Tax receipt and challan-clearance print if the office checks pending dues": "प्रलंबित देय तपासले गेल्यास कर पावती आणि चलन-क्लिअरन्सची प्रिंट",
  "Travel itinerary printout if ticket or visa details are awkward to show on phone": "तिकीट किंवा व्हिसा तपशील फोनवर दाखवणे अवघड असल्यास प्रवास आराखड्याची प्रिंट"
};

const marathiSourceLabelByEnglish = {
  "Form 25 - RC Renewal Form": "फॉर्म 25 - RC नूतनीकरण फॉर्म",
  "Maharashtra Services Status PDF": "महाराष्ट्र सेवा स्थिती PDF",
  "Maharashtra Transport": "महाराष्ट्र परिवहन",
  "Maharashtra Transport - DL Renewal": "महाराष्ट्र परिवहन - DL नूतनीकरण",
  "Maharashtra Transport - Duplicate DL": "महाराष्ट्र परिवहन - डुप्लिकेट DL",
  "Maharashtra Transport - Faceless Services": "महाराष्ट्र परिवहन - फेसलेस सेवा",
  "Maharashtra Transport - International Driving Permit": "महाराष्ट्र परिवहन - आंतरराष्ट्रीय वाहनचालक परवाना",
  "Maharashtra Transport - Learning Licence": "महाराष्ट्र परिवहन - शिकाऊ परवाना",
  "Maharashtra Transport - New Vehicle Registration": "महाराष्ट्र परिवहन - नवीन वाहन नोंदणी",
  "Maharashtra Transport - No Objection Certificate": "महाराष्ट्र परिवहन - ना हरकत प्रमाणपत्र",
  "Maharashtra Transport - Permanent Licence": "महाराष्ट्र परिवहन - कायम परवाना",
  "Maharashtra Transport - Permit Fees": "महाराष्ट्र परिवहन - परमिट शुल्क",
  "Maharashtra Transport - Rate of Vehicle Tax": "महाराष्ट्र परिवहन - वाहन कर दर",
  "Maharashtra Transport - Registration Fees": "महाराष्ट्र परिवहन - नोंदणी शुल्क",
  "Maharashtra Transport - Tax Calculation": "महाराष्ट्र परिवहन - कर गणना",
  "Maharashtra Transport - Transfer Of Ownership": "महाराष्ट्र परिवहन - मालकी हस्तांतरण",
  "Parivahan - Address Change": "परिवहन - पत्ता बदल",
  "Parivahan - Duplicate RC": "परिवहन - डुप्लिकेट RC",
  "Parivahan - Fitness Certificate Step By Step PDF": "परिवहन - फिटनेस प्रमाणपत्र टप्प्याटप्प्याने PDF",
  "Parivahan - Form 45 (Permit Form Example)": "परिवहन - फॉर्म 45 (परमिट फॉर्म उदाहरण)",
  "Parivahan - HP Endorsement": "परिवहन - तारण नोंद",
  "Parivahan - HP Termination": "परिवहन - तारण समाप्ती",
  "Parivahan - Licensing Related Fees and Charges": "परिवहन - परवाना संबंधित शुल्क आणि आकार",
  "Parivahan - NOC": "परिवहन - NOC",
  "Parivahan - Ownership Transfer": "परिवहन - मालकी हस्तांतरण",
  Sarathi: "सारथी",
  Vahan: "वाहन"
};

const marathiFormTitleByEnglish = {
  "Application-cum-declaration as to physical fitness": "शारीरिक तंदुरुस्तीबाबत अर्ज व स्वघोषणा",
  "Medical Certificate": "वैद्यकीय प्रमाणपत्र",
  "Application for learner's licence / driving licence / renewal / change of address": "शिकाऊ परवाना / वाहनचालक परवाना / नूतनीकरण / पत्ता बदल यासाठी अर्ज",
  "Application for Licence to Drive": "वाहन चालवण्याच्या परवान्यासाठी अर्ज",
  "Application for International Driving Permit": "आंतरराष्ट्रीय वाहनचालक परवान्यासाठी अर्ज",
  "Driving Certificate issued by Driving School or Establishment": "ड्रायव्हिंग स्कूल किंवा संस्थेकडून दिलेले ड्रायव्हिंग प्रमाणपत्र",
  "Application for Renewal of Driving Licence": "वाहनचालक परवाना नूतनीकरणासाठी अर्ज",
  "Application for Registration of a Motor Vehicle": "मोटार वाहन नोंदणीसाठी अर्ज",
  "Application for Renewal of Certificate of Registration": "नोंदणी प्रमाणपत्र नूतनीकरणासाठी अर्ज",
  "Application for the Issue of Duplicate Certificate of Registration": "डुप्लिकेट नोंदणी प्रमाणपत्रासाठी अर्ज",
  "Application and Grant of No Objection Certificate": "ना हरकत प्रमाणपत्रासाठी अर्ज आणि मंजुरी",
  "Notice of Transfer of Ownership of a Motor Vehicle": "मोटार वाहन मालकी हस्तांतरणाची सूचना",
  "Application for Intimation and Transfer of Ownership": "मालकी बदल कळविणे आणि हस्तांतरणासाठी अर्ज",
  "Intimation of Change of Address in RC": "RC मधील पत्ता बदलाची सूचना",
  "Application for Making an Entry of Hire-Purchase / Lease / Hypothecation": "हायर-परचेस / लीज / तारण नोंद करण्यासाठी अर्ज",
  "Notice of Termination of Hire-Purchase / Lease / Hypothecation": "हायर-परचेस / लीज / तारण समाप्तीची सूचना",
  "Certificate of Fitness": "फिटनेस प्रमाणपत्र",
  "Report of Inspection": "तपासणी अहवाल",
  "Form 45": "फॉर्म 45",
  "Form 46": "फॉर्म 46",
  "Form 47": "फॉर्म 47",
  "Form 48": "फॉर्म 48",
  "Form 59 certificate format on the official system side": "अधिकृत प्रणालीतील फॉर्म 59 प्रमाणपत्र नमुना",
  LLD: "LLD"
};

const marathiFormUsedForByEnglish = {
  "Learner's licence and other licence-side workflows where self-declaration is applicable.": "स्वघोषणा लागू असलेल्या शिकाऊ परवाना आणि इतर परवाना प्रक्रियांमध्ये वापरले जाते.",
  "Driving licence renewal, IDP, and other cases needing medical certification.": "वाहनचालक परवाना नूतनीकरण, IDP आणि वैद्यकीय प्रमाणपत्र लागणाऱ्या इतर प्रकरणांसाठी.",
  "Learner's licence and DL-side application flows.": "शिकाऊ परवाना आणि DL संबंधित अर्ज प्रक्रियांसाठी.",
  "Permanent driving licence and related DL issue flows.": "कायम वाहनचालक परवाना आणि संबंधित DL जारी प्रक्रियांसाठी.",
  "International Driving Permit applications.": "आंतरराष्ट्रीय वाहनचालक परवाना अर्जांसाठी.",
  "Transport-category driving licence cases where training certification is required.": "प्रशिक्षण प्रमाणपत्र आवश्यक असलेल्या परिवहन वर्ग वाहनचालक परवाना प्रकरणांसाठी.",
  "Driving licence renewal.": "वाहनचालक परवाना नूतनीकरणासाठी.",
  "New vehicle registration.": "नवीन वाहन नोंदणीसाठी.",
  "RC renewal.": "RC नूतनीकरणासाठी.",
  "Duplicate RC.": "डुप्लिकेट RC साठी.",
  "NOC for moving or transferring a vehicle across jurisdiction.": "वाहन दुसऱ्या क्षेत्रात हलवणे किंवा हस्तांतरित करण्यासाठी NOC साठी.",
  "Transfer of vehicle ownership.": "वाहन मालकी हस्तांतरणासाठी.",
  "Transfer of ownership after sale.": "विक्रीनंतर मालकी हस्तांतरणासाठी.",
  "Address change in registration certificate.": "नोंदणी प्रमाणपत्रातील पत्ता बदलासाठी.",
  "Hypothecation or finance entry in RC.": "RC मधील तारण किंवा फायनान्स नोंदीसाठी.",
  "Hypothecation removal after loan closure.": "कर्जफेडीनंतर तारण काढण्यासाठी.",
  "Fitness certificate cases, mainly for transport vehicles.": "मुख्यतः परिवहन वाहनांच्या फिटनेस प्रमाणपत्र प्रकरणांसाठी.",
  "Inspection report linked to transport vehicle fitness workflows.": "परिवहन वाहन फिटनेस प्रक्रियेशी संबंधित तपासणी अहवालासाठी."
};

const marathiFormLookupHintByEnglish = {
  "Open the official driving-licence forms page and look for Form 1 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर फॉर्म 1 शोधा.",
  "Open the official driving-licence forms page and look for Form 1A if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर फॉर्म 1A शोधा.",
  "Open the official driving-licence forms page and look for Form 2 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर फॉर्म 2 शोधा.",
  "Open the official driving-licence forms page and look for Form 4 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर फॉर्म 4 शोधा.",
  "Open the official driving-licence forms page and look for Form 4A if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर फॉर्म 4A शोधा.",
  "Open the official licence guidance page and look for Form 5 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत परवाना मार्गदर्शन पानावर फॉर्म 5 शोधा.",
  "Open the official driving-licence forms page and search for Form 9 on Parivahan.": "अधिकृत ड्रायव्हिंग-लायसन्स फॉर्म पानावर परिवहनमध्ये फॉर्म 9 शोधा.",
  "Open the official vehicle-registration forms page and look for Form 20 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत वाहन-नोंदणी फॉर्म पानावर फॉर्म 20 शोधा.",
  "Open the official vehicle-registration forms page and look for Form 25 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत वाहन-नोंदणी फॉर्म पानावर फॉर्म 25 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 26 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 26 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 28 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 28 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 29 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 29 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 30 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 30 शोधा.",
  "Open the official vehicle-registration forms page and look for Form 33 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत वाहन-नोंदणी फॉर्म पानावर फॉर्म 33 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 34 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 34 शोधा.",
  "Open the official vehicle-registration forms page and look for Form 35 if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत वाहन-नोंदणी फॉर्म पानावर फॉर्म 35 शोधा.",
  "Open the official vehicle-registration forms page and search for Form 38 on Parivahan.": "अधिकृत वाहन-नोंदणी फॉर्म पानावर परिवहनमध्ये फॉर्म 38 शोधा.",
  "Open the official vehicle-registration forms page and look for Form 38A if the PDF does not open directly.": "PDF थेट उघडला नाही तर अधिकृत वाहन-नोंदणी फॉर्म पानावर फॉर्म 38A शोधा."
};

function translateGeneratedLineMr(text) {
  if (!text) {
    return text;
  }

  if (marathiGeneratedTextByEnglish[text]) {
    return marathiGeneratedTextByEnglish[text];
  }

  if (/^Form \d+[A-Z]?$/.test(text)) {
    return text.replace(/^Form /, "फॉर्म ");
  }

  return text;
}

function translateGeneratedListMr(items) {
  return (items || []).map((item) => translateGeneratedLineMr(item));
}

function translateSourceRefsMr(items) {
  return (items || []).map((item) => ({
    ...item,
    label: marathiSourceLabelByEnglish[item.label] || item.label
  }));
}

function translateFormLabelMr(label) {
  if (!label) {
    return label;
  }

  if (/^Form /.test(label)) {
    return label.replace(/^Form /, "फॉर्म ");
  }

  return translateGeneratedLineMr(label);
}

function translateOfficialFormsMr(items) {
  return (items || []).map((form) => ({
    ...form,
    label: translateFormLabelMr(form.label),
    title: marathiFormTitleByEnglish[form.title] || form.title
  }));
}

function translateMainFormsSummaryMr(summary) {
  if (!summary) {
    return summary;
  }

  if (summary === "Mostly portal-driven") {
    return "मुख्यतः पोर्टल-आधारित";
  }

  return summary.replaceAll("Form ", "फॉर्म ").replaceAll(" and ", " आणि ").replace(/, and (\d+) more$/, ", आणि आणखी $1");
}

function translateMainFormsCountLabelMr(label) {
  if (!label) {
    return label;
  }

  if (label === "Portal-driven") {
    return "पोर्टल-आधारित";
  }

  if (label === "1 main form") {
    return "1 मुख्य फॉर्म";
  }

  const match = label.match(/^(\d+) main forms$/);
  if (match) {
    return `${match[1]} मुख्य फॉर्म`;
  }

  return label;
}

function translateStatusTextMr(text) {
  const map = {
    "Faceless-enabled in supported Maharashtra cases": "महाराष्ट्रातील समर्थित प्रकरणांमध्ये फेसलेस-सक्षम",
    "Online application plus RTO test": "ऑनलाइन अर्ज आणि RTO चाचणी",
    "Faceless-enabled with exception handling": "अपवादात्मक पडताळणीसह फेसलेस-सक्षम",
    "Online-first, verification may still happen": "ऑनलाइन-प्राधान्य, तरीही पडताळणी लागू होऊ शकते",
    "Faceless-enabled in Maharashtra": "महाराष्ट्रात फेसलेस-सक्षम",
    "Apply online, verify in person": "ऑनलाइन अर्ज, प्रत्यक्ष पडताळणी",
    "Dealer-assisted or Vahan-linked registration flow": "डिलर-सहाय्यित किंवा Vahan-आधारित नोंदणी प्रक्रिया",
    "Online Vahan flow with document verification": "कागदपत्र पडताळणीसह ऑनलाइन Vahan प्रक्रिया",
    "Vahan service with clearance checks": "क्लिअरन्स तपासणीसह Vahan सेवा",
    "Vahan service with possible appointment": "संभाव्य अपॉइंटमेंटसह Vahan सेवा",
    "Online-first with supporting records": "पूरक रेकॉर्डसह ऑनलाइन-प्राधान्य",
    "Vahan faceless-style flow with document upload": "कागदपत्र अपलोडसह Vahan फेसलेस-शैली प्रक्रिया",
    "Vahan record update service": "Vahan रेकॉर्ड अपडेट सेवा",
    "Vahan service with bank clearance dependency": "बँक क्लिअरन्सवर अवलंबून असलेली Vahan सेवा",
    "Vahan workflow plus inspection appointment": "Vahan प्रक्रिया आणि तपासणी अपॉइंटमेंट",
    "Permit portal with scrutiny-heavy workflows": "छाननी-आधारित परमिट पोर्टल प्रक्रिया",
    "Online calculation and payment": "ऑनलाइन गणना आणि पेमेंट",
    "Compliance support item": "अनुपालन-संबंधित मदत घटक",
    "Usually not required first": "सुरुवातीला सहसा आवश्यक नाही",
    Required: "आवश्यक",
    Sometimes: "कधी कधी",
    "Usually no": "साधारणपणे नाही",
    "Possible in exception cases": "अपवादात्मक प्रकरणांत शक्य",
    "Possible for record mismatch": "रेकॉर्ड विसंगती असल्यास शक्य",
    "Yes or office scheduling as required": "होय किंवा कार्यालयीन वेळापत्रकानुसार",
    "Depends on case": "प्रकरणावर अवलंबून",
    Often: "बहुतेक वेळा",
    Possible: "शक्य",
    "Varies by permit type": "परमिट प्रकारानुसार बदलते",
    No: "नाही",
    "No vehicle inspection": "वाहन तपासणी नाही",
    "No vehicle inspection, but driving test required": "वाहन तपासणी नाही, परंतु ड्रायव्हिंग टेस्ट आवश्यक",
    "Vehicle inspection may be required": "वाहन तपासणी लागू होऊ शकते",
    "Usually yes directly or through dealer process": "साधारणपणे होय, थेट किंवा डिलर प्रक्रियेद्वारे",
    "Vehicle inspection required": "वाहन तपासणी आवश्यक",
    "Can be part of certain permit cases": "काही परमिट प्रकरणांत लागू होऊ शकते",
    "Emission testing happens at authorized PUC points, not usually at the RTO service step": "उत्सर्जन चाचणी अधिकृत PUC केंद्रावर होते; RTO प्रक्रियेच्या टप्प्यावर सहसा नाही"
  };

  return map[text] || text;
}

const marathiServiceById = {
  "learner-licence": {
    titleMr: "शिकाऊ परवाना",
    shortMr: "वाहनचालक चाचणीपूर्वीचा पहिला शिकण्याचा परवाना.",
    summaryMr: "महाराष्ट्रात पहिल्यांदा शिकाऊ परवाना काढत असाल तर येथे सुरू करा.",
    bestForMr: "सराव आणि चाचणीपूर्वी पहिल्यांदा शिकाऊ परवाना काढणाऱ्यांसाठी.",
    outcomeSummaryMr: "मंजूर शिकाऊ परवाना रेकॉर्ड किंवा डाउनलोड करता येणारा शिकाऊ परवाना.",
    recommendedActionMr: "वय, पत्ता आणि आवश्यक वैद्यकीय कागदपत्रे आधी तयार ठेवा.",
    commonConfusionMr: "ही अंतिम वाहनचालक परवाना सेवा नाही. हा शिकाऊ टप्पा आहे.",
    stepsMr: [
      "Sarathi उघडा आणि Maharashtra निवडा.",
      "शिकाऊ परवान्यासाठी अर्ज सुरू करा.",
      "अर्जदाराची माहिती आणि वाहनाचा वर्ग भरा.",
      "वय, पत्ता आणि वैद्यकीय कागदपत्रे आवश्यक असल्यास अपलोड करा.",
      "शिकाऊ परवाना फी आणि टेस्ट फी भरा.",
      "पोर्टलप्रमाणे शिकाऊ टेस्ट पूर्ण करा.",
      "मंजूर झालेला शिकाऊ परवाना डाउनलोड करा किंवा जतन करा."
    ],
    informationMr: createMarathiInformation(
      "शिकाऊ परवाना हा कायम वाहनचालक परवान्यापूर्वीचा पहिला अधिकृत टप्पा आहे.",
      [
        "पहिल्यांदाच वाहन चालवण्यासाठी अधिकृत परवानगी घ्यायची असल्यास ही सेवा लागते.",
        "सराव सुरू करण्यापूर्वी किंवा पुढे ड्रायव्हिंग टेस्ट द्यायची असल्यास हा टप्पा पूर्ण करावा लागतो.",
        "कायद्याने लागू असलेले वय आणि वाहन वर्ग यानुसार शिकाऊ परवाना घेतला जातो."
      ],
      "अनेक जण ही सेवा कायम परवान्याशी गोंधळतात. प्रत्यक्षात ही फक्त शिकण्याची आणि पुढील टेस्टसाठी तयारीची पायरी आहे."
    ),
    officialValidityMr: "शिकाऊ परवान्याची वैधता साधारण 6 महिने असते.",
    officialProcessingNoteMr: "प्रक्रिया प्रामुख्याने पोर्टलनुसार चालते. काही प्रकरणांत अतिरिक्त पडताळणी लागू शकते.",
    beforePayingNoteMr: "वर्ग, जन्मतारीख आणि कागदपत्रे योग्य भरली आहेत याची खात्री करून मग फी भरा.",
    officialTimingWindowsMr: ["नियमित वाहन वर्गांसाठी साधारण 18 वर्षे वय आवश्यक.", "कायद्याने परवानगी असलेल्या 50cc पर्यंत गिअरलेस वाहनांसाठी पालक संमतीसह साधारण 16 वर्षे वय आवश्यक.", "परिवहन वाहन वर्गांसाठी साधारण 20 वर्षे वय आवश्यक."],
    eligibilityMr: ["नियमित मोटार वाहन वर्गांसाठी साधारण 18 वर्षे किंवा अधिक वय.", "50cc पर्यंत पात्र गिअरलेस दुचाकीसाठी पालक संमतीसह साधारण 16 वर्षे किंवा अधिक वय.", "परिवहन वाहन वर्गांसाठी साधारण 20 वर्षे किंवा अधिक वय."],
    serviceLabelMr: "परवाना सेवा"
  },
  "permanent-driving-licence": {
    titleMr: "कायम वाहनचालक परवाना",
    shortMr: "वैध शिकाऊ परवान्यानंतरची वाहनचालक चाचणी-आधारित सेवा.",
    summaryMr: "शिकाऊ परवान्याचा प्रतीक्षा कालावधी पूर्ण झाला असेल आणि ड्रायव्हिंग टेस्टसाठी तयार असाल तर ही सेवा निवडा.",
    bestForMr: "ड्रायव्हिंग टेस्ट देण्यासाठी तयार असलेल्या शिकाऊ परवानाधारकांसाठी.",
    outcomeSummaryMr: "ड्रायव्हिंग टेस्ट मंजुरीनंतर कायम परवाना जारी होतो किंवा परवाना स्थिती अद्ययावत होते.",
    recommendedActionMr: "शिकाऊ परवान्याच्या प्रतीक्षा कालावधीनंतरच टेस्ट स्लॉट बुक करा.",
    commonConfusionMr: "ही शिकाऊ परवान्याची सेवा नाही. वैध शिकाऊ परवान्यानंतरची अंतिम टेस्ट-आधारित सेवा आहे.",
    stepsMr: [
      "Sarathi उघडा आणि कायम वाहनचालक परवान्याची सेवा निवडा.",
      "अर्जातील तपशील भरा किंवा तपासा.",
      "ड्रायव्हिंग टेस्टसाठी अपॉइंटमेंट बुक करा.",
      "ठरलेल्या दिवशी RTO कार्यालयात जा.",
      "कौशल्य / क्षमता चाचणी द्या.",
      "मंजुरीनंतर पोर्टलवर दिसणारी अंतिम फी किंवा प्रिंटिंग प्रक्रिया पूर्ण करा.",
      "अधिकृत पोर्टलवर जारी स्थिती आणि डिस्पॅच तपासा."
    ],
    informationMr: createMarathiInformation(
      "कायम वाहनचालक परवाना हा शिकाऊ टप्पा पूर्ण झाल्यानंतर आणि ड्रायव्हिंग टेस्ट उत्तीर्ण झाल्यानंतर दिला जाणारा अंतिम परवाना आहे.",
      [
        "तुमच्याकडे वैध शिकाऊ परवाना असल्यास आणि प्रतीक्षा कालावधी पूर्ण झाल्यास ही सेवा लागते.",
        "ड्रायव्हिंग टेस्ट देण्यासाठी तयार असाल तर हा पुढचा टप्पा असतो.",
        "अर्ज मंजूर झाल्यानंतर अंतिम परवाना रेकॉर्ड किंवा कार्ड जारी केले जाते."
      ],
      "ही पूर्णपणे ऑनलाइन सेवा नाही. ड्रायव्हिंग टेस्ट हा या प्रक्रियेतील मुख्य निर्णयबिंदू असतो."
    ),
    officialValidityMr: "चाचणी यशस्वी झाल्यानंतर आणि मंजुरीनंतर कायम परवाना जारी होतो.",
    officialProcessingNoteMr: "अधिकृतरीत्या ठराविक प्रक्रिया-वेळ दिलेली नाही. ड्रायव्हिंग टेस्टचा निकाल आणि मंजुरीनुसार प्रक्रिया पूर्ण होते.",
    beforePayingNoteMr: "योग्य सेवा, टेस्ट स्लॉट आणि शिकाऊ परवान्याचे तपशील तपासून मग फी भरा.",
    officialTimingWindowsMr: ["शिकाऊ परवाना जारी झाल्यानंतर 30 दिवसांनी ड्रायव्हिंग टेस्टसाठी अर्ज करता येतो."],
    eligibilityMr: ["वैध शिकाऊ परवाना आवश्यक आहे.", "महाराष्ट्राच्या माहितीनुसार शिकाऊ परवाना जारी झाल्यानंतर 30 दिवसांनी ड्रायव्हिंग टेस्टसाठी अर्ज करता येतो."],
    serviceLabelMr: "परवाना सेवा"
  },
  "dl-renewal": {
    titleMr: "वाहनचालक परवाना नूतनीकरण",
    shortMr: "मुदत संपण्यापूर्वी किंवा नंतर विद्यमान परवान्याचे नूतनीकरण.",
    summaryMr: "अधिकृत नियमांनुसार मुदत संपण्यापूर्वी किंवा नंतर विद्यमान वाहनचालक परवाना नूतनीकरण करा.",
    bestForMr: "ज्यांच्या परवान्याची मुदत जवळ आली आहे किंवा नुकतीच संपली आहे अशांसाठी.",
    outcomeSummaryMr: "नूतनीकरणाची मंजुरी मिळाल्यानंतर परवाना रेकॉर्ड अद्ययावत होते.",
    recommendedActionMr: "मुदत संपण्यापूर्वी नूतनीकरण सुरू केल्यास विलंब आणि अतिरिक्त गुंतागुंत कमी होते.",
    commonConfusionMr: "मुदत संपलेला परवाना आणि हरवलेला परवाना यासाठी वेगवेगळ्या सेवा आहेत.",
    stepsMr: [
      "Sarathi उघडा आणि Maharashtra निवडा.",
      "वाहनचालक परवाना नूतनीकरण सेवा निवडा.",
      "परवान्याचे तपशील भरा आणि आवश्यक कागदपत्रे अपलोड करा.",
      "नूतनीकरणाची फी ऑनलाइन भरा.",
      "पोर्टलवर दिसणारी पडताळणी प्रक्रिया पूर्ण करा.",
      "रेकॉर्ड विसंगती किंवा पडताळणीची गरज असल्यास कार्यालयात जा.",
      "मंजुरीनंतर acknowledgement किंवा अद्ययावत स्थिती तपासा."
    ],
    informationMr: createMarathiInformation(
      "परवान्याची मुदत संपण्यापूर्वी किंवा नियमांनुसार नंतर त्याचे नूतनीकरण करण्यासाठी ही सेवा वापरली जाते.",
      [
        "परवान्याची मुदत जवळ आली असेल तर ही सेवा लागते.",
        "मुदत नुकतीच संपली असेल तरी अधिकृत नियमांनुसार नूतनीकरण करता येऊ शकते.",
        "दुसऱ्या राज्यातील परवान्यांसाठी पडताळणीमुळे वेळ लागू शकतो."
      ],
      "हरवलेला किंवा खराब झालेला परवाना असेल तर डुप्लिकेट सेवेकडे जावे; नूतनीकरण सेवा वेगळी आहे."
    ),
    officialValidityMr: "नूतनीकरणानंतरची वैधता वाहन वर्ग आणि वयोगटाच्या नियमांवर अवलंबून असते.",
    officialProcessingNoteMr: "अधिकृतरीत्या निश्चित प्रक्रिया-वेळ दिलेली नाही. पडताळणी, रेकॉर्ड जुळणी आणि पोर्टल मंजुरीनुसार प्रक्रिया पूर्ण होते.",
    beforePayingNoteMr: "परवान्याचा क्रमांक, मुदत आणि वैद्यकीय कागदपत्रे योग्य आहेत याची खात्री करून मग फी भरा.",
    officialTimingWindowsMr: ["मुदत संपण्यापूर्वी 30 दिवसांपासून अर्ज करता येतो.", "सवलतीच्या कालावधीनंतर अर्ज केल्यास नूतनीकरण अर्जाच्या तारखेपासून लागू होते.", "महाराष्ट्रानुसार मुदत संपल्यानंतर पाच वर्षांनंतर नूतनीकरण मिळत नाही."],
    eligibilityMr: ["मुदत संपण्यापूर्वी 30 दिवसांपासून अर्ज करा.", "सवलतीच्या कालावधीनंतर अर्ज केल्यास नूतनीकरण अर्जाच्या तारखेपासून लागू होते.", "महाराष्ट्रानुसार मुदत संपल्यानंतर पाच वर्षांनंतर नूतनीकरण उपलब्ध नसते."],
    serviceLabelMr: "परवाना सेवा"
  },
  "duplicate-dl": {
    titleMr: "हरवलेल्या परवान्याची प्रत",
    shortMr: "हरवलेला, खराब झालेला किंवा अस्पष्ट परवाना पुन्हा मिळवा.",
    summaryMr: "विद्यमान परवाना रेकॉर्ड असल्यास हरवलेला, खराब झालेला किंवा वाचता न येणारा परवाना पुन्हा मिळवा.",
    bestForMr: "हरवलेला, फाटलेला, खराब झालेला किंवा अस्पष्ट परवाना असलेल्या प्रकरणांसाठी.",
    outcomeSummaryMr: "पडताळणीनंतर परवान्याची प्रत जारी होते किंवा रेकॉर्ड अद्ययावत होते.",
    recommendedActionMr: "हरवलेला परवाना असल्यास पोलिस नोंद तयार ठेवा.",
    commonConfusionMr: "ही नवीन परवान्यासाठीची सेवा नाही. विद्यमान परवान्याची प्रत मिळवण्यासाठी ही सेवा आहे.",
    stepsMr: [
      "Sarathi उघडा आणि डुप्लिकेट वाहनचालक परवान्याची सेवा निवडा.",
      "परवान्याचे तपशील आणि प्रत का हवी आहे हे नमूद करा.",
      "हरवलेला परवाना असल्यास पोलिस नोंद, किंवा खराब परवाना असल्यास जुना परवाना अपलोड करा.",
      "फी ऑनलाइन भरा.",
      "पोर्टलवरील पडताळणी प्रक्रिया पूर्ण करा आणि अर्ज ट्रॅक करा.",
      "मूळ पडताळणीसाठी बोलावल्यास कार्यालयात जा."
    ],
    informationMr: createMarathiInformation(
      "विद्यमान परवाना हरवला, खराब झाला किंवा वाचता येत नसल्यास त्याची अधिकृत प्रत मिळवण्यासाठी ही सेवा वापरतात.",
      [
        "परवान्याचा रेकॉर्ड आधीपासून अस्तित्वात असल्यास ही सेवा योग्य असते.",
        "हरवलेला, फाटलेला किंवा खराब झालेला परवाना बदलण्यासाठी ही प्रक्रिया केली जाते.",
        "पोलिस नोंद किंवा नुकसानाचा पुरावा काही प्रकरणांत आवश्यक होतो."
      ],
      "ही नवीन परवाना काढण्याची सेवा नाही. फक्त विद्यमान परवान्याची प्रत मिळवण्यासाठीच ती वापरावी."
    ),
    officialValidityMr: "प्रत जारी होण्याची वेळ पडताळणी आणि डिस्पॅचवर अवलंबून असते.",
    officialProcessingNoteMr: "अधिकृत ठराविक प्रक्रिया-वेळ प्रसिद्ध नाही. पोर्टल पडताळणी आणि रेकॉर्ड जुळणीनुसार प्रक्रिया होते.",
    beforePayingNoteMr: "हा परवाना हरवलेला/खराब झालेला आहे आणि नवीन परवाना नाही याची खात्री करून मग फी भरा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["वैध कायम परवान्याचा रेकॉर्ड आधीपासून अस्तित्वात असावा.", "नुकसान किंवा हरवलेला परवाना असल्यासच ही सेवा वापरा; नवीन परवान्यासाठी नाही."],
    serviceLabelMr: "परवाना सेवा"
  },
  "dl-address-change": {
    titleMr: "परवान्यावरचा पत्ता बदल",
    shortMr: "विद्यमान DL शी जोडलेला पत्ता अद्ययावत करा.",
    summaryMr: "घर बदलल्यानंतर विद्यमान वाहनचालक परवान्यावरचा पत्ता अद्ययावत करा.",
    bestForMr: "वैध नवीन पत्ता पुरावा असलेल्या विद्यमान DL धारकांसाठी.",
    outcomeSummaryMr: "मंजुरीनंतर परवान्यावरील पत्ता रेकॉर्ड अद्ययावत होतो.",
    recommendedActionMr: "नवीन पत्ता पुरावा परवान्यावर जसा दाखवायचा आहे तसाच असावा.",
    commonConfusionMr: "DL आणि RC पत्ता बदल या दोन वेगळ्या सेवा आहेत; गरजेनुसार दोन्ही वेगळे पूर्ण करावे लागू शकतात.",
    stepsMr: [
      "Sarathi उघडा आणि Services on Driving Licence निवडा.",
      "DL क्रमांक आणि जन्मतारीख भरा.",
      "पत्ता बदल हा पर्याय निवडा.",
      "नवीन पत्ता पुरावा आणि आवश्यक असल्यास ओळखपत्र अपलोड करा.",
      "फी भरून अर्ज सबमिट करा.",
      "पोर्टलवरून मंजुरीची स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "विद्यमान वाहनचालक परवान्यावरचा पत्ता बदलण्यासाठी ही सेवा वापरली जाते.",
      [
        "घर बदलले असल्यास DL वरील पत्ता अद्ययावत करण्यासाठी ही सेवा लागते.",
        "नवीन पत्त्याचा वैध पुरावा असल्यासच ही प्रक्रिया करावी.",
        "रेकॉर्ड जुळणी न झाल्यास अतिरिक्त पडताळणी लागू होऊ शकते."
      ],
      "DL पत्ता बदल आणि RC पत्ता बदल या वेगळ्या प्रक्रिया आहेत. वाहन रेकॉर्डमध्ये पत्ता बदलायचा असल्यास RC सेवा वेगळी करावी लागते."
    ),
    officialValidityMr: "अद्ययावत रेकॉर्ड मंजुरीनंतर लागू होते.",
    officialProcessingNoteMr: "प्रक्रिया बहुतेक वेळा पोर्टलवर पूर्ण होते; काही प्रकरणांत रेकॉर्ड विसंगतीमुळे पडताळणी लागू शकते.",
    beforePayingNoteMr: "नवीन पत्ता आणि पुरावा यातील तपशील तंतोतंत जुळतात याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["विद्यमान DL आवश्यक आहे.", "नवीन पत्त्याचा पुरावा आवश्यक आहे."],
    serviceLabelMr: "परवाना सेवा"
  },
  "international-driving-permit": {
    titleMr: "आंतरराष्ट्रीय वाहनचालक परवाना",
    shortMr: "परदेशात वाहन चालवण्यासाठी भारतीय परवानाधारकांसाठीची सेवा.",
    summaryMr: "वैध भारतीय वाहनचालक परवाना असल्यास आणि परदेशात वाहन चालवायचे असल्यास आंतरराष्ट्रीय वाहनचालक परवान्यासाठी अर्ज करा.",
    bestForMr: "भारतीय परवान्यासोबत IDP आवश्यक असलेल्या प्रवाशांसाठी.",
    outcomeSummaryMr: "पडताळणीनंतर IDP जारी होते.",
    recommendedActionMr: "प्रवासाची कागदपत्रे आणि मूळ भारतीय परवाना आधी तयार ठेवा.",
    commonConfusionMr: "ही देशांतर्गत परवाना नूतनीकरणाची सेवा नाही. हा वेगळा आंतरराष्ट्रीय परवाना आहे.",
    stepsMr: [
      "Sarathi किंवा राज्य मार्गदर्शन पानातून IDP सेवा उघडा.",
      "IDP अर्जातील तपशील भरा.",
      "प्रवासाशी संबंधित आणि ओळख कागदपत्रे अपलोड करा किंवा तयार ठेवा.",
      "फी भरा.",
      "क्षेत्राधिकारातील परवाना प्राधिकरण किंवा RTO येथे पडताळणीसाठी जा.",
      "अधिकृत प्रणालीवरून जारी स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "आंतरराष्ट्रीय वाहनचालक परवाना हा वैध भारतीय परवान्याबरोबर परदेशात वाहन चालवण्यासाठी लागणारा अतिरिक्त परवाना आहे.",
      [
        "परदेशात वाहन चालवायचे असल्यास आणि वैध भारतीय परवाना असल्यास ही सेवा लागते.",
        "प्रवास, पासपोर्ट आणि व्हिसाशी संबंधित तपशील पडताळावे लागतात.",
        "अंतिम मंजुरीसाठी कार्यालयीन पडताळणी लागू होऊ शकते."
      ],
      "हा भारतीय परवान्याचा पर्याय नाही आणि देशांतर्गत नूतनीकरणाची सेवा देखील नाही. हा स्वतंत्र आंतरराष्ट्रीय उपयोगासाठी असणारा परवाना आहे."
    ),
    officialValidityMr: "साधारणपणे 1 वर्षासाठी वैध असतो.",
    officialProcessingNoteMr: "ऑनलाइन अर्जानंतर प्राधिकरणाकडे पडताळणी आवश्यक असू शकते. अंतिम जारी करणे अधिकृत मंजुरीवर अवलंबून असते.",
    beforePayingNoteMr: "पासपोर्ट, व्हिसा आणि भारतीय परवान्याचे तपशील योग्य भरले आहेत याची खात्री करून मग फी भरा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["अर्जदाराकडे वैध भारतीय वाहनचालक परवाना असणे आवश्यक आहे.", "अर्जदार भारतीय रहिवासी असावा."],
    serviceLabelMr: "परवाना सेवा"
  },
  "new-vehicle-registration": {
    titleMr: "नवीन वाहन नोंदणी",
    shortMr: "नवीन वाहनाची नोंदणी करून RC मिळवा.",
    summaryMr: "नवीन विकत घेतलेल्या वाहनाची नोंदणी पूर्ण करा आणि RC, कर, विमा आणि फायनान्सशी संबंधित प्रक्रिया पूर्ण करा.",
    bestForMr: "नुकतेच नवीन वाहन विकत घेतलेल्या मालकांसाठी.",
    outcomeSummaryMr: "नोंदणी क्रमांक आणि RC रेकॉर्ड तयार होतो.",
    recommendedActionMr: "डिलर कोणती कागदपत्रे सबमिट करणार आहे आणि तुम्ही कोणती मूळ कागदपत्रे ठेवायची आहेत ते आधी ठरवा.",
    commonConfusionMr: "नोंदणी फी आणि मोटार कर या वेगळ्या रकमा असतात.",
    stepsMr: [
      "खरेदी, निर्माता, विमा आणि कराशी संबंधित कागदपत्रे गोळा करा.",
      "लागू असल्यास dealer-point किंवा Vahan-आधारित नोंदणी प्रक्रिया सुरू करा.",
      "वाहन आणि मालकाची माहिती भरा.",
      "कर आणि नोंदणी पेमेंट पूर्ण करा.",
      "आवश्यक असल्यास वाहन तपासणीसाठी सादर करा.",
      "नोंदणी क्रमांक आणि RC तयार होण्याची स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "नवीन वाहन विकत घेतल्यानंतर त्याची अधिकृत नोंदणी करून RC तयार करण्यासाठी ही सेवा वापरली जाते.",
      [
        "नवीन वाहन खरेदी पूर्ण झाल्यानंतर ही प्रक्रिया सुरू होते.",
        "डिलर, निर्माता, विमा, कर आणि फायनान्सची कागदपत्रे लागतात.",
        "काही प्रकरणांत वाहन तपासणी किंवा डिलर-मार्फत प्रक्रिया असू शकते."
      ],
      "नोंदणी फी, स्मार्ट कार्ड शुल्क आणि मोटार कर या वेगवेगळ्या गोष्टी आहेत. पोर्टलवर दिसणारी अंतिम रक्कम तपासणे महत्त्वाचे आहे."
    ),
    officialValidityMr: "पडताळणी, तपासणी आणि फी पुष्टीनंतर RC प्रक्रिया पूर्ण होते.",
    officialProcessingNoteMr: "अधिकृत निश्चित वेळ दिलेली नाही. डिलर प्रक्रिया, तपासणी आणि पोर्टल मंजुरीवर कालावधी अवलंबून असतो.",
    beforePayingNoteMr: "वाहन, मालक, फायनान्स आणि कर तपशील अचूक आहेत याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["वाहन खरेदी पूर्ण झालेली असावी.", "निर्माता, डिलर, विमा आणि कराशी संबंधित आवश्यक कागदपत्रे तयार असावीत."],
    serviceLabelMr: "वाहन सेवा"
  },
  "transfer-ownership": {
    titleMr: "मालकी हस्तांतरण",
    shortMr: "विक्रीनंतर वाहनाच्या नोंदणीकृत मालकाचे नाव बदला.",
    summaryMr: "वाहन विक्रीनंतर किंवा मालक बदलल्यानंतर वाहन रेकॉर्ड नवीन मालकाच्या नावावर करा.",
    bestForMr: "RC मध्ये नवीन मालकाचे नाव दाखवायचे असलेल्या विक्रेता आणि खरेदीदार प्रकरणांसाठी.",
    outcomeSummaryMr: "पडताळणीनंतर RC रेकॉर्डमध्ये नवीन मालकाचे नाव अद्ययावत होते.",
    recommendedActionMr: "वाहन विक्री त्याच क्षेत्रात आहे की इतर क्षेत्रात, हे आधी निश्चित करा.",
    commonConfusionMr: "मालकी हस्तांतरण, NOC आणि पुनर्नियोजन या वेगळ्या सेवा आहेत.",
    stepsMr: [
      "Vahan मध्ये मालकी हस्तांतरण सेवा उघडा.",
      "वाहन नोंदणी आणि मालकाची माहिती भरा.",
      "हस्तांतरण फॉर्म आणि संबंधित कागदपत्रे अपलोड करा.",
      "हस्तांतरण फी आणि प्रलंबित देयके भरा.",
      "कार्यालयाने बोलावल्यास पडताळणी पूर्ण करा.",
      "अधिकृत पोर्टलवर नवीन मालकाच्या नावाची नोंद ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "वाहन विक्रीनंतर किंवा मालकी बदलल्यानंतर RC वरील मालकाचे नाव बदलण्यासाठी ही सेवा केली जाते.",
      [
        "विक्रेता आणि खरेदीदार दोघांनाही ही प्रक्रिया लागू असते.",
        "वाहन त्याच क्षेत्रात राहत असल्यास हस्तांतरण प्रक्रिया सरळ असते.",
        "दुसऱ्या क्षेत्राचा प्रश्न असल्यास NOC किंवा इतर पुनर्नियोजन प्रक्रिया लागू होऊ शकते."
      ],
      "हस्तांतरण आणि NOC यामध्ये लोक गोंधळतात. वाहन दुसऱ्या क्षेत्रात किंवा राज्यात हलवायचे असल्यास NOC आधी आवश्यक असू शकते."
    ),
    officialValidityMr: "पडताळणी आणि रेकॉर्ड अद्ययावत झाल्यानंतर प्रक्रिया पूर्ण होते.",
    officialProcessingNoteMr: "अधिकृत निश्चित प्रक्रिया-वेळ उपलब्ध नाही. रेकॉर्ड, देयके आणि पडताळणीवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "योग्य सेवा निवडली आहे आणि दुसऱ्या क्षेत्राचा प्रश्न असल्यास आवश्यक NOC तपासले आहे याची खात्री करा.",
    officialTimingWindowsMr: ["महाराष्ट्रानुसार त्याच क्षेत्राधिकारात 14 दिवसांच्या आत प्रक्रिया करावी.", "दुसरे नोंदणी प्राधिकरण किंवा राज्य लागू असल्यास NOC किंवा संबंधित पुनर्नियोजन प्रक्रिया आधी तपासा."],
    eligibilityMr: ["महाराष्ट्रानुसार त्याच क्षेत्राधिकारात 14 दिवसांचा कालावधी दिलेला आहे.", "दुसरे नोंदणी प्राधिकरण किंवा राज्य लागू असल्यास NOC किंवा संबंधित पुनर्नियोजन प्रक्रिया आधी तपासा."],
    serviceLabelMr: "वाहन सेवा"
  },
  noc: {
    titleMr: "ना हरकत प्रमाणपत्र (NOC)",
    shortMr: "सध्याच्या क्षेत्राबाहेर वाहन हलवण्यासाठी मंजुरी.",
    summaryMr: "वाहन दुसऱ्या क्षेत्रात किंवा राज्यात हलवण्यापूर्वी NOC घ्या.",
    bestForMr: "क्षेत्राधिकार बदल, स्थलांतर किंवा पुनर्नोंदणीच्या प्रकरणांसाठी.",
    outcomeSummaryMr: "पुढील राज्य किंवा प्राधिकरण प्रक्रियेसाठी वापरता येईल अशी मंजूर NOC मिळते.",
    recommendedActionMr: "NOC नंतर पुढची प्रक्रिया कोणती आहे हे आधी समजून घ्या.",
    commonConfusionMr: "NOC ही सहसा मोठ्या ट्रान्सफर किंवा पुनर्नोंदणी प्रक्रियेचा भाग असते.",
    stepsMr: [
      "Vahan मध्ये NOC सेवा उघडा.",
      "वाहन तपशील भरा आणि मालकाचा रेकॉर्ड पडताळा.",
      "Form 28 आणि संबंधित कागदपत्रे अपलोड करा.",
      "लागू असलेली फी भरा.",
      "कर, चलन, परमिट किंवा फायनान्सशी संबंधित प्रलंबित बाबी निकाली काढा.",
      "NOC मंजुरीची स्थिती ट्रॅक करा आणि पुढील प्रक्रियेसाठी ती जतन करा."
    ],
    informationMr: createMarathiInformation(
      "NOC म्हणजे सध्याच्या प्राधिकरणाकडून मिळणारी परवानगी, जी वाहन दुसऱ्या क्षेत्रात किंवा राज्यात हलवताना वापरली जाते.",
      [
        "वाहन दुसऱ्या क्षेत्रात / राज्यात हलवायचे असल्यास ही सेवा लागू होते.",
        "पुढे पुनर्नोंदणी किंवा पुनर्नियोजन करायचे असल्यास NOC आधी आवश्यक असते.",
        "परिवहन वाहनांसाठी परमिट, कर आणि फिटनेसशी संबंधित अतिरिक्त तपासणी असू शकते."
      ],
      "ही स्वतंत्र अंतिम प्रक्रिया नसते; पुढील ट्रान्सफर किंवा पुनर्नोंदणी सेवेसाठी वापरली जाणारी मंजुरी असते."
    ),
    officialValidityMr: "मंजूर NOC पुढील संबंधित प्रक्रियेत वापरावी लागते.",
    officialProcessingNoteMr: "अधिकृत ठराविक प्रक्रिया-वेळ उपलब्ध नाही. कर, चलन, परमिट आणि फायनान्स क्लिअरन्सवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "वाहन खरोखर दुसऱ्या क्षेत्रात/राज्यात हलवत आहे का आणि इतर सेवा लागतील का ते आधी निश्चित करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["सध्याच्या प्राधिकरण क्षेत्राबाहेर वाहन हस्तांतरण किंवा पुनर्नियोजन करण्यापूर्वी ही सेवा वापरली जाते.", "परिवहन वाहनांमध्ये परमिट, कर, चलन आणि फिटनेसशी संबंधित अतिरिक्त तपासणी लागू होऊ शकते."],
    serviceLabelMr: "वाहन सेवा"
  },
  "rc-renewal": {
    titleMr: "RC नूतनीकरण",
    shortMr: "नोंदणी प्रमाणपत्राची मुदत संपण्यापूर्वी नूतनीकरण.",
    summaryMr: "नियमांनुसार मुदत संपण्यापूर्वी किंवा नंतर वाहन नोंदणी प्रमाणपत्र नूतनीकरण करा.",
    bestForMr: "RC ची मुदत जवळ आलेल्या वाहन मालकांसाठी.",
    outcomeSummaryMr: "मंजुरीनंतर RC स्थिती अद्ययावत होते.",
    recommendedActionMr: "अधिकृत विंडोमध्येच अर्ज सुरू करा आणि जुन्या वाहनांसाठी आवश्यक अनुपालन कागदपत्रे तयार ठेवा.",
    commonConfusionMr: "RC नूतनीकरण, फिटनेस आणि डुप्लिकेट RC या वेगळ्या सेवा आहेत.",
    stepsMr: [
      "Vahan मध्ये RC नूतनीकरण सेवा उघडा.",
      "नोंदणी क्रमांक आणि chassis तपशील वापरून रेकॉर्ड पडताळा.",
      "सेवेचे तपशील भरा आणि कागदपत्रे अपलोड करा.",
      "पोर्टलने विचारल्यास अपॉइंटमेंट बुक करा.",
      "लागू फी आणि प्रलंबित देयके भरा.",
      "आवश्यक असल्यास मूळ कागदपत्रांसह कार्यालयात जा.",
      "मंजुरीनंतर अद्ययावत RC स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "RC नूतनीकरण ही वाहन नोंदणी प्रमाणपत्राची मुदत संपण्यापूर्वी किंवा नियमांनुसार नंतर पूर्ण करायची प्रक्रिया आहे.",
      [
        "RC ची मुदत जवळ आली असल्यास ही सेवा करावी लागते.",
        "जुन्या वाहनांसाठी अधिक अनुपालन किंवा पूरक कागदपत्रे लागू शकतात.",
        "काही प्रकरणांत अपॉइंटमेंट किंवा कार्यालयीन पडताळणी असू शकते."
      ],
      "RC नूतनीकरण आणि फिटनेस प्रमाणपत्र या वेगळ्या प्रक्रिया असू शकतात. वाहनाच्या प्रकारानुसार दोन्ही लागू होऊ शकतात."
    ),
    officialValidityMr: "मंजुरीनंतरची वैधता वाहन वर्गानुसार लागू होते.",
    officialProcessingNoteMr: "अधिकृत निश्चित प्रक्रिया-वेळ उपलब्ध नाही. अपॉइंटमेंट, पडताळणी आणि वाहन श्रेणीवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "मुदत, वाहन तपशील आणि अपलोड कागदपत्रे योग्य आहेत याची खात्री करा.",
    officialTimingWindowsMr: ["नोंदणीच्या मुदतसमाप्तीपूर्वी 60 दिवसांच्या आत अर्ज करा."],
    eligibilityMr: ["नोंदणी प्रमाणपत्राच्या मुदतसमाप्तीपूर्वी जास्तीत जास्त 60 दिवस आधी अर्ज करा."],
    serviceLabelMr: "वाहन सेवा"
  },
  "duplicate-rc": {
    titleMr: "RC ची प्रत",
    shortMr: "हरवलेले किंवा खराब झालेले नोंदणी प्रमाणपत्र पुन्हा मिळवा.",
    summaryMr: "हरवलेले, खराब झालेले किंवा नष्ट झालेले नोंदणी प्रमाणपत्र पुन्हा मिळवा.",
    bestForMr: "नवीन RC प्रत आवश्यक असलेल्या हरवलेल्या RC प्रकरणांसाठी.",
    outcomeSummaryMr: "पडताळणीनंतर नवीन RC प्रत जारी होते.",
    recommendedActionMr: "हरवलेले RC असल्यास पोलिस नोंद, प्रतिज्ञापत्र आणि वाहन कागदपत्रे तयार ठेवा.",
    commonConfusionMr: "डुप्लिकेट RC आणि RC नूतनीकरण या दोन वेगळ्या सेवा आहेत.",
    stepsMr: [
      "RC हरवले असल्यास आवश्यक असल्यास पोलिसांत नोंद करा.",
      "Vahan मध्ये डुप्लिकेट RC सेवा उघडा.",
      "पोलिस नोंद, प्रतिज्ञापत्र आणि वाहनाशी संबंधित कागदपत्रे अपलोड करा.",
      "फी भरा.",
      "पडताळणीची गरज असल्यास ती पूर्ण करा आणि अर्ज ट्रॅक करा.",
      "नवीन RC मिळेपर्यंत acknowledgement आणि पावत्या जतन ठेवा."
    ],
    informationMr: createMarathiInformation(
      "RC हरवले, खराब झाले किंवा वापरता येत नसल्यास त्याची अधिकृत प्रत मिळवण्यासाठी ही सेवा वापरली जाते.",
      [
        "मूळ RC उपलब्ध नसल्यास ही सेवा योग्य असते.",
        "पोलिस नोंद, प्रतिज्ञापत्र आणि वाहन कागदपत्रे काही प्रकरणांत आवश्यक होतात.",
        "व्यावसायिक वाहनांसाठी अतिरिक्त क्लिअरन्स लागू होऊ शकते."
      ],
      "जर RC ची मुदत संपत आली असेल तर नूतनीकरण प्रक्रिया वेगळी असते; डुप्लिकेट RC फक्त हरवलेल्या किंवा खराब RC साठी असते."
    ),
    officialValidityMr: "प्रत जारी होण्याचा कालावधी पडताळणी आणि प्रिंटिंगवर अवलंबून असतो.",
    officialProcessingNoteMr: "अधिकृत ठराविक प्रक्रिया-वेळ दिलेली नाही. पोलिस नोंद, प्रतिज्ञापत्र आणि वाहन रेकॉर्ड पडताळणीवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "RC खरंच हरवलेले/खराब झालेले आहे आणि नूतनीकरणाची गरज नाही याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["मूळ RC हरवलेले, नष्ट झालेले किंवा वापरता न येण्याजोगे असावे."],
    serviceLabelMr: "वाहन सेवा"
  },
  "rc-address-change": {
    titleMr: "RC मधील पत्ता बदल",
    shortMr: "वाहन नोंदणी रेकॉर्डवरील पत्ता अपडेट करा.",
    summaryMr: "घर बदलल्यानंतर वाहन नोंदणी रेकॉर्डवरील पत्ता अद्ययावत करा.",
    bestForMr: "RC वर नवीन पत्ता दाखवायचा असलेल्या वाहन मालकांसाठी.",
    outcomeSummaryMr: "मंजुरीनंतर RC वरील पत्ता रेकॉर्ड अद्ययावत होते.",
    recommendedActionMr: "DL आणि RC दोन्हीवर पत्ता बदलायचा असल्यास दोन्ही रेकॉर्ड जुळतील याची काळजी घ्या.",
    commonConfusionMr: "DL पत्ता बदल आणि RC पत्ता बदल या वेगळ्या सेवा आहेत.",
    stepsMr: [
      "Vahan मध्ये पत्ता बदल सेवा उघडा.",
      "नोंदणी तपशील भरा आणि आवश्यक असल्यास chassis क्रमांक व OTP ने पडताळणी करा.",
      "Form 33 आणि नवीन पत्त्याचा पुरावा अपलोड करा.",
      "विमा, PUC आणि पूरक कागदपत्रे सबमिट करा.",
      "फी भरा आणि मंजुरीची स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "वाहन नोंदणी रेकॉर्डवरील पत्ता बदलण्यासाठी ही सेवा वापरली जाते.",
      [
        "घर बदलल्यानंतर RC वर नवीन पत्ता दाखवायचा असल्यास ही प्रक्रिया लागते.",
        "नवीन पत्त्याचा पुरावा आणि विद्यमान वाहन कागदपत्रे आवश्यक असतात.",
        "फायनान्स असलेल्या वाहनांसाठी अतिरिक्त NOC लागू शकतो."
      ],
      "RC पत्ता बदल आणि DL पत्ता बदल वेगवेगळ्या नोंदींवर होतात. दोन्ही अपडेट हवेत तर दोन्ही प्रक्रिया वेगवेगळ्या पूर्ण कराव्या लागतात."
    ),
    officialValidityMr: "मंजुरीनंतर अद्ययावत पत्ता लागू होतो.",
    officialProcessingNoteMr: "प्रक्रिया पोर्टल-आधारित असली तरी कागदपत्र पडताळणी किंवा फायनान्स नोंदीमुळे वेळ लागू शकतो.",
    beforePayingNoteMr: "पत्त्याचा पुरावा आणि RC तपशील अचूक जुळतात याची खात्री करा.",
    officialTimingWindowsMr: ["पत्ता बदलल्यानंतर 14 दिवसांच्या आत अर्ज करा."],
    eligibilityMr: ["पत्ता बदलल्यानंतर 14 दिवसांच्या आत अर्ज करा."],
    serviceLabelMr: "वाहन सेवा"
  },
  "hypothecation-addition": {
    titleMr: "तारण नोंदवणे",
    shortMr: "वाहन RC मध्ये कर्ज किंवा तारणाची नोंद करा.",
    summaryMr: "फायनान्स केलेल्या वाहनासाठी RC मध्ये कर्ज किंवा तारणाची नोंद करा.",
    bestForMr: "RC मध्ये कर्जदाराची माहिती दाखवायची असलेल्या फायनान्स वाहन प्रकरणांसाठी.",
    outcomeSummaryMr: "RC रेकॉर्डमध्ये तारण / फायनान्स नोंद अद्ययावत होते.",
    recommendedActionMr: "Form 34 वर मालक आणि फायनान्सर दोघांच्या स्वाक्षऱ्या योग्य असल्याची खात्री करा.",
    commonConfusionMr: "ही कर्ज बंद झाल्यानंतरची सेवा नाही. ती तारण काढून टाकण्याची वेगळी सेवा आहे.",
    stepsMr: [
      "Vahan मध्ये तारण नोंदवण्याची सेवा उघडा.",
      "वाहन आणि फायनान्सरची माहिती भरा.",
      "Form 34 आणि संबंधित कागदपत्रे अपलोड करा.",
      "फी भरून अर्ज सबमिट करा.",
      "रेकॉर्ड अपडेटची स्थिती आणि अद्ययावत RC तपशील ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "फायनान्स केलेल्या वाहनाच्या RC मध्ये कर्जदाराची नोंद दाखवण्यासाठी ही सेवा वापरली जाते.",
      [
        "वाहन कर्जावर घेतले असल्यास तारणाची नोंद RC मध्ये करावी लागते.",
        "मालक आणि फायनान्सर दोघांचे तपशील आणि स्वाक्षऱ्या लागतात.",
        "ही प्रक्रिया नंतरच्या loan closure वेळी तारण काढण्यासाठी आधार ठरते."
      ],
      "तारण नोंदवणे आणि तारण काढणे या वेगळ्या सेवा आहेत. कर्ज सुरू असताना ही सेवा वापरायची असते."
    ),
    officialValidityMr: "रेकॉर्ड एंडोर्समेंट यशस्वी झाल्यावर अद्ययावत स्थिती लागू होते.",
    officialProcessingNoteMr: "अधिकृत ठराविक प्रक्रिया-वेळ उपलब्ध नाही. फायनान्सर तपशील आणि कागदपत्र पडताळणीवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "फायनान्स तपशील, RC आणि Form 34 नीट भरलेले आहेत याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["वाहन फायनान्स व्यवस्था आधीच अस्तित्वात आणि कागदपत्रांसह तयार असावी."],
    serviceLabelMr: "वाहन सेवा"
  },
  "hypothecation-removal": {
    titleMr: "तारण काढून टाकणे",
    shortMr: "कर्जफेडीनंतर RC मधील तारणाची नोंद काढून टाका.",
    summaryMr: "वाहन कर्ज पूर्ण फेडल्यानंतर RC मधील फायनान्स नोंद काढून टाका.",
    bestForMr: "बँकेचा NOC किंवा ड्यू-क्लिअरन्स मिळाल्यानंतरची कर्जबंद प्रकरणे.",
    outcomeSummaryMr: "पडताळणीनंतर RC मधील तारणाची नोंद काढली जाते.",
    recommendedActionMr: "बँकेचा अंतिम NOC किंवा ड्यू-क्लिअरन्स मिळाल्याशिवाय ही सेवा सुरू करू नका.",
    commonConfusionMr: "कर्ज बंद झाले तरी RC वर फायनान्स नोंद राहू शकते; ती काढण्यासाठी ही सेवा आवश्यक असते.",
    stepsMr: [
      "कर्ज पूर्ण फेडल्यानंतर बँकेचा NOC किंवा ड्यू-क्लिअरन्स घ्या.",
      "Vahan मध्ये HP termination सेवा उघडा.",
      "Form 35, RC आणि संबंधित कागदपत्रे अपलोड करा.",
      "अर्ज सबमिट करा आणि पोर्टलवर दिसणारी फी प्रक्रिया पूर्ण करा.",
      "अद्ययावत RC रेकॉर्ड किंवा नवीन स्थिती ट्रॅक करा."
    ],
    informationMr: createMarathiInformation(
      "वाहन कर्ज पूर्ण फेडल्यानंतर RC मधील फायनान्स / तारण नोंद काढण्यासाठी ही सेवा करावी लागते.",
      [
        "बँकेचा अंतिम NOC किंवा ड्यू-क्लिअरन्स मिळाल्यानंतर ही प्रक्रिया लागू होते.",
        "RC वरून फायनान्स नोंद काढल्याशिवाय वाहन रेकॉर्ड पूर्णपणे स्वच्छ होत नाही.",
        "पुढील विक्री, ट्रान्सफर किंवा रेकॉर्ड अपडेटसाठी ही बाब महत्त्वाची असते."
      ],
      "कर्जाची EMI संपली म्हणजे RC आपोआप अपडेट होत नाही. RC मधून तारणाची नोंद काढण्यासाठी ही स्वतंत्र प्रक्रिया पूर्ण करावी लागते."
    ),
    officialValidityMr: "फायनान्सर क्लिअरन्स आणि रेकॉर्ड अपडेटनंतर प्रक्रिया पूर्ण होते.",
    officialProcessingNoteMr: "अधिकृत ठराविक प्रक्रिया-वेळ उपलब्ध नाही. बँकेचा NOC, पडताळणी आणि रेकॉर्ड अपडेटवर प्रक्रिया अवलंबून असते.",
    beforePayingNoteMr: "बँकेचे अंतिम NOC, RC आणि Form 35 तयार आहेत याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["कर्ज बंद झालेले असावे आणि फायनान्सरचे ड्यू-क्लिअरन्स / NOC तयार असावे."],
    serviceLabelMr: "वाहन सेवा"
  },
  "fitness-certificate": {
    titleMr: "तपासणी पात्रता प्रमाणपत्र",
    shortMr: "मुख्यतः परिवहन वाहनांसाठी तपासणी व पात्रता मंजुरी.",
    summaryMr: "तपासणी-आधारित वाहन प्रकरणांसाठी, मुख्यतः परिवहन वाहनांसाठी, अधिकृत फिटनेस प्रक्रिया पूर्ण करा.",
    bestForMr: "तपासणी आणि नूतनीकरणासाठी तयारी करणाऱ्या परिवहन वाहन मालकांसाठी.",
    outcomeSummaryMr: "तपासणी आणि मंजुरीनंतर फिटनेस प्रमाणपत्र जारी होते किंवा नूतनीकरण होते.",
    recommendedActionMr: "तपासणीच्या दिवशी वाहन, मूळ कागदपत्रे, अपॉइंटमेंट आणि पेमेंट पावती सोबत ठेवा.",
    commonConfusionMr: "ही फक्त कागद अपलोडची सेवा नाही; वाहन तपासणी हा महत्त्वाचा टप्पा असतो.",
    stepsMr: [
      "Vahan मध्ये फिटनेस जारी / नूतनीकरण सेवा उघडा.",
      "नोंदणी क्रमांक, chassis तपशील आणि OTP वापरून रेकॉर्ड पडताळा.",
      "फिटनेस आणि विम्याशी संबंधित तपशील भरा.",
      "DMS upload टप्प्यात मागितलेली कागदपत्रे अपलोड करा.",
      "तपासणीसाठी अपॉइंटमेंट बुक करा.",
      "फी ऑनलाइन भरा.",
      "ठरलेल्या दिवशी वाहन, मूळ कागदपत्रे, पेमेंट पावती आणि अपॉइंटमेंटसह RTO येथे जा."
    ],
    informationMr: createMarathiInformation(
      "फिटनेस प्रमाणपत्र ही मुख्यतः परिवहन वाहनांसाठीची तपासणी-आधारित प्रक्रिया आहे.",
      [
        "परिवहन वाहन किंवा तपासणीवर आधारित नूतनीकरण प्रकरणांसाठी ही सेवा लागते.",
        "वाहन प्रत्यक्ष तपासणीसाठी सादर करावे लागते.",
        "अपॉइंटमेंट, पेमेंट आणि मूळ कागदपत्रे सोबत असणे महत्त्वाचे असते."
      ],
      "ही फक्त ऑनलाइन कागदपत्र प्रक्रिया नाही. वाहन तपासणी आणि मंजुरी हा मुख्य टप्पा आहे."
    ),
    officialValidityMr: "फिटनेसची वैधता वाहनाच्या वर्गानुसार ठरते; अंतिम प्रमाणपत्रावर दिलेला कालावधी पाहा.",
    officialProcessingNoteMr: "फिटनेस अपॉइंटमेंट, वाहन तपासणी आणि अधिकृत मंजुरीनुसार प्रक्रिया पूर्ण होते.",
    beforePayingNoteMr: "अपॉइंटमेंट, विमा, वाहन तपशील आणि अपलोड कागदपत्रे योग्य आहेत याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["मुख्यतः परिवहन वाहन आणि तपासणी-आधारित नूतनीकरण प्रकरणांसाठी महत्त्वाचे."],
    serviceLabelMr: "वाहन सेवा"
  },
  "permit-services": {
    titleMr: "परमिटसंबंधी सेवा",
    shortMr: "परमिट नूतनीकरण, हस्तांतरण, प्रत आणि इतर बाबींसाठी मार्गदर्शन.",
    summaryMr: "मालवाहतूक, प्रवासी, पर्यटन, राष्ट्रीय, डुप्लिकेट, नूतनीकरण किंवा हस्तांतरण परमिट कामासाठी ही सेवा वापरा.",
    bestForMr: "व्यावसायिक आणि प्रवासी वाहन परमिट प्रकरणांसाठी.",
    outcomeSummaryMr: "परमिटच्या प्रकारानुसार मंजुरी, नूतनीकरण, प्रत किंवा रेकॉर्ड अद्ययावत प्रक्रिया पूर्ण होते.",
    recommendedActionMr: "फी भरण्यापूर्वी नेमका परमिट प्रकार निश्चित करा.",
    commonConfusionMr: "परमिटच्या प्रत्येक प्रकारासाठी वेगळी कागदपत्रे आणि नियम लागू होऊ शकतात.",
    stepsMr: [
      "सुरुवातीला नेमका परमिट प्रकार ओळखा.",
      "अधिकृत पोर्टलवरून परमिट मॉड्यूल उघडा.",
      "वाहन किंवा परमिटशी संबंधित रेकॉर्ड पडताळा.",
      "परमिटसाठी लागणारी कागदपत्रे अपलोड करून फॉर्म सबमिट करा.",
      "सिस्टमवर दिसणारी फी भरा.",
      "त्या परमिट प्रकारासाठी लागू असलेली मंजुरी, छाननी किंवा कार्यालयीन सूचना पूर्ण करा."
    ],
    informationMr: createMarathiInformation(
      "परमिटसंबंधी सेवा म्हणजे मालवाहतूक, प्रवासी, पर्यटन, राष्ट्रीय किंवा इतर वाहन परमिट प्रक्रियांशी संबंधित कामे.",
      [
        "व्यावसायिक किंवा प्रवासी वाहनांना विशिष्ट परमिट लागते.",
        "परमिटचा प्रकार, मार्ग, वाहन वर्ग आणि वापर यानुसार कागदपत्रे बदलतात.",
        "काही परमिट प्रक्रिया ऑनलाइन असतात, तर काहींमध्ये कार्यालयीन छाननी जास्त असते."
      ],
      "परमिटच्या सर्व प्रकारांसाठी एकच नियम नसतो. नेमका परमिट प्रकार ठरवल्याशिवाय फी भरू नये."
    ),
    officialValidityMr: "परमिटची वैधता आणि नूतनीकरण चक्र परमिटच्या प्रकारावर अवलंबून असते.",
    officialProcessingNoteMr: "काही परमिट सेवा पूर्णपणे ऑनलाइन असतात, तर काहींमध्ये कार्यालयीन छाननी आणि मंजुरी लागते.",
    beforePayingNoteMr: "नेमका परमिट प्रकार, मार्ग, वाहन वर्ग आणि कागदपत्रे तपासून मग फी भरा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["वाहनाचा प्रकार, मार्ग, प्रवासी किंवा माल वापर आणि परमिटचा नेमका वर्ग यावर पात्रता ठरते.", "काही परमिट सेवा पूर्णपणे ऑनलाइन असतात, तर काहींमध्ये कार्यालयीन छाननी असते."],
    serviceLabelMr: "परमिट / अनुपालन सेवा"
  },
  "tax-services": {
    titleMr: "करसंबंधी सेवा",
    shortMr: "रस्ता कर, पर्यावरण कर आणि नियमांनुसार आकारल्या जाणाऱ्या वाहन कराचे मार्गदर्शन.",
    summaryMr: "अधिकृत पोर्टलवर दिसणाऱ्या वाहन कराच्या नियमांनुसार रक्कम तपासा आणि पेमेंट करा.",
    bestForMr: "पेमेंट करण्यापूर्वी कर समजून घ्यायचा असलेल्या वाहन मालकांसाठी.",
    outcomeSummaryMr: "ऑनलाइन कर पेमेंट पावती मिळते.",
    recommendedActionMr: "पोर्टलवर प्रणालीने मोजलेली रक्कम अंतिम मानून पेमेंट पावती जतन करा.",
    commonConfusionMr: "ही ठराविक एकच फी नसते; कर वाहनाच्या प्रकार, इंधन, वापर आणि नियमांनुसार बदलतो.",
    stepsMr: [
      "अधिकृत वाहन कर / पेमेंट सेवा उघडा.",
      "वाहन तपशील भरा आणि रेकॉर्ड पडताळा.",
      "पोर्टलला देय कराची रक्कम मोजू द्या.",
      "स्लॅबनुसार आलेली रक्कम नीट तपासा.",
      "पेमेंट ऑनलाइन करून पावती जतन करा."
    ],
    informationMr: createMarathiInformation(
      "वाहन कर ही नियमांनुसार मोजली जाणारी रक्कम आहे आणि ती वाहनाच्या प्रकारानुसार बदलते.",
      [
        "कर भरण्यापूर्वी रक्कम कशी मोजली जाते हे समजून घ्यायचे असल्यास ही सेवा उपयुक्त आहे.",
        "खाजगी, व्यावसायिक, इंधन प्रकार, किंमत, GVW आणि इतर घटकांवर रक्कम अवलंबून असते.",
        "अंतिम रक्कम अधिकृत पोर्टलवर प्रणाली मोजून दाखवते."
      ],
      "ही ठराविक स्थिर फी नाही. सामान्य मार्गदर्शन आणि पोर्टलवरील अंतिम रक्कम यात फरक असू शकतो."
    ),
    officialValidityMr: "पेमेंट पावती हस्तांतरण, NOC, नूतनीकरण आणि इतर संबंधित सेवांसाठी जतन करून ठेवा.",
    officialProcessingNoteMr: "अधिकृत पोर्टल रक्कम प्रणालीने मोजते. अंतिम देय रक्कम तिथेच निश्चित होते.",
    beforePayingNoteMr: "वाहन वर्ग, वापर, इंधन आणि पोर्टलवर दिसणारी गणना नीट तपासा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["कर वाहन वर्ग, परिवहन दर्जा, इंधन प्रकार, किंमत, GVW, आसनसंख्या आणि स्लॅबनुसार ठरतो.", "ही ठराविक एकच फी नसलेली सेवा आहे."],
    serviceLabelMr: "परमिट / अनुपालन सेवा"
  },
  "puc-requirements": {
    titleMr: "PUC बाबतची अट",
    shortMr: "RTO कामात प्रदूषण प्रमाणपत्र कुठे आवश्यक असते ते समजून घ्या.",
    summaryMr: "RTO संबंधित सेवांमध्ये वैध PUC प्रमाणपत्र कुठे आवश्यक असते ते पाहा.",
    bestForMr: "वैध PUC वारंवार आवश्यक असणाऱ्या RC-संबंधित सेवांसाठी.",
    outcomeSummaryMr: "संबंधित RTO प्रक्रियेसाठी PUC तयार ठेवण्याचे स्पष्ट मार्गदर्शन मिळते.",
    recommendedActionMr: "RC-संबंधित सेवा सुरू करण्यापूर्वी वैध PUC तयार ठेवा.",
    commonConfusionMr: "PUC ही स्वतंत्र RTO मंजुरी सेवा नाही; ती इतर RC प्रक्रियांमध्ये लागणारे अनुपालन कागदपत्र आहे.",
    stepsMr: [
      "तुमच्या सेवेसाठी वैध PUC प्रमाणपत्र लागते का ते तपासा.",
      "आवश्यक असल्यास अधिकृत PUC केंद्रावर वाहनाची चाचणी करून घ्या.",
      "RC-संबंधित सेवा सुरू करण्यापूर्वी प्रमाणपत्र तयार ठेवा.",
      "संबंधित RTO सेवेत वैध PUC अपलोड करा किंवा सादर करा."
    ],
    informationMr: createMarathiInformation(
      "PUC प्रमाणपत्र हे वाहनाच्या उत्सर्जन तपासणीसंबंधी अनुपालन कागदपत्र आहे.",
      [
        "हस्तांतरण, NOC, RC नूतनीकरण आणि इतर अनेक RC प्रक्रियांमध्ये ते वारंवार आवश्यक असते.",
        "हे प्रमाणपत्र अधिकृत PUC केंद्रावरून घेतले जाते.",
        "RTO सेवा सुरू करण्यापूर्वी प्रमाणपत्र वैध आहे याची खात्री करणे महत्त्वाचे असते."
      ],
      "PUC ही स्वतंत्र मंजुरी सेवा नाही. ती इतर वाहन-संबंधित प्रक्रियांमध्ये सादर करावी लागणारे आवश्यक अनुपालन कागदपत्र आहे."
    ),
    officialValidityMr: "हस्तांतरण, NOC, RC नूतनीकरण किंवा फायनान्स-संबंधित RC अपडेटपूर्वी वैध PUC तयार ठेवा.",
    officialProcessingNoteMr: "PUC चाचणी अधिकृत PUC केंद्रावर होते. RTO प्रक्रियेत वैध प्रमाणपत्र सादर करावे लागते.",
    beforePayingNoteMr: "RC-संबंधित प्रक्रिया सुरू करण्यापूर्वी PUC अद्ययावत आहे याची खात्री करा.",
    officialTimingWindowsMr: [],
    eligibilityMr: ["हस्तांतरण, NOC, डुप्लिकेट RC, RC नूतनीकरण, पत्ता बदल आणि तारण प्रक्रियांमध्ये वैध PUC वारंवार आवश्यक असते."],
    serviceLabelMr: "परमिट / अनुपालन सेवा"
  }
};

const marathiOfficeByCode = {
  "MH-11": {
    nameMr: "उप प्रादेशिक परिवहन कार्यालय, सातारा",
    noteMr: "तुमचे विद्यमान रेकॉर्ड किंवा अधिकृत पोर्टल राउटिंग MH-11 दाखवत असेल तर हे कार्यालय वापरा."
  },
  "MH-50": {
    nameMr: "उप प्रादेशिक परिवहन कार्यालय, कराड",
    noteMr: "तुमचे विद्यमान DL किंवा RC आधीपासून MH-50 शी जोडलेले असेल किंवा पोर्टलने केस येथे दिली असेल तर हे कार्यालय वापरा."
  }
};

const marathiCategoryById = {
  all: {
    labelMr: "सर्व सेवा",
    descriptionMr: "पूर्ण संदर्भ सूची",
    shortLabelMr: "सर्व"
  },
  licence: {
    labelMr: "परवाना",
    descriptionMr: "शिकाऊ, कायम, नूतनीकरण, प्रत, IDP",
    shortLabelMr: "परवाना"
  },
  vehicle: {
    labelMr: "वाहन",
    descriptionMr: "नोंदणी, RC, NOC, हस्तांतरण, तारण नोंद",
    shortLabelMr: "वाहन"
  },
  compliance: {
    labelMr: "परमिट, कर आणि PUC",
    descriptionMr: "परमिट मार्गदर्शन, कर भरणा, प्रदूषण प्रमाणपत्र",
    shortLabelMr: "परमिट"
  }
};

const marathiPlannerOptions = {
  officeOptions: {
    unknown: {
      labelMr: "मला खात्री नाही",
      descriptionMr: "रेकॉर्ड MH-11 आहे की MH-50 हे माहित नसेल तर हा पर्याय निवडा."
    },
    mh11: {
      labelMr: "MH-11 सातारा",
      descriptionMr: "तुमच्या विद्यमान DL किंवा RC वर MH-11 सातारा असेल तर हा पर्याय निवडा."
    },
    mh50: {
      labelMr: "MH-50 कराड",
      descriptionMr: "तुमच्या विद्यमान DL किंवा RC वर MH-50 कराड असेल तर हा पर्याय निवडा."
    },
    "other-state": {
      labelMr: "दुसरे राज्य / अस्पष्ट रेकॉर्ड",
      descriptionMr: "रेकॉर्ड महाराष्ट्राबाहेरचे असेल किंवा पडताळणी अपेक्षित असेल तर हा पर्याय निवडा."
    }
  },
  profileOptions: {
    private: {
      labelMr: "खाजगी / वैयक्तिक वापर",
      descriptionMr: "वैयक्तिक लायसन्स आणि खाजगी वाहन प्रकरणांसाठी योग्य."
    },
    transport: {
      labelMr: "व्यावसायिक / वाहतूक",
      descriptionMr: "परमिट, तपासणी पात्रता, मालवाहतूक, प्रवासी किंवा व्यावसायिक वाहन प्रकरणांसाठी वापरा."
    }
  },
  learnerStatusOptions: {
    no: {
      labelMr: "नाही, मला पहिला शिकाऊ परवाना हवा आहे",
      descriptionMr: "अर्जदाराकडे अद्याप शिकाऊ परवाना नसेल तर हा पर्याय निवडा."
    },
    yes: {
      labelMr: "हो, माझ्याकडे आधीच शिकाऊ परवाना आहे",
      descriptionMr: "शिकाऊ परवाना आधीच असेल आणि पुढचा टप्पा कायम परवान्याची चाचणी असेल तर हा पर्याय निवडा."
    }
  },
  vehicleTypeOptions: {
    "two-wheeler": {
      labelMr: "दुचाकी",
      descriptionMr: "मोटरसायकल, स्कूटर किंवा तत्सम दुचाकी वाहन."
    },
    car: {
      labelMr: "कार / LMV",
      descriptionMr: "खाजगी कार किंवा हलके मोटार वाहन."
    },
    commercial: {
      labelMr: "व्यावसायिक / वाहतूक वाहन",
      descriptionMr: "माल, प्रवासी, परमिट किंवा वाहतुकीशी संबंधित वाहन."
    }
  },
  fuelTypeOptions: {
    petrol: {
      labelMr: "पेट्रोल / CNG / LPG",
      descriptionMr: "पेट्रोल आणि तत्सम हलके इंधन प्रकरणे."
    },
    diesel: {
      labelMr: "डिझेल",
      descriptionMr: "डिझेल वाहनासाठीचे उत्सर्जन मार्गदर्शन."
    },
    "ev-other": {
      labelMr: "इलेक्ट्रिक / हायब्रिड / खात्री नाही",
      descriptionMr: "इंधन प्रकार इलेक्ट्रिक, हायब्रिड किंवा माहित नसेल तर हा पर्याय निवडा."
    }
  },
  flags: {
    financed: {
      labelMr: "वाहन कर्ज किंवा तारणाशी संबंधित आहे",
      descriptionMr: "तारण नोंद, NOC, हस्तांतरण आणि RC कामात महत्त्वाचे."
    },
    lost: {
      labelMr: "कागदपत्र हरवले किंवा खराब झाले आहे",
      descriptionMr: "DL ची प्रत, RC ची प्रत आणि तत्सम बदल प्रकरणांसाठी उपयुक्त."
    },
    addressChanged: {
      labelMr: "पत्ता बदलला आहे",
      descriptionMr: "पत्ता अपडेट आणि पुरावा तपासणी प्रकरणांसाठी उपयुक्त."
    },
    crossJurisdiction: {
      labelMr: "वाहन किंवा रेकॉर्ड दुसऱ्या क्षेत्रात / राज्यात जात आहे",
      descriptionMr: "NOC, हस्तांतरण आणि क्षेत्र बदलाशी संबंधित प्रकरणांसाठी महत्त्वाचे."
    }
  }
};

window.siteData.journeys = window.siteData.journeys.map((journey) => ({
  ...journey,
  ...(marathiJourneyById[journey.id] || {})
}));

window.siteData.services = window.siteData.services.map((service) => ({
  ...service,
  ...(marathiServiceById[service.id] || {})
}));

window.siteData.offices = window.siteData.offices.map((office) => ({
  ...office,
  ...(marathiOfficeByCode[office.code] || {})
}));

window.siteData.formLibrary = window.siteData.formLibrary.map((form) => ({
  ...form,
  titleMr: marathiFormTitleByEnglish[form.title] || form.title,
  usedForMr: marathiFormUsedForByEnglish[form.usedFor] || form.usedFor,
  lookupHintMr: marathiFormLookupHintByEnglish[form.lookupHint] || form.lookupHint,
  categoryMr:
    form.category === "Licence Forms"
      ? "परवाना फॉर्म"
      : form.category === "Vehicle Forms"
        ? "वाहन फॉर्म"
        : form.category === "Fitness Forms"
          ? "फिटनेस फॉर्म"
          : form.category
}));

window.siteData.categories = window.siteData.categories.map((category) => ({
  ...category,
  ...(marathiCategoryById[category.id] || {})
}));

Object.keys(marathiPlannerOptions).forEach((groupKey) => {
  window.siteData.planner[groupKey] = window.siteData.planner[groupKey].map((option) => ({
    ...option,
    ...(marathiPlannerOptions[groupKey][option.id] || {})
  }));
});

window.siteData.services = window.siteData.services.map((service) => ({
  ...service,
  practicalDocsMr: translateGeneratedListMr(service.practicalDocs),
  officialRequiredDocsMr: translateGeneratedListMr(service.officialRequiredDocs),
  officialAdditionalDocsMr: translateGeneratedListMr(service.officialAdditionalDocs),
  officialFeeNotesMr: translateGeneratedListMr(service.officialFeeNotes),
  officialFormsMr: translateOfficialFormsMr(service.officialForms),
  officialSourceRefsMr: translateSourceRefsMr(service.officialSourceRefs),
  mainFormsSummaryMr: translateMainFormsSummaryMr(service.mainFormsSummary),
  mainFormsCountLabelMr: translateMainFormsCountLabelMr(service.mainFormsCountLabel),
  modeMr: translateStatusTextMr(service.mode),
  appointmentMr: translateStatusTextMr(service.appointment),
  officeVisitMr: translateStatusTextMr(service.officeVisit),
  inspectionMr: translateStatusTextMr(service.inspection),
  inspectionSummaryMr: translateStatusTextMr(service.inspectionSummary)
}));

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
    category: "General",
    question: "How does your service work?",
    answer:
      "You can call or message us with your document need. We explain the process, tell you what papers to keep ready, and support the case based on the work involved.",
    questionMr: "तुमची सेवा कशी काम करते?",
    answerMr:
      "तुम्ही तुमच्या कागदपत्राच्या कामाबद्दल आम्हाला कॉल किंवा मेसेज करू शकता. आम्ही प्रक्रिया समजावून सांगतो, कोणती कागदपत्रे तयार ठेवायची ते सांगतो आणि कामाच्या प्रकारानुसार मदत करतो."
  },
  {
    category: "General",
    question: "Can you check my documents before I visit the RTO?",
    answer:
      "Yes. If you are unsure which papers are needed, contact us first. We can help you understand the checklist before you visit the office or start the portal process.",
    questionMr: "RTO ला जाण्यापूर्वी तुम्ही माझी कागदपत्रे तपासू शकता का?",
    answerMr:
      "हो. कोणती कागदपत्रे लागतील याबद्दल शंका असल्यास आधी आमच्याशी संपर्क करा. कार्यालयात जाण्यापूर्वी किंवा पोर्टलवर प्रक्रिया सुरू करण्यापूर्वी आम्ही यादी समजावून सांगू शकतो."
  },
  {
    category: "General",
    question: "Are your service charges fixed?",
    answer:
      "No. Service charges depend on the document, the amount of work involved, and whether the case needs extra follow-up or office visits. Contact us for a quote.",
    questionMr: "तुमचे सेवा शुल्क ठरलेले असते का?",
    answerMr:
      "नाही. सेवा शुल्क कामाच्या प्रकारावर, लागणाऱ्या प्रक्रियेवर आणि अतिरिक्त फॉलो-अप किंवा कार्यालय भेट लागते का यावर अवलंबून असते. कोटेशनसाठी संपर्क करा."
  },
  {
    category: "General",
    question: "Do I still need to visit the office in some cases?",
    answer:
      "Yes, in many cases an office visit, verification, driving test, inspection, or document check can still be necessary. We can help you understand whether your case is likely to need one.",
    questionMr: "काही प्रकरणांत मला कार्यालयात जावेच लागेल का?",
    answerMr:
      "हो. अनेक प्रकरणांत कार्यालय भेट, पडताळणी, ड्रायव्हिंग टेस्ट, तपासणी किंवा कागद तपासणी लागू शकते. तुमच्या केसला भेट लागण्याची शक्यता आहे का हे आम्ही समजावून सांगू शकतो."
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
