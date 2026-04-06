# Official Permit, Tax, And PUC Services

## 1. Permit-related services

Maharashtra's online service lists show multiple permit services as live or partially live, including:

- Transfer of permit / transfer by succession
- Temporary permit for goods
- Special permit for passenger bus
- Cancellation of permit
- Passenger contract carriage permit
- Goods carriage permit
- National permit services
- Duplicate permit
- Renewal of permit
- Replacement of permit

## Official online flow pattern

- Open the permit module on Vahan / Parivahan
- Login or verify the vehicle via registration number, chassis number, and OTP
- Select permit service
- Fill service details
- Upload documents through DMS
- Pay the fee
- Follow office / sanction / authority instructions where applicable

## Office visit expectations

- Permit services are more variable than basic RC services
- Many permit cases still involve scrutiny, sanction order, route or area restrictions, or authority approval
- A Satara-focused website should never promise a fully faceless end-to-end permit journey for every permit type

## Common forms seen in official permit references

- `Form 45` - application for tourist vehicle permit
- `Form 46` - application for tourist permit / national permit authorization
- `Form 47` - authorization for tourist permit / national permit
- `Form 48` - application for national permit

## Permit fee examples from Maharashtra fee table

- Motor cab with meter:
  - Permit fee: `Rs. 500`
  - Renewal fee: `Rs. 500`
- Motor cab without meter:
  - Permit fee: `Rs. 1000`
  - Renewal fee: `Rs. 1000`
- Maxi cab:
  - Permit fee: `Rs. 1000`
  - Renewal fee: `Rs. 1000`
- Goods vehicle state permit:
  - Permit fee: `Rs. 1000`
  - Renewal fee: `Rs. 1000`
- Tourist cab:
  - Permit fee: `Rs. 1500`
  - Renewal fee: `Rs. 1500`
- Tourist vehicles other than tourist cab:
  - Permit fee: `Rs. 5000`
  - Renewal fee: `Rs. 5000`
- National permit:
  - Permit fee: `Rs. 1500`
  - Renewal fee: `Rs. 1500`
- Temporary permit for each four calendar months or part:
  - `Rs. 1000`

## Product implication

Permit workflows should be modeled by:

- Vehicle type
- Passenger vs goods
- Within-state vs national
- New / renewal / duplicate / replacement / transfer
- Whether sanction order or authority approval is needed

## 2. Tax-related services

Official Maharashtra and Parivahan sources show tax services such as:

- Online payment of BMV tax
- Online payment of environment tax
- Tax payment by fleet owner
- Tax calculation references
- Tax rate tables

## Official tax process pattern

- Open Vahan tax service
- Enter registration details
- Verify owner / vehicle record
- System calculates payable amount based on category rules
- Pay online
- Save receipt for future RC, NOC, and transfer workflows

## Important tax note

Tax cannot be represented as one simple flat figure for Satara users. It depends on:

- Vehicle class
- Transport vs non-transport
- Fuel type
- GVW / seating capacity
- Value of vehicle or tax slab
- Permit class
- Quarter / half-year / annual period in some transport cases

## Product implication

The website should use a `fee estimator` backed by current rule tables and should not display one static tax value.

## 3. Pollution Under Control (PUC)

PUC is repeatedly required across official workflows, especially for:

- Transfer of ownership
- NOC
- Duplicate RC
- RC renewal
- RC address change
- Hypothecation endorsement / termination

Maharashtra service lists also show:

- Online PUC certificate issuance
- Application for opening PUC centre

## What the website should explain

- PUC is not just a roadside compliance document; it is also a dependency for many RTO workflows
- Users should carry a valid PUC before starting transfer, NOC, or RC renewal cases
- The site should link users to:
  - authorized PUC center details
  - current PUC rates
  - when PUC is mandatory inside a service flow

## 4. Delivery and verification pattern across permit / tax / PUC

- Tax: usually online receipt after successful payment
- Permit: may involve sanction, scrutiny, approval, or printed permit output
- PUC: generated through authorized workflow / center

## Product note

Permit and tax pages on the website should be built as guided flows, not static FAQ pages. These are rule-heavy and branch heavily by vehicle type.
