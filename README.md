# Introduction
Our group has chosen to undertake the implementation of a blockchain system in the second hand car dealing process. Our system involves 4 participants - the insurer (AIA), inspector (STA Inspection), regulator (Land Transport Authority), person (seller/buyer), and the respective rest servers will be set up for the system to function.

#Secondhand Car Dealing System
This system is to simulate a Secondhand Car Dealing market in a Singaporean context. It is incorporated with the HyperLedger Fabric Blockchain to streamline the process of buying and selling a secondhand car seamlessly without the need of a intermediary within a low trust environment.  
##Prerequisites (installing ExpressJS)
On the command prompt, run: npm i express

##To be able to set up playground, set up Virtual Box, then run the following three commands
npm run setup_crypto
npm run start_fabric
npm run start_playground

##After deployment:
Run the transaction dataInit
Issue id for person 1111, name: winston
Issue id for person 2222, name: steve
Issue id for person 3333, name: alice
Issue id for person lta, name: lta
Issue id for person sta, name: sta
Issue id for person aia, name: aia

##Run rest server: 
npm run start_rest-server admin@secondhandcar-sales-network 3000
npm run start_rest-server winston@secondhandcar-sales-network 3001
npm run start_rest-server steve@secondhandcar-sales-network 3002
npm run start_rest-server alice@secondhandcar-sales-network 3003
npm run start_rest-server lta@secondhandcar-sales-network 3004
npm run start_rest-server sta@secondhandcar-sales-network 3005
npm run start_rest-server aia@secondhandcar-sales-network 3006

##Run ExpressJs:
Navigate to the express_crash_course folder in cmd
Run command to start port 5000: npm run dev
Go to localhost:5000/login 


##For quick closing of ports
docker stop fabric_rest_{{port_number}}
docker rm fabric_rest_{{port_number}}


##To tear down the network, run:
npm run stop_playground
npm run stop_fabric
npm run clean_network


##To see a list of carnetwork Api
http://localhost:3000/explorer


##Breakdown End to End task


NewCar
Process:
Invoked by person
Buyer must create a COE
COE must be verified by LTA


CreateNewDrivingLicense
Process:
Invoked by any user

TakeTrip
Process:
Invoked on existing car

NewInspectionDocument
Process:
Invoked by STA

PutCarOnSale
Process:
Invoked on existing car

VerifyCOE
Process:
Invoked by LTA

Offer
Process:
Invoked by buyer for existing car listing

VerifyDrivingLicence
Process:
Invoked by LTA

UpdateOfferPrice
Process:
Invoked by seller for existing car listing

VerifyInsuranceDocument
Process:
Invoked by AIA

CompleteSale
Process:
Invoked by seller for existing car listing 

ViewCarThroughListing
DeleteListing
Invoked on existing car listing


ScrapCar
Invoked on existing cars



