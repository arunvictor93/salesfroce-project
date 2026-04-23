@RestResource(urlMapping='/Accounts/*/contacts')
global class AccountManager {
	@HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        // grab the caseId from the end of the URL
        System.debug('url='+request.requestURI);
        //String accountId = request.requestURI.substring(9,27);
        String accountId =request.requestURI.substringBetween('Accounts/','/contacts');

        System.debug('accountId:='+accountId);
        Account result =  [SELECT Id,Name,(Select Id,name from Contacts)
                        FROM Account
                        WHERE Id = :accountId]; 
        return result;
    }
}