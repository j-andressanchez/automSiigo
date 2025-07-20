package features.getUser;

import com.intuit.karate.junit5.Karate;

public class GetUserRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("getUser").relativeTo(getClass());
    }

}
