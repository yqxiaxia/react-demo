pipeline {
    agent any

    stages {

      stage('checkout') {
           steps {
                checkout scm
           }
      }
      stage('install') {
          steps {
              sh 'npm install'
          }
      }
      stage('build') {
          steps {
              sh 'npm run build'
          }
      }
      stage('test') {
          steps {
              sh 'npm run testCI'
          }
      }
      stage('Deploy for development') {
          when {
              branch 'development'
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
}