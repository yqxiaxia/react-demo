node{
    checkout scm
    sh 'npm install'

    stage('build'){
            sh "echo 'build'"
        }
    stage('test'){
        sh "npm run pip"
    }

}