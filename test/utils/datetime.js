

module.exports={
   
    getScheduleDateTime(notice,timeStr)
    {
        var temp_date=""
        var temp_time=timeStr
        var schedule= new Array()
        switch(notice)
        {
              case "long notice":
                temp_date=this.getLongNoticeDate().toString()
                break
              case "short notice":
                temp_date=this.getShortNoticeDate().toString()
                temp_time=this.getShortNoticeTime().toString()
                break
              case "fortnight after":
                temp_date=this.getFortnightDate().toString()
                break
              case "two hours after":
                temp_date=new Date()
                temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
                temp_time=this.getTwoHoursTime().toString()
                break
            case "random future date":
                //temp_date=this.getRandomFutureDate().toString()
                temp_date=this.generateRandomDate().toString()
                temp_time="09:30"
                break
        }
        schedule.push(temp_date)
        schedule.push(temp_time)
        return schedule
    },

    getConfirmationDateTime(notice,timeStr)
    {
        var temp_date=""
        var temp_time=timeStr
        var schedule= new Array()
        switch(notice)
        {
              case "long notice":
                temp_date=this.getLongNoticeConfirmationDate().toString()
                break
              case "short notice":
                temp_date=this.getShortNoticeConfirmationDate().toString()
                temp_time=this.getShortNoticeConfirmationTime().toString()
                break
              case "fortnight after":
                temp_date=this.getFortnightConfirmationDate().toString()
                break
              case "two hours after":
                temp_date=new Date()
                temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
                temp_time=this.getTwoHoursConfirmationTime().toString()
                break
             case "random future date":
                temp_date=this.getLongNoticeConfirmationDate().toString()
                temp_time="09:30"
                break
             

        }
        schedule.push(temp_date)
        schedule.push(temp_time)
        return schedule
    },

    getShortNoticeDate()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 23)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getShortNoticeConfirmationDate()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 23)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getShortNoticeTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 23)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getShortNoticeConfirmationTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 21)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getRandomFutureDate()
    {
        randomnumber = (Math.floor(Math.random() * 100000) + 1)
        console.log("RANDOM NUMBER :::: "+randomnumber)
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + randomnumber)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },
    generateRandomDate() { 
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+30)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getLongNoticeDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+7)
        if(temp_date.getDay()==0 || temp_date.getDay()==6)
        {
            temp_date.setDate(temp_date.getDate()+2)
        }
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getLongNoticeConfirmationDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+4)
        if(temp_date.getDay()==0 || temp_date.getDay()==6)
        {
            temp_date.setDate(temp_date.getDate()+2)
        }
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getTwoHoursTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 2)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getTwoHoursConfirmationTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours() + 1)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getConfirmationDate()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours()+22)
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getConfirmationTime()
    {
        temp_date=new Date()
        temp_date.setHours(temp_date.getHours()+22)
        temp_time=temp_date.getHours()+":"+temp_date.getMinutes()
        return temp_time
    },

    getFortnightDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+14)
        if(temp_date.getDay()==0 || temp_date.getDay()==6)
        {
            temp_date.setDate(temp_date.getDate()+2)
        }
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    getFortnightConfrimationDate()
    {
        temp_date=new Date()
        temp_date.setDate(temp_date.getDate()+13)
        if(temp_date.getDay()==0 || temp_date.getDay()==6)
        {
            temp_date.setDate(temp_date.getDate()+2)
        }
        temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
        return temp_date
    },

    /**
     * converts the date input in DD/MM/YYYY HH:mm:ss format and outputs date in full text string format
     * @param dateString date sting in DD/MM/YYYY HH:mm:ss format
     * @returns {Date}
     */
    parseDateString(dateString) {
        var dateParts = dateString.split(' ');
        var dateOnlyString = dateParts[0];
        var timeString = dateParts[1];
        var dateOnlyParts = dateOnlyString.split('/');
        var year = dateOnlyParts[2];
        var month = dateOnlyParts[1] - 1;
        var day = dateOnlyParts[0];
        var timeParts = timeString.split(':');
        var hours = timeParts[0];
        var minutes = timeParts[1];
        var seconds = timeParts[2];
        return new Date(year, month, day, hours, minutes, seconds);
    },

    /**
     * Returns current date in HH/MM/YYYY format
     * @returns {string}
     */
    getCurrentDate(){
        const today = new Date()
        const year = today.getFullYear()
        const month = `${today.getMonth() + 1}`.padStart(2, "0")
        const day = `${today.getDate()}`.padStart(2, "0")
        const stringDate = [day, month, year].join("/")
        return stringDate;
    }
    

}