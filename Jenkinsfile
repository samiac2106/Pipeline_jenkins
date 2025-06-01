pipeline {
    agent any

    environment {
        REPO_URL='https://github.com/samiac2106/Pipeline-Div-Politica'
        BRANCH='main'
        DOCKER_IMAGE='apidivisionpolitica:latest'
    }

    stages{
        stage('Clonar el repositorio'){
            steps{
                git branch: "${BRANCH}", credentialsId: "100", url: "${REPO_URL}"
            }
        }

        stage('Construir la imagen de Docker'){
            steps{
                script {
                    bat 'docker build -t %DOCKER_IMAGE% .'
                }
            }
        }

        stage('crear contenedor'){
            steps{
                script {
                     bat 'docker container run --network reddivisionpolitica --name dockerapidivisionpolitica -p 8580:3030 -d %DOCKER_IMAGE%'
                     
                   }
                }
            }
        }

         
    }
}