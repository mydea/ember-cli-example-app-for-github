export default function () {

    this.timing = 1000;

    this.get("/users");
    this.get("/user");
}

/*
 You can optionally export a config that is only loaded during tests
 export function testConfig() {

 }
 */
