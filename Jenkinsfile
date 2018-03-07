node{
    stage('git clone'){
       git url: 'https://github.com/yqxiaxia/react-demo.git'
    }
    stage('test'){
        sh "echo 'test done'"
        sh 'node --version'
    }
    stage('build'){
        sh "echo 'build done'"
    }
}