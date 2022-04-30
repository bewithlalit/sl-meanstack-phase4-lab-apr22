module.exports = (grunt)=> {
    // load the package.json file
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
    });
    grunt.registerTask("removeAllContents", ()=>{
        grunt.config("copy",{
            main:{
                expand: true,
                cwd: "src",
                src: "**",
                dest: "dist/"
            }
        })
        grunt.task.run("copy")
    });

    grunt.registerTask("cleanfiles", ()=>{
        grunt.config("clean", {
            contents: ["dist/**"]
        })
        grunt.task.run("clean")
    })
    grunt.registerTask("csstask", ()=>{
        grunt.config("cssmin", {
            target: {
                files: {
                    "dist/css/styles.min.css":["src/css/*"]
                }
            }
        })
        grunt.task.run("cssmin")
    })
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", [])
}