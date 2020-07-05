pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        tool(name: 'node.js', type: 'node')
        sh 'npm --version'
      }
    }

  }
}