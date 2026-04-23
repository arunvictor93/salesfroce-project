@IsTest
public class MyIterableTest {
	 @IsTest
    static void testIterableForLoopCopy() {
        // Create a list of strings
        List<String> strings = new List<String>{'Hello', 'World'};
        
        // Create an instance of MyIterableCopy with the list
        MyIterable myIterable = new MyIterable(strings);
        
        // Iterate using a for loop
        for (String str : myIterable) {
            System.debug(str);
        }
        
        // Optional: You can add an assertion to ensure list integrity
        System.assertEquals(2, strings.size());
    }
}