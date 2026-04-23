public class MyIterable implements Iterable<String>{
	 // Class variable to store the list of strings
    private List<String> strings;

    // Constructor to initialize the list
    public MyIterable(List<String> strings) {
        this.strings = strings;
    }

    // Iterator method implementation
    public Iterator<String> iterator() {
        return strings.iterator();
    }
}