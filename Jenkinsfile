pipeline {
  agent {
    node {
      label 'node build'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }

    stage('') {
      steps {
        timeout(time: 10, unit: 'SECONDS', activity: true)
      }
    }

  }
}