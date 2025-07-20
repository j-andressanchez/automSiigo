package features.postUser;

import com.intuit.karate.junit5.Karate;

class PostUserRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("postUser").relativeTo(getClass());
    }    

}
