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
        stage('Detener contenedor existente'){
            steps{
                script {
                    catchError(build:'SUCCESS', stageResult:'UNSTABLE') {
                    bat """ 
                    docker container inspect docker container stop dockerapidivisionpolitica >nul 2>&1 &&(
                    docker container stop dockerapidivisionpolitica 
                    docker container rm dockerapidivisionpolitica
                    ) || echo "no existe el contenedor 'dockerapidivisionpolitica'"  
                    """
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