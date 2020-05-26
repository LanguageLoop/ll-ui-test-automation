@CancelBooking
Feature: Cancel existing booking

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @CancelUnallocatedJobRequest
  Scenario Outline: Cancel a unallocated job request
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I click on Cancel button
   And I click confirm cancel yes button
   And I select "<cancel reason>" cancel reason
   And I select "<on behalf>" on behalf
   And I submit cancel job confirmation
   And I search for created job request
   Then I confirm the job is cancelled without fee
   And The job id is added to the file
  
   Examples:
   |   cancel reason                                 |   on behalf       | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  |
   | NES client no-show                              | Automation Tester | two hours after   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
   | NES client no-show                              | Automation Tester | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
   | NES client no-show                              | Automation Tester | long notice       | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | 
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | long notice       | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | 
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | two hours after   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |

 @CancelAllocatedJobRequest 
  Scenario Outline: Cancel a allocated job request 
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I set the contractor job status to "<contractor job status>"
   And I click on Cancel button
   And I click confirm cancel yes button
   And I select "<cancel reason>" cancel reason
   And I select "<on behalf>" on behalf
   And I submit cancel job confirmation
   And I search for created job request
   Then I confirm the job is cancelled without fee
   And The job id is added to the file
 
   Examples:
   |   cancel reason                                 |   on behalf       | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  | contractor job status | 
   #| NES client no-show                              | Automation Tester | long notice       | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |

@CancelAllocatedJobRequest @LessThan24Hours
  Scenario Outline: Cancel a allocated job request within 24 hours of the schedule
   When I login with "<username>" and "<password>"
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I set the contractor job status to "<contractor job status>"
   And I click on Cancel button
   And I confirm yes to cancellation fee
   And I select "<cancel reason>" cancel reason
   And I select "<on behalf>" on behalf
   And I submit cancel job confirmation
   And I search for created job request
   Then I confirm the job is cancelled with fee
   And The job id is added to the file
  
   Examples:
   |   cancel reason                                 |   on behalf       | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type      | date            | time  | duration | email        | job status  | contractor job status | 
   | NES client no-show                              | Automation Tester | two hours after   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |
   | NES client no-show                              | Automation Tester | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | short notice      | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |
   | Job request error (Date,Time, Duration, etc..)  | Automation Tester | two hours after   | LLAdmin@looped.in  | Uranus@6 | Management     |  33124     |  Automation Tester  |  AFRIKAANS | Zero min and ongoing | fortnight after | 09:30 | 4 hours  | hh@bb.com.au | Unallocated | Allocated             |
