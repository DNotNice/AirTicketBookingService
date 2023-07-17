# Airline Ticket Booking Backend System


## Objective
- We need to build a backend feature for an airline company. our end-user is going to be someone who wants to book flights and query about flights, so we need a robust system to actually help them give the best experience possible.

- This Doc is going to solely focus on Backend Part. We want to prepare the whole backend keeping in the fact in mind that code-base should be easily maintainable as much as possible.

## Requirements
- A user should be able to search for flights from one place to another.
    - User should be able to mention the `src` and `dest` details.
    - User should be able to select the date of journey. _{V2 -> multicity and round trip implementation}_
    - User should be able to select the class of the flights. (Non-mandatory, have some default value)
    - User should be able to select the number of seats. (Non-mandatory, have some default value)
    - List down the flights based on the above data.
    - The best available flights should be shown based on price and least journey time.
    - Need to support pagination so that we can list chunk of flights at one point of time.
    - Filter of flights should be supported based on Price, Departure Time, Arrival time, Journey time, etc. _{V2 -> some more filters}_
- A user should be able to book a flight considering that user is reisterred on the platform.
    - Excess luggage addition feature should be supported.
- Tracking of the flight prices should be possible; user should be notified for any price drops or any delays. _{V2 -> some more notification service}_
- For booking, the user has to make a payment. `(dummy)`
- User should be able to list their previous and upcoming flights.
- User should be able to download their boarding pass if they have done `Web Check-in`.
- `Web Check-in` should be supported.
    - _{V2 -> Seat Selection feature}_
- Notification via email for `Web check-in`.
- Reqview system for users iff they have booked the flight.
    - Star based review system
    - Listing of flights should involve review display.
- User should be able to authenticate to our system using email and password.
- Cancellation of a flight should be supported and cancellation returns (dummy).
- While making a booking, a persone can reserve more than one seat with one login id.
