var Docker = require('dockerode');
const streams = require('memory-streams')

function getCmdArray(lang) {
    switch ( lang ) {
        case 'cpp':
            return ['g++', '--version']
        default:
            return ['g++', '--version']
    }
}

export default function exec(req, res) {
    if (req.method === 'POST') {
        const { input, lang } = req.body
        console.log(input)

        var docker = new Docker(); //defaults to above if env variables are not used
        const stdout = new streams.WritableStream()
        
        // Promise<T>
        docker.run('excontainer:1.0', getCmdArray(lang), stdout).then(function (data) {
            var container = data[1];
            console.log("Output : " + stdout.toString() + " ----")
            return container.remove();
        }).then(function (data) {
            console.log('container removed');
        
        }).catch(function (err) {
            console.log('ERR: ' + err);
        });
        res.status(200).json({ output: "ok" })
    }
}