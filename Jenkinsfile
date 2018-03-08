node{
     stage('checkout') {
         checkout scm
     }
     stage('install') {
         sh "npm install"
     }
     stage('build'){
         sh "npm run build"
         }
     stage('test'){
         sh "npm run testCI"
     }
 }