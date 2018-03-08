node{
     stage('checkout') {
         checkout scm
     }
     stage('install') {
         sh "yarn install"
     }
     stage('build'){
         sh "yarn run build"
         }
     stage('test'){
         sh "yarn run testCI"
     }
 }