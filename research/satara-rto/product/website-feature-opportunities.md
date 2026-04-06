# Website Feature Opportunities

This file translates the research into website requirements for Satara-region users.

## 1. Service discovery

### User need

- "I do not know which exact service name matches my problem."

### Opportunity

- Journey-first entry points:
  - I want a new licence
  - I want to renew my licence
  - I lost my RC or DL
  - I sold my vehicle
  - I moved house
  - I closed my loan
  - I am taking my vehicle to another state
  - I need a permit or tax service

## 2. Office routing

### User need

- "Which RTO office in Satara district applies to me?"

### Opportunity

- Office router for `MH-11` vs `MH-50`
- Input options:
  - taluka
  - pincode
  - existing vehicle code
  - existing licence office if known

## 3. Document checklist generator

### User need

- "Tell me exactly what documents I need for my case."

### Opportunity

- Dynamic checklist engine based on:
  - service
  - private vs commercial
  - financed vs non-financed
  - lost / damaged / expired
  - in-state vs out-of-state
  - licence vs vehicle service

### Must-have outputs

- required documents
- conditional documents
- who signs what
- originals to carry
- uploads needed online

## 4. Eligibility checker

### User need

- "Am I eligible to apply right now?"

### Opportunity

- Rule checks such as:
  - learner age
  - permanent DL after 30 days
  - RC renewal within 60 days before expiry
  - address change within 14 days
  - out-of-state reassignment after 12 months

## 5. Fee estimator

### User need

- "How much will this cost me?"

### Opportunity

- Fee estimator with rule-based inputs
- Show:
  - government fee
  - smart-card fee if applicable
  - permit-specific fee
  - tax estimate
  - warning that final payable amount must be confirmed on the portal

## 6. Step-by-step guidance

### User need

- "What exactly do I do first, second, and third?"

### Opportunity

- Service pages with clearly marked stages:
  - online form
  - document upload
  - appointment booking
  - payment
  - verification
  - office visit
  - delivery / dispatch

### UX labels to add

- `Faceless`
- `Appointment required`
- `Office visit required`
- `Vehicle inspection required`
- `Bank / financier approval required`

## 7. Form assistance

### User need

- "I see form numbers, but I do not know what they mean."

### Opportunity

- Plain-language form explainers
- Show:
  - purpose
  - who fills it
  - who signs it
  - when it becomes mandatory
  - example filled fields

## 8. Appointment guidance

### User need

- "Do I need a slot, and when do I book it?"

### Opportunity

- Slot guidance per service
- Explain:
  - whether appointment is needed
  - which step comes before booking
  - what to carry on slot day

## 9. Status tracking help

### User need

- "My application is submitted, what now?"

### Opportunity

- Status helper with:
  - where to check status
  - what common status labels mean
  - what to do if payment is pending but money is deducted
  - when to escalate

## 10. Support and FAQ

### User need

- "My case is not standard."

### Opportunity

- Exception FAQ:
  - licence from another state
  - lost RC without photocopy
  - hypothecation removal after loan closure
  - commercial vehicle with challans
  - NOC plus reassignment
  - duplicate RC in impound-sensitive cases

## Suggested MVP

- Office router
- Service discovery wizard
- Dynamic document checklist
- Step-by-step process pages
- Fee estimate notes
- Status and payment issue help

## Suggested phase 2

- Form prefill guidance
- Marathi-first content layer
- Saved user journeys
- support escalation instructions
- permit-specific guided calculators

## Core product principle

The website should not behave like a copied government menu. It should behave like a decision-support system for real users.
