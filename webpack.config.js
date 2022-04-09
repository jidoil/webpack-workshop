const {resolve} = require('path');

module.exports = {
    target: "web",                              // 노드가 아니라 웹브라우저가 대상.
    mode: "development",                        // 배포용 모드. 
    entry: "./src/index.js",                    // 입력 파일.
    output:{ 
        path: resolve(__dirname, "bin"),        // 출력 파일의 위치. 절대 경로. 오브젝트 타입.
        filename: "bundle.js"                   // 출력 파일.
    },
    devServer: {
        static: resolve(__dirname, "public"),
        port: 7777,
    }
}

