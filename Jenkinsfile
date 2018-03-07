node('docker') {
    checkout scm
    stage('Build') {
        docker.image('node:8.1.4').inside {
            sh 'npm --version'
        }
    }
}