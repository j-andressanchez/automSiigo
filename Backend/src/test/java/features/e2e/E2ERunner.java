package features.e2e;

import com.intuit.karate.junit5.Karate;

public class E2ERunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("e2e").relativeTo(getClass());
    }

}
