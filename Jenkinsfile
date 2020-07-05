pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        tool(name: 'node', type: 'node')
        sh 'npm --version'
      }
    }

  }
}