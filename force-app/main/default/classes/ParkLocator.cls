public class ParkLocator{
    public static String[] country(String loc){
        ParkService.ParksImplPort park= new ParkService.ParksImplPort();
        String[] parks=park.byCountry(loc);
        System.debug('parks:='+parks);
        return parks;
    }
}