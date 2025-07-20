package features.deleteUser;

import com.intuit.karate.junit5.Karate;

public class DeleteUserRunner {

    @Karate.Test
    Karate testUsers() {
        return Karate.run("deleteUser").relativeTo(getClass());
    }

}
