module.exports = {

    get totalCallsInfoIcon() {
        return $('//div[text()="Total Calls"]/span/span');
    },

    get totalCallsInfoIconText() {
        return $('//span[text()="Total calls received for all languages, including unanswered calls"]');
    },

    get totalCallsConnectedInfoIcon() {
        return $('//div[text()="Total Calls Connected"]/span/span');
    },

    get totalCallsConnectedInfoIconText() {
        return $('//span[text()="Total calls where atleast one interpreter was connected to the call, even for less than 60seconds"]');
    },

    get serviceabilityPercentageInfoIcon() {
        return $('//div[text()="Serviceability %"]/span/span');
    },

    get serviceabilityPercentageInfoIconText() {
        return $('//span[text()="Total calls connected/Total calls"]');
    },
}