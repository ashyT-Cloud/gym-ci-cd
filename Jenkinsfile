pipeline {
  agent any

  stages {
    stage('Build Docker Images') {
      steps {
        sh 'sudo docker-compose build'
      }
    }

    stage('Deploy Containers') {
      steps {
        sh 'sudo docker-compose up -d'
      }
    }
  }
}

