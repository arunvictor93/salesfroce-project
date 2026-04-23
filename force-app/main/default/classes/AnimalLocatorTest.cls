@isTest
public class AnimalLocatorTest {
    @isTest static void testPostCallout() {
        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock()); 
        // This causes a fake response to be sent
        String name = AnimalLocator.getAnimalNameById(1);
    }
}