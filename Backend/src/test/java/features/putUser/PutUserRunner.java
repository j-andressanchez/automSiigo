package features.putUser;

import com.intuit.karate.junit5.Karate;

public class PutUserRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("putUser").relativeTo(getClass());
    }

}
