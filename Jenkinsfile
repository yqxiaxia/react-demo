node{
    stage('checkout') {
        checkout scm
    }
    stage('install') {
        PKG_SUM=$(md5sum package.json|cut -d\  -f 1)
        CACHED_FILE=${PKG_SUM}.tgz
        [[ -f ${CACHED_FILE} ]] && tar zxf ${CACHED_FILE}
        npm install
        [[ -f ${CACHED_FILE} ]] || tar zcf ${CACHED_FILE} node_moduels
    }
    stage('build'){
          sh "npm run build"
        }
    stage('test'){
        sh "npm run testCI"
    }
}