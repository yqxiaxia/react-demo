pipeline{
    agent any
    stage('checkout') {
        checkout scm
    }
    stage('install') {
        yarn install
    }
    stage('build'){
          sh "yarn run build"
        }
    stage('test'){
        sh "yarn run testCI"
    }
    stage('Deploy for dev') {
        when {
            branch 'dev'
        }
        steps {
            echo 'Deploy for development'
        }
    }
    stage('Deploy for production') {
        when {
            branch 'master'
        }
        steps {
            echo 'build and push docker image to docker hub'
        }
    }
}