global class AnimalLocatorMock implements HttpCalloutMock{
    global HttpResponse respond(HTTPRequest request){
        HttpResponse response=new HttpResponse();
        response.setHeader('Content-Type', 'application/json');
        response.setBody('{"animal":{"id":0,"name":"","eats":"","says":""}}');
        response.setStatusCode(200);
        return response;
    }
}