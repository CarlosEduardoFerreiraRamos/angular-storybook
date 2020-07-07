pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        node(label: 'fire-base') {
          sh 'fire-base --version'
        }

        sh 'npm --version'
      }
    }

  }
}