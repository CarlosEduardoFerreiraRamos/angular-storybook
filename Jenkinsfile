pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        node(label: 'node') {
          sh 'node --version'
        }

        sh 'npm --version'
      }
    }

  }
}