package features.patchUser;

import com.intuit.karate.junit5.Karate;

public class PatchUserRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("patchUser").relativeTo(getClass());
    }

}
