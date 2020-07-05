pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        tool(name: 'node.js', type: 'nodejs')
        sh 'npm --version'
      }
    }

  }
}