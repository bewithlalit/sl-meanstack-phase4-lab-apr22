module.exports = (grunt)=> {
    // load the package.json file
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
    });

    grunt.registerTask("first", "First task", ()=>{
        console.log("this is also working");
    });

    grunt.registerTask("second", "Second task", ()=>{
        console.log("Second is also working");
    });

    grunt.registerTask("third", "third task", ()=>{
        console.log("third is also working");
    });

    grunt.registerTask("default", ["first", "second", "third"])
}