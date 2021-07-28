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
    }

    
    
}