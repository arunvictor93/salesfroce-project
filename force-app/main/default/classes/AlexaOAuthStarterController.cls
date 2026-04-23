public class AlexaOAuthStarterController {
 
    //Load action executed by the visualforce page called by Alexa's linked account attempt
    //ATTENTION: change the "communityName" and "alexaOauthCallbackURL" variables with the 
    //correct values
    public PageReference onLoad(){
        //change this with your current community folder name (or leave blank string)
        String communityFolder = '/alexaforce';
        //redirect uri configured in the Alexa Skill configuration
        String alexaOauthCallbackURL = 'https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=XXXXXXXXX';
        String communityURL = URL.getSalesforceBaseUrl().toExternalForm()+communityFolder;
        PageReference page = new PageReference(communityURL+'/services/oauth2/authorize');
        for(String k : ApexPages.currentPage().getParameters().keyset()){
            page.getParameters().put(k, ApexPages.currentPage().getParameters().get(k));
        }
        //appends the "redirect_uri" that amazon's configuration does not send
        //this class should be configured to change depending on the context (1 visualorce page per skill?)
        page.getParameters().put('redirect_uri',alexaOauthCallbackURL);
        return page;
    }
}