pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        tool(name: 'nodejs', type: 'node')
        sh 'npm --version'
      }
    }

  }
}