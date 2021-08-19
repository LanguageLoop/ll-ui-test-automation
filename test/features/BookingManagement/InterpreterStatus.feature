@InterpreterStatus
Feature: Changing status of the booking for interpreters

   Background: Load Loopedin login page
   Given the looped in login page is opened
   When I login with "LLAdmin@looped.in" and "Octopus@6"
   And I create a new job request with minimal fields "long notice"
   And I click Interpreting header link
   And I select "Allocations" from the filter dropdown
  
  

  @VoiceMailStatus  
  Scenario Outline: Change the status to voicemail left
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I refresh the page
   And I get the first contractor on list
   
   And I search for first contractor on list
   And I set the contractor job status from "Auto Notification" to "Voicemail Left"
   Then I confirm the job status "Voicemail Left"

   And I set the contractor job status from "Voicemail Left" to "Unavailable"
   And I set the contractor job status from "Unavailable" to "Voicemail Left"
   Then I confirm the job status "Voicemail Left"

   And I set the contractor job status from "Voicemail Left" to "Refused Job"
   And I set the contractor job status from "Refused Job" to "Voicemail Left"
   Then I confirm the job status "Voicemail Left"

   And I search for first contractor on list
   And I refresh the page
   And I search for first contractor on list
   And I set the contractor job status from "Voicemail Left" to "Allocated"
   And I set the contractor job status from "Allocated" to "Returned"
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Voicemail Left"
   Then I confirm the job status "Voicemail Left"

   And I set the contractor job status from "Voicemail Left" to "Allocated"
   And I set the contractor job status from "Allocated" to "Transfer"
   And I search for first contractor on list
   And I set the contractor job status from "Transfer" to "Voicemail Left"
   Then I confirm the job status "Voicemail Left"


   Examples:
  |job id    | original status   | contractor job status   | dropdownfilter |  job status   |  contractor name    |
  | 1578054  | Auto Notification | Voicemail Left          | Management     |   Unallocated |   Suzane            |
 
 @UnavailableStatus  
  Scenario Outline: Change the status to unavailable 
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I refresh the page
   And I get the first contractor on list
   
   And I search for first contractor on list
   And I set the contractor job status from "Auto Notification" to "Unavailable"
   Then I confirm the job status "Unavailable"

   And I set the contractor job status from "Unavailable" to "Voicemail Left"
   And I set the contractor job status from "Voicemail Left" to "Unavailable"
   Then I confirm the job status "Unavailable"

   And I set the contractor job status from "Unavailable" to "Refused Job"
   And I set the contractor job status from "Refused Job" to "Unavailable"
   Then I confirm the job status "Unavailable"

   And I search for first contractor on list
   And I refresh the page
   And I search for first contractor on list
   And I set the contractor job status from "Unavailable" to "Allocated"
   And I set the contractor job status from "Allocated" to "Returned"
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Unavailable"
   Then I confirm the job status "Unavailable"

   And I search for first contractor on list
   And I refresh the page
   And I search for first contractor on list
   And I set the contractor job status from "Unavailable" to "Allocated"
   And I set the contractor job status from "Allocated" to "Transfer"
   And I search for first contractor on list
   And I set the contractor job status from "Transfer" to "Unavailable "
   Then I confirm the job status "Unavailable"


   Examples:
  |job id    | original status   | contractor job status   | dropdownfilter |  job status   |  contractor name    |
  | 1578054  | Auto Notification | Voicemail Left          | Management     |   Unallocated |   Suzane            |
 
 @AllocatedStatus  @NoShow @LateArrival
  Scenario Outline: Change the status to Allocated, Returned, Late Arrival No Show, Interpreter No Show
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I refresh the page
   And I get the first contractor on list
   

   And I set the contractor job status from "Auto Notification" to "Allocated"
   Then I confirm the job status "Allocated"
   And I set the contractor job status from "Allocated" to "Returned"
  
   And I search for first contractor on list
   And I refresh the page
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Allocated"
   Then I confirm the job status "Allocated"
   And I set the contractor job status from "Allocated" to "Returned"


   And I refresh the page
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Refused Job"
   And I set the contractor job status from "Refused Job" to "Allocated"
   Then I confirm the job status "Allocated"

   And I set the contractor job status from "Allocated" to "Returned"
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Voicemail Left"
   And I set the contractor job status from "Voicemail Left" to "Allocated"
   Then I confirm the job status "Allocated"

   And I set the contractor job status from "Allocated" to "Returned"
   And I search for first contractor on list
   And I set the contractor job status from "Returned" to "Unavailable"
   And I set the contractor job status from "Unavailable" to "Allocated"
   Then I confirm the job status "Allocated"

   And I set the contractor job status from "Allocated" to "Transfer"
   And I search for first contractor on list
   And I set the contractor job status from "Transfer" to "Allocated"
   Then I confirm the job status "Allocated"

   And I set the contractor job status from "Allocated" to "Late Arrival - Rejected"
   And I click yes to confirm late rejection
   Then I confirm the job status "Late Arrival - Rejected"
   And I refresh the page
   And I search for first contractor on list

   And I set the contractor job status from "Late Arrival - Rejected" to "Allocated"
   And I set the contractor job status from "Allocated" to "Interpreter No Show"
   And I click yes to confirm no show
   Then I confirm the job status "Interpreter No Show"

   Examples:
  |job id    | original status   | contractor job status   | dropdownfilter |  job status   |  contractor name    |
  | 1578054  | Auto Notification | Voicemail Left          | Management     |   Unallocated |   Suzane            |
 