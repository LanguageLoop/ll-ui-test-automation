module.exports ={

    
    get translationsLink()
    {
        return $('//a[contains(@id,"block_wtMenuItem_wt17")]')
    },

    get startNewProject()
    {
        return $('//input[contains(@id,"LoopedIn_th_wt32_block_wtActions_wt127")]')
    },

    get campusPinInput()
    {
        return $('input[class="CampusPIN ThemeGrid_Width11"]')
    },

    get selectContact()
    {
        return $('//a[contains(@id,"wtUserDetailTable_ctl03_wt21")]')
    },

    get selectContactWin()
    {
        return $('//span[contains(@id,"wt45_Modal_wtcontactDialog_block_wtlblTitle")]')
    },
    get nextButton()
    {
        return $('input[value="Next"]')
    },
    get projName()
    {
        return $('//input[contains(@id,"wt64_block_wtColumn1_wtProjname")]')
    },
    get projManager()
    {
        return $('//select[contains(@id,"wtColumn1_wtcmbProjectOfficer")]')
    },
    get serviceType()
    {
        return $('//select[contains(@id,"wtColumn1_wtcmbService")]')
    },
    get selWorkflow()
    {
        return $('//select[contains(@id,"wtColumn1_wtcmbWorkflow")]')
    },
    get delDate()
    {
        return $('//input[contains(@id,"wtColumn1_wtEarliestStart2")]')
    },
    get languageFrom()
    {
        return $('//div[contains(@id,"wt64_block_wtColumn1_wtcbLanguage")]')
    },
    get languageTo()
    {
        return $('#select2-chosen-4')
    },
    get addFilesLink()
    {
        return $('a[tabindex="235"]')
    },
    get addFiles()
    {
        return $('input[type="file"]')
    },
    get upload()
    {
        return $('input[value="Upload"]')
    },
    
    get save()
    {
        return $('input[value="Save & Proceed"]')
    },
    
}