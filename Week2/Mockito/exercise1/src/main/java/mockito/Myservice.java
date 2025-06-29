package Week2.Mockito.exercise1.src.main.java.mockito;

public class Myservice {
   private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
