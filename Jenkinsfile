pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/ashyT-Cloud/gym-ci-cd.git'
      }
    }

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

