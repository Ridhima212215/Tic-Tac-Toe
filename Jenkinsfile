pipeline {
    agent any

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t ml-model .'
            }
        }

        stage('Run Model') {
            steps {
                sh 'docker run ml-model'
            }
        }

        stage('Print Details') {
            steps {
                echo "Name: Ridhima Edimadakala"
                echo "Roll No: 2022BCS0047"
            }
        }
    }
}