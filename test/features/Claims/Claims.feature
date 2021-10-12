@Claims
Feature: Claims processing features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @SearchForClaimJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I enter interview date before "<before date>"
   And I select "<status>" job status
   Then I verify the job table is displayed

   
   Examples:
   | username           | password    | status                 | before date | job id  |
   | LLAdmin@looped.in  | Octopus@6    | Completed              |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Octopus@6    | Signed off             |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Octopus@6    | All                    |  13-05-2022 | 1544161 |
   | LLAdmin@looped.in  | Octopus@6    |  Processed             |  13-05-2022 | 1560450 |
   | LLAdmin@looped.in  | Octopus@6    | Cancelled & Processed  |  13-05-2022 | 1537266 |
   | LLAdmin@looped.in  | Octopus@6    | Cancelled & Signed off |  13-05-2022 | 1537266 |

  @ProcessClaims @ProcessCampus @ProcessContractor @v1
  Scenario Outline: Process claims - process contractor, campus
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus button
   And I click process contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ProcessCampusAndContractor
  Scenario Outline: Process claims - process campus and contractor
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus and contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ProcessCampusOnly
  Scenario Outline: Process claims -  process campus only
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click process campus button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Processed" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Processed    |

  @ProcessClaims @ReprocessCampusOnly 
  Scenario Outline: Process claims - campus only
   When I login with "<username>" and "<password>"
   And I click Claims header link  
  And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess campus button
   And I handle reprocess confirmation
   And I click process campus button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ReprocessContractorOnly
  Scenario Outline: Process claims - contractor only
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess contractor button
   And I handle reprocess confirmation
   And I click process contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @ReprocessCampusAndContractor
  Scenario Outline: Process claims - reprocess campus and contractor
   When I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   Then I verify the contractor fee
   And I verify the campus fee
   And I click reprocess campus and contractor button
   And I handle reprocess campus and contractor confirmation
   And I click process campus and contractor button
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Signed off  |  13-05-2022 | 1560450 | Signed off   |

  
  #  @ProcessClaims @Extend
  # Scenario Outline: Process claims - extension
  #  When I login with "<username>" and "<password>"
  #  And I click Claims header link  
  #  And I close all special search criteria
  #  And I select "<status>" job status
  #  And I get the campus fee for first job
  #  And I get the contractor fee for first job
  #  And I click on first job id from claims job list
  #  And I switch to the claims window
  #  Then I verify the contractor fee
  #  And I verify the campus fee
  #  And I get job finish time
  #  And I get job actual minutes
  #  And I enter new job finish time

  #  Examples:
  #  | username           | password    | status      | to date     | job id  | claim status |
  #  | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

 @BulkProcessClaims
  Scenario Outline: Process claims - bulk claims
   When I login with "<username>" and "<password>"
   And I create a new vic roads job request for bulk requests "long notice"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I refresh the page
   And I search for contractor "RAHEEM"
   And I set the contractor job status from "Not eligible" to "Allocated"
   And I navigate to dev page
   And I set the job to "Complete"
 # Get the rsc fee of the newly created job request
   And the looped in login page is opened
   And I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I select "<status>" job status
   And I search for created job request
   And I click on first job id from claims job list
   And I switch to the claims window
   And I get the rsc fee
# perform bulk process action. one of the job request selected should the newly created job request
   And I switch to the claims main window
   And I close all special search criteria
   And I select "<status>" job status
   And I search for job request " "
   And I select "1" jobs from search results
   And I search for created job request
   And I select "1" jobs from search results
   And I click bulk process claim button
   And I confirm bulk claim process dialog
   Then I confirm the bulk claim process success message appears

   And I select "Processed" job status
   And I search for created job request
   And I click on first job id from claims job list



   Examples:
   | username           | password    | status      | to date     | job id  | claim status |
   | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   |

  @ProcessClaims @VicRoads
  Scenario Outline: Process claims - vic roads
   When I login with "<username>" and "<password>"
   And I create a new vic roads job request with minimal fields "long notice"
   And I click Interpreting header link
   And I search for created job request
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I refresh the page
   And I search for contractor "Abbas Steven KAZEMI"
   And I set the contractor job status from "Not eligible" to "Allocated"
   And I navigate to dev page
   And I set the job to "Complete"
   And the looped in login page is opened
   And I login with "<username>" and "<password>"
   And I click Claims header link  
   And I close all special search criteria
   And I search for created job request
   And I click advanced search link
   And I select "Travel Fee" search criteria category
   And I select ">" search criteria condition
   And I select "<status>" job status
   And I get the campus fee for first job
   And I get the contractor fee for first job
   And I click on first job id from claims job list
   And I switch to the claims window
   And I click process campus and contractor on claims page
   Then I verify the contractor fee
   And I verify the campus fee
   And I verify vic road travel fee
   And I click Claims header link
   And I close all special search criteria
   And I search for selected job request
   And I select "Signed off" job status
   Then I verify the job status is "<claim status>"
   
   Examples:
   | username           | password    | status      | to date     | job id  | claim status | campus name            |
   | LLAdmin@looped.in  | Octopus@6    | Completed   |  13-05-2022 | 1560450 | Signed off   | vic roads wodonga      |

