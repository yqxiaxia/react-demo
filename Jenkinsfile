node{
    checkout scm
    sh 'npm install'
    stage('build'){
          sh "npm run build"
        }
    stage('test'){
        sh "npm run testCI"
    }
}